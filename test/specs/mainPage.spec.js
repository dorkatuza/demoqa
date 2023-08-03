const {describe, it} = require('mocha');
const {expect} = require('chai');
const MainPage = require('../pageobjects/MainPage');
const ElementsPage = require('../pageobjects/ElementsPage')

//await new Promise((resolve) => setTimeout(resolve, 3000));

describe('Main page and menu navigation test', () => {
    it('Open main page and navigate to Elements from the menu', async () => {
        await MainPage.open();
        await MainPage.elementsHeader.scrollIntoView();
        await MainPage.selectMenuItem(MainPage.elementsHeader);
        const elementsHeader = await ElementsPage.mainHeader.getText();
        await expect(elementsHeader).to.equal('Elements');
    })
    after(async () => {
        await browser.deleteSession();
    });
})

