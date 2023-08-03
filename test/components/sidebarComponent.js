class sidebarComponent {
    
    menuItem(item) {
        const selectors = {
            elements: '//div[text()="Elements"]',
            forms: '//div[text()="Forms"]'
        };
        return $(selectors[item]);
    }
    async selectMenuItem(item){
        await this.menuItem(item).click();
    }
}

module.exports = new sidebarComponent();