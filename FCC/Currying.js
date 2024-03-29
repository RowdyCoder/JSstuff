/* The arityof a function is the number of arguments it requires. Curryinga function means to 
convert a function of N arityinto N functions of arity1.

In other words, it restructures a function so it takes one argument, then returns another function 
that takes the next argument, and so on.

This is useful in your program if you can't supply all the arguments to a function at one time. 
You can save each function call into a variable, which will hold the returned function reference 
that takes the next argument when it's available.
*/

function add(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

add(10)(20)(30);