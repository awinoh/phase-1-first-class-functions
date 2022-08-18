
function receivesAFunction(spy){
    spy();
    }
    
    var fn = function (){
        return fn;
    }
    
    function returnsANamedFunction(){
        return fn;
    }
    
    function returnsAnAnonymousFunction(){
        return function(){};
    }