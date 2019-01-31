describe('Home page', function () {

    beforeEach(function () {
        browser.get('index.html');
    });

    it('should display hello message', function(done) {
        browser.element(by.tagName('h1'))
            .getText()
            .then(function(text) {
                expect(text).toBe('Hello world!');
                done();
            });
    });

    it('should have title', function(done) {
        browser.getTitle().then(function(title) {
            expect(title).toBe('Home page');
            done();
        })
    })
});