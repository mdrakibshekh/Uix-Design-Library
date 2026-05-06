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

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  try {
    console.log('🌐 Connecting to local library...');
    await page.goto('http://localhost:3333', { waitUntil: 'networkidle2' });

    // The logic to extract all payloads
    console.log('📦 Extracting component data...');
    const libraryData = await page.evaluate(async () => {
      // We need to wait for the React app to populate demoPayloads
      // Since we are in a headless browser, we might need to "click" through categories
      // But for now, we assume the app generates payloads for the visible landing page components.
      
      // Accessing the state from the window if we exposed it, or just scraping the DOM
      // For the most robust way, we'll wait for the 'demoPayloads' to be populated
      // We'll return the value of the internal state if accessible, 
      // or we can re-run the serialization logic here on all elements with a specific class.
      
      const components = [];
      const cards = document.querySelectorAll('article'); // DemoCard
      
      cards.forEach(card => {
        const name = card.querySelector('h3')?.innerText;
        const componentId = name?.toLowerCase().replace(/\s+/g, '-');
        // This is a simplified version; in reality, we'd trigger the serializeToFigma function
        // that is already in the app.tsx.
      });

      // FOR NOW: We'll rely on the app.tsx to have a "Global Export" object we can read
      return window.__UIX_LIBRARY_DATA__ || []; 
    });

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
