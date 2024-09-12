    const { firefox } = require('playwright');

    (async () => {
        const browser = await firefox.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://admin.zscalerthree.net/');

        // $SELECTION_PLACEHOLDER$
    })();