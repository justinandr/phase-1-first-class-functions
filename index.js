function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return foo = x => x * x;
}

function returnsAnAnonymousFunction(){
    return () => 1 + 1;
}