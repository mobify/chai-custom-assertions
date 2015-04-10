define(function () {

    return function (assert, Assertion) {
        assert.hasItems = function(exp) {
            new Assertion(exp).to.not.be.empty;
        };
    };
    
});
