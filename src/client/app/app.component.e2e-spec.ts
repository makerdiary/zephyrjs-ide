describe('App', () => {
    beforeEach( () => {
        browser.get('/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('JS IDE for Zephyr OS');
    });

    it('should have <nav>', () => {
        expect(element(by.css('sd-navbar nav')).isPresent()).toEqual(true);
    });

    it('routing should preserve editor tabs', () => {
        let tabs;

        // Initial check
        browser.ignoreSynchronization = true;
        browser.get('/#/editor');
        tabs = element.all(by.css('sd-editor .left-component a.nav-link'));
        expect(tabs.count()).toEqual(1);

        // Add a tab
        element(by.id('new-tab-button')).click().then(() => {
            tabs = element.all(by.css('sd-editor .left-component a.nav-link'));
            expect(tabs.count()).toEqual(2);

            // Route to About
            element(by.css('sd-navbar .navbar-right li:nth-child(1) a'))
            .click().then(() => {
                // Route back to Editor
                element(by.css('sd-navbar .navbar-right li:nth-child(2) a'))
                .click().then(() => {
                    tabs = element.all(by.css('sd-editor .left-component a.nav-link'));
                    expect(tabs.count()).toEqual(2);
                });
            });
        });

    });
});
