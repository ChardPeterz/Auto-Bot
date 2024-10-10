// Import Puppeteer
const puppeteer = require('puppeteer');

// Define the bot as an asynchronous function
async function startBot() {
    // Step 1: Launch the browser
    const browser = await puppeteer.launch({
        headless: false, // Set to true if you want to run without the GUI (headless mode)
        defaultViewport: null, // Keep screen size open as default (or you can define it)
        args: ['--start-maximized'] // Open in full screen
    });

    // Step 2: Open a new page
    const page = await browser.newPage();

    // Step 3: Navigate to a website
    await page.goto('https://www.youtube.com/'); // Replace with the target URL

    // To Interact with the page by Clicking a button
    await page.waitForSelector('button'); // Wait for a button to appear
    await page.click('button'); // Click the button

    // To Fill in a form input field (Example)
    await page.type('input[name="q"]', 'Puppeteer Bot'); // Type into an input field

    // To Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });

    // To Close the browser after
    await browser.close();
}

// Call the bot function to start
startBot().catch(error => console.error('Error in bot:', error));

// All dependencies and packages have been installed, only mess around with the code adding desired website and required actions for bot
