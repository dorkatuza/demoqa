class ElementsPage {

    get mainHeader(){
        return $('div[class="main-header"]');
    }

    textboxForm(item) {
        const selectors = {
            name: '#userName',
            email: '#userEmail',
            current: '#currentAddress',
            permanent: '#permanentAddress'
        };
        return $(selectors[item]);
    }
    get textboxOutput(){
        return $('#output');
    }
    get submitButton(){
        return $('#submit');
    }
}

module.exports = new ElementsPage();