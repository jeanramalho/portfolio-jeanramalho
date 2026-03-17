const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        console.log("Launching browser...");
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        
        console.log("Navigating to https://attekitadev.com...");
        await page.goto('https://attekitadev.com', { waitUntil: 'networkidle2' });
        
        console.log("Extracting design tokens...");
        const designSystem = await page.evaluate(() => {
            const elements = document.querySelectorAll('*');
            const colors = new Set();
            const bgColors = new Set();
            const fontFamilies = new Set();
            const fontSizes = new Set();
            
            // Extract colors and fonts from all elements
            elements.forEach(el => {
                const style = window.getComputedStyle(el);
                
                // Only non-transparent backgrounds
                let bg = style.backgroundColor;
                if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') bgColors.add(bg);
                
                let textColor = style.color;
                if (textColor && textColor !== 'rgba(0, 0, 0, 0)') colors.add(textColor);
                
                let font = style.fontFamily;
                if (font) fontFamilies.add(font);
            });
            
            // Extract specific typography block structures
            const typography = {};
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'button'].forEach(tag => {
                const els = document.querySelectorAll(tag);
                if (els.length > 0) {
                    const style = window.getComputedStyle(els[0]);
                    typography[tag] = {
                        fontFamily: style.fontFamily,
                        fontSize: style.fontSize,
                        fontWeight: style.fontWeight,
                        lineHeight: style.lineHeight,
                        color: style.color
                    };
                    fontSizes.add(style.fontSize); // add to general set
                }
            });

            // Extract main layout/container sizes
            const containers = document.querySelectorAll('main, section, header, footer, .container');
            const layout = {};
            if (containers.length > 0) {
                // Approximate max-width of container if any
                const containerStyles = window.getComputedStyle(containers[0]);
                layout.padding = containerStyles.padding;
                layout.maxWidth = containerStyles.maxWidth;
            }

            return {
                colors: {
                    background: Array.from(bgColors),
                    text: Array.from(colors),
                },
                typography: {
                    fontFamilies: Array.from(fontFamilies),
                    sizes: Array.from(fontSizes).sort((a, b) => parseFloat(a) - parseFloat(b)),
                    elements: typography
                },
                layout
            };
        });

        console.log("Saving results...");
        fs.writeFileSync('/tmp/design-system.json', JSON.stringify(designSystem, null, 2));
        console.log("Done.");
        await browser.close();
    } catch (e) {
        console.error("Error:", e);
    }
})();
