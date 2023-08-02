const MainPage = require('../pageobjects/MainPage')

describe('Open the main page and navigate through the elements', () => {
    it('should select the given menu item', async () => {
        await MainPage.open();
        await MainPage.elementsHeader.scrollIntoView();
        await MainPage.selectMenuItem(MainPage.elementsHeader)
    })
})

