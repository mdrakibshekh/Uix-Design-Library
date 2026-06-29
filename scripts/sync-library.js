const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function sync() {
  console.log('🚀 Starting Library Sync Engine...');
  
  // 1. Start local dev server
  const vite = spawn('npx', ['vite', '--port', '3333'], { stdio: 'inherit', shell: true });
  
  // Wait for server to be ready
  await new Promise(resolve => setTimeout(resolve, 5000));

  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();
  
  try {
    console.log('🌐 Connecting to local library...');
    await page.goto('http://localhost:3333/?automation=true', { waitUntil: 'networkidle2' });

    // Wait for ALL components to serialize
    console.log('⏳ Waiting for full library serialization...');
    await page.waitForFunction(() => {
      const current = window.__UIX_CURRENT_COUNT__ || 0;
      const total = window.__UIX_TOTAL_VARIANTS__ || 999;
      return current >= total;
    }, { timeout: 60000 }).catch(async () => {
      const current = await page.evaluate(() => window.__UIX_CURRENT_COUNT__ || 0);
      const total = await page.evaluate(() => window.__UIX_TOTAL_VARIANTS__ || 0);
      console.log(`⚠️ Timeout reached. Proceeding with ${current}/${total} variants...`);
    });

    // Extract and group component data
    console.log('📦 Extracting component data...');
    const libraryData = await page.evaluate(() => {
      const rawData = window.__UIX_LIBRARY_DATA__ || [];
      
      // Normalize: flatten if grouped, otherwise use as-is
      if (Array.isArray(rawData) && rawData.length > 0 && rawData[0].variants) {
        // Already grouped
        return rawData;
      } else if (Array.isArray(rawData)) {
        // Individual payloads - group them by component
        const grouped = {};
        rawData.forEach((item) => {
          const compName = item.componentName || item.component || 'Other';
          const compId = item.componentId || item.component?.toLowerCase().replace(/\\s+/g, '-') || 'other';
          if (!grouped[compId]) {
            grouped[compId] = {
              id: compId,
              name: compName,
              category: item.category || 'Base',
              description: item.description || '',
              variants: []
            };
          }
          grouped[compId].variants.push({
            id: item.variantId || `${compId}-${(item.variant || 'variant').toLowerCase().replace(/\s+/g, '-')}`,
            name: item.variant,
            properties: {
              variantId: item.variantId,
              variantGroup: item.variantGroup,
              variantType: item.variantType,
              variantSize: item.variantSize,
              variantModifiers: item.variantModifiers,
              variantTags: item.variantTags,
              theme: item.theme,
            },
            figmaLayers: item.figmaLayers,
            preview: item.visualPreview,
          });
        });
        return Object.values(grouped);
      }
      return [];
    });

    const totalVariants = await page.evaluate(() => window.__UIX_CURRENT_COUNT__ || 0);
    console.log(`📊 Found ${libraryData.length} Component Categories with ${totalVariants} total variants.`);

    if (libraryData.length > 0) {
      // Build the export payload with statistics
      const exportData = {
        success: true,
        data: libraryData,
        stats: {
          totalComponents: libraryData.length,
          totalVariants: totalVariants,
          byCategory: libraryData.reduce((acc, group) => {
            const category = group.category || 'Base';
            acc[category] = (acc[category] || 0) + 1;
            return acc;
          }, {})
        },
        updatedAt: new Date().toISOString()
      };

      const outputPath = path.join(__dirname, '../public/api/library_data.json');
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2));
      console.log('✅ Library data generated successfully!');
      console.log(`   📁 Output: ${outputPath}`);
      console.log(`   📈 Stats: ${exportData.stats.totalComponents} components, ${exportData.stats.totalVariants} variants`);
    } else {
      console.warn('⚠️ No library data found. Make sure the app exposes window.__UIX_LIBRARY_DATA__');
    }

  } catch (err) {
    console.error('❌ Sync failed:', err);
  } finally {
    await browser.close();
    vite.kill();
    process.exit(0);
  }
}

sync();
