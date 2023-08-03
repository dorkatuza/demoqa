class sideSubmenuComponent {
    
    submenuItem(item) {
        const selectors = {
            textbox: '//span[text()="Text Box"]',
            links: '//span[text()="Links"]',
            practiceform: '//span[text()="Practice Form"]'
        };
        return $(selectors[item]);
    }
    async selectSubmenuItem(item){
        await this.submenuItem(item).click();
    }
}

module.exports = new sideSubmenuComponent();