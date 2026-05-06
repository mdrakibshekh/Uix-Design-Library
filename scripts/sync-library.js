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
    await page.goto('http://localhost:3333', { waitUntil: 'networkidle2' });

    // Wait up to 10 seconds for data to appear
    console.log('⏳ Waiting for components to serialize...');
    await page.waitForFunction(() => 
      window.__UIX_LIBRARY_DATA__ && window.__UIX_LIBRARY_DATA__.length > 0,
      { timeout: 10000 }
    ).catch(() => console.log('⚠️ Timeout waiting for data, proceeding anyway...'));

    // The logic to extract all payloads
    console.log('📦 Extracting component data...');
    const libraryData = await page.evaluate(() => {
      return window.__UIX_LIBRARY_DATA__ || []; 
    });

    console.log(`📊 Found ${libraryData.length} component variants.`);

    if (libraryData.length > 0) {
      const outputPath = path.join(__dirname, '../public/api/library_data.json');
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify({ success: true, data: libraryData, updatedAt: new Date().toISOString() }, null, 2));
      console.log('✅ Library data generated successfully!');
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
