const { expect } = require('@playwright/test');

async function validatePageUI(page) {

    console.log("=================================");
    console.log("UI Validation Started");
    console.log("=================================");

    const pageHeight = await page.evaluate(() => document.body.scrollHeight);

    for (let scroll = 0; scroll <= pageHeight; scroll += 500) {

        console.log(`Checking Section : ${scroll}`);

        await page.evaluate((y) => {
            window.scrollTo({
                top: y,
                behavior: 'instant'
            });
        }, scroll);

        await page.waitForTimeout(800);

        await verifyImages(page);

        await verifyButtons(page);

        await verifyLinks(page);

        await verifyInputs(page);

        await verifyText(page);

        await verifyNoHorizontalScroll(page);

    }

    console.log("UI Validation Completed");

}

async function verifyImages(page){

    const images = page.locator("img");

    const count = await images.count();

    console.log(`Images : ${count}`);

    for(let i=0;i<count;i++){

        await expect(images.nth(i)).toBeVisible();

    }

}

async function verifyButtons(page){

    const buttons = page.locator("button");

    const count = await buttons.count();

    console.log(`Buttons : ${count}`);

    for(let i=0;i<count;i++){

        await expect(buttons.nth(i)).toBeVisible();

    }

}

async function verifyLinks(page){

    const links = page.locator("a");

    const count = await links.count();

    console.log(`Links : ${count}`);

    for(let i=0;i<count;i++){

        await expect(links.nth(i)).toBeVisible();

    }

}

async function verifyInputs(page){

    const inputs = page.locator("input");

    const count = await inputs.count();

    console.log(`Inputs : ${count}`);

    for(let i=0;i<count;i++){

        await expect(inputs.nth(i)).toBeVisible();

    }

}

async function verifyText(page){

    const textCount = await page.locator("body *").count();

    console.log(`Elements : ${textCount}`);

}

async function verifyNoHorizontalScroll(page){

    const hasScroll = await page.evaluate(()=>{

        return document.documentElement.scrollWidth >
               document.documentElement.clientWidth;

    });

    expect(hasScroll).toBeFalsy();

}

module.exports = {
    validatePageUI
}