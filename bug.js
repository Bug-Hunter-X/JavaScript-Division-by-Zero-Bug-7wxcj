function foo(a,b){    if (a === 0 || b === 0) {        return 0;    }    return a / b;}foo(0, 0); // throws exception because of division by zero.foo(1, 0); // throws exception because of division by zero.foo(0, 1); // returns 0 because of the condition check.