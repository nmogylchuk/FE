var fibGen = fibGenerator();

function myFunction() {
    var n = fibGen.next().value;

    var s = document.getElementById("id1");
    s.value = n;
}

function* fibGenerator() {
    var i = 0;
    while (true) {
        yield fib(i++)
    }
}

function fib(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    if (n == 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2)
}
