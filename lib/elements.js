define(function () {

    return function (assert, Assertion) {
        Assertion.addChainableMethod('elements', function (msg) {
            var exp = this._obj;
            if (!exp.hasOwnProperty('selector')) throw new Error('exp must be a Zepto object');

            if (typeof num === 'string') {
                msg = num;
                num = 0;
            }

            new Assertion(exp, msg).to.have.length.above(num || 0);
        });


        Assertion.addMethod('present', function (num, msg) {
            var exp = this._obj;
            if (!exp.hasOwnProperty('selector')) throw new Error('exp must be a Zepto object');

            if (typeof num === 'string') {
                msg = num;
                num = 0;
            }

            new Assertion(exp, msg).to.have.length.above(num || 0);
        });
        Assertion.addMethod('elementsPresent', function (num, msg) {
            var exp = this._obj;
            if (!exp.hasOwnProperty('selector')) throw new Error('exp must be a Zepto object');
            new Assertion(exp).to.have.present(num, msg);
        });
        assert.elementsPresent = function (exp, num, msg) {
            new Assertion(exp).to.have.present(num, msg);
        };
        assert.present = function (exp, num, msg) {
            new Assertion(exp).to.have.present(num, msg);
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

            new Assertion(exp, msg).to.have.length(num || 0);
        });
        Assertion.addMethod('elementsCount', function (num, msg) {
            new Assertion(exp).to.have.elementsEqual(num, msg);
        });
        assert.elementsEqual = function (exp, num, msg) {
            new Assertion(exp).to.have.elementsEqual(num, msg);
        };
        assert.elementsCount = function (exp, num, msg) {
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
