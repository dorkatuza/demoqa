const {describe, it} = require('mocha');
const {expect} = require('chai');
const MainPage = require('../pageobjects/MainPage');
const sideSubmenuComponent = require('../components/sideSubmenuComponent');
const ElementsPage = require('../pageobjects/ElementsPage');

describe('Text Box Test:', () => {
    before(async () => {
        await MainPage.open();
        await MainPage.elementsHeader.scrollIntoView();
        await MainPage.selectMenuItem(MainPage.elementsHeader);
    })
    it('Navigate to the Text Box form from sidemenubar', async () => {
        await sideSubmenuComponent.selectSubmenuItem('textbox');
    })
    it('Fill the form with valid data', async () => {
        await ElementsPage.textboxForm('name').setValue("Jane");
        await ElementsPage.textboxForm('email').setValue("sample@example.com");
        await ElementsPage.textboxForm('current').setValue("Address One");
        await ElementsPage.textboxForm('permanent').setValue("Address Two");
        await ElementsPage.submitButton.scrollIntoView();
        await ElementsPage.submitButton.click();
        const outputText = await ElementsPage.textboxOutput.getText();
        await expect(outputText).to.equal('Name:Jane\nEmail:sample@example.com\nCurrent Address :Address One\nPermananet Address :Address Two');
    })
    after(async () => {
        await browser.deleteSession();
    });
})
