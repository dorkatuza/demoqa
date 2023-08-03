const BasePage = require('./BasePage');

class MainPage extends BasePage {
    
    get elementsHeader() {
        return $('//h5[text()="Elements"]');
    }
    async selectMenuItem(item){
        await item.click();
    }
    
    open () {
        return super.open('');
    }
}

module.exports = new MainPage();
