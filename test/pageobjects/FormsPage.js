class FormsPage {

    get subHeader(){
        return $('//h5[text()="Student Registration Form"]');
    }

    registrationForm(item) {
        const selectors = {
            //TODO
        };
        return $(selectors[item]);
    }
    get submitButton(){
        return $('#submit');
    }
}

module.exports = new FormsPage();