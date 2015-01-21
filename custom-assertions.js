define(function () {

    // TODO: 
    // expect(foo).to.have.elements.present
    // expect(foo).to.not.have.elements.present
    // expect(foo).to.have.elements.with.length
    // expect(foo).to.have.elements.not.with.length
    // expect(foo).to.have.properties

    // TODO: each assertion in a separate file?


    var chai, utils;

    var addAssertions = function () {

        Assertion.addMethod('elementsPresent', function (num, msg) {
            var exp = this._obj;
            if (!exp.hasOwnProperty('selector')) throw new Error('exp must be a Zepto object');

            if (typeof num === 'string') {
                msg = num;
                num = 0;
            }

            new Assertion(exp, msg).to.have.length.above(num || 0);
        });
        assert.elementsPresent = function (exp, num, msg) {
            new Assertion(exp).to.have.elementsPresent(num, msg);
        };
        assert.elementsNotPresent = function (exp, num, msg) {
            new Assertion(exp).to.not.have.elementsPresent(num, msg);
        };


        Assertion.addMethod('elementsEqual', function (num, msg) {
            var exp = this._obj;
            if (!exp.hasOwnProperty('selector')) throw new Error('exp must be a Zepto object');

            if (typeof num === 'string') {
                msg = num;
                num = 0;
            }

            new Assertion(exp, msg).to.have.length.equal(num || 0);
        });
        assert.elementsEqual = function (exp, num, msg) {
            new Assertion(exp).to.have.elementsEqual(num, msg);
        };
        assert.elementsNotEqual = function (exp, num, msg) {
            new Assertion(exp).to.not.have.elementsEqual(num, msg);
        };


        Assertion.addMethod('properties', function () {
            var properties = arguments;
            var exp = this._obj;

            for (var i = 0; i < properties.length; i++) {
                var msg = 'Expected property ' + properties[i] + ' is not present';
                new Assertion(exp, msg).to.have.property(properties[i]);
            }
        });
        assert.properties = function (exp) {
            var properties = Array.prototype.slice.call(arguments, 1);

            var assertion = new Assertion(exp);
            assertion.to.have.properties.apply(assertion, properties);
        };


        assert.hasItems = function(exp) {
            new Assertion(exp).to.not.be.empty;
        };
    };


    return function (chai, utils) {
        chai    = chai;
        utils   = utils;

        global.assert       = chai.assert;
        global.Assertion    = chai.Assertion;
        global.expect       = chai.expect;

        addAssertions();
    };

});
