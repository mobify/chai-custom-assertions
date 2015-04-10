define(function () {

    return function (assert, Assertion) {
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


        Assertion.addMethod('elementsNotPresent', function (msg) {
            var exp = this._obj;
            if (!exp.hasOwnProperty('selector')) throw new Error('exp must be a Zepto object');

            new Assertion(exp, msg).to.have.length(0);
        });
        assert.elementsNotPresent = function (exp, msg) {
            new Assertion(exp).to.have.elementsNotPresent(msg);
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
    };

});
