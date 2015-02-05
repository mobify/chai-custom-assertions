define(function (require) {

    return function (chai, utils) {
        var assert       = chai.assert;
        var Assertion    = chai.Assertion;

        var paths = [
            './lib/elements',
            './lib/properties',
            './lib/has-items'
        ];

        paths.forEach(function addOurAssertions (path) {
            require(path)(assert, Assertion);
        });
    };

    // TODO: implement better 'expect' style
    // expect(foo).to.have.elements.present
    // expect(foo).to.not.have.elements.present
    // expect(foo).to.have.elements.with.length
    // expect(foo).to.have.elements.not.with.length
    // expect(foo).to.have.properties
});
