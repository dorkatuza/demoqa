const {describe, it} = require('mocha');
const {expect} = require('chai');
const MainPage = require('../pageobjects/MainPage');
const sideSubmenuComponent = require('../components/sideSubmenuComponent');
const sidebarComponent = require('../components/sidebarComponent');
const FormsPage = require('../pageobjects/FormsPage')

describe('Practice Form Test:', () => {
    before(async () => {
        await MainPage.open();
        await MainPage.elementsHeader.scrollIntoView();
        await MainPage.selectMenuItem(MainPage.elementsHeader);
    })
    it('Navigate to the Practice Form from sidemenubar', async () => {
        await sidebarComponent.menuItem('forms').scrollIntoView();
        await sidebarComponent.selectMenuItem('forms');
        await sideSubmenuComponent.selectSubmenuItem('practiceform');
        const subHeader = await FormsPage.subHeader.getText();
        await expect(subHeader).to.equal('Student Registration Form');
    })
    after(async () => {
        await browser.deleteSession();
    });
})
