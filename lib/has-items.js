define(function () {

    return function (assert, Assertion) {

        assert.hasItems = function(exp, msg) {
            new Assertion(exp, msg).to.not.be.empty;
        };
        assert.items = function(exp, msg) {
        	new Assertion(exp,msg).to.hasItems;
        }
    };
    
});
