define(function () {

    return function () {
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

            new Assertion(exp, msg).to.have.length(num || 0);
        });
        assert.elementsEqual = function (exp, num, msg) {
            new Assertion(exp).to.have.elementsEqual(num, msg);
        };


        Assertion.addMethod('elementsNotEqual', function (num, msg) {
            var exp = this._obj;
            if (!exp.hasOwnProperty('selector')) throw new Error('exp must be a Zepto object');

            if (typeof num === 'string') {
                msg = num;
                num = 0;
            }

            new Assertion(exp, msg).to.not.have.length(num || 0);
        });        
        assert.elementsNotEqual = function (exp, num, msg) {
            new Assertion(exp).to.have.elementsNotEqual(num, msg);
        };
    };

});
