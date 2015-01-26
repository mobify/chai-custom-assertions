define(function () {

    return function () {
        assert.hasItems = function(exp) {
            new Assertion(exp).to.not.be.empty;
        };
    };
    
});
