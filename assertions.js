define(function (require) {

    // TODO: 
    // expect(foo).to.have.elements.present
    // expect(foo).to.not.have.elements.present
    // expect(foo).to.have.elements.with.length
    // expect(foo).to.have.elements.not.with.length
    // expect(foo).to.have.properties

    // TODO: package it for npm


    return function (chai, utils) {
        global.assert       = chai.assert;
        global.Assertion    = chai.Assertion;
        global.expect       = chai.expect;

        // Add assertions
        require('./lib/elements')();
        require('./lib/properties')();
        require('./lib/has-items')();
    };

});
