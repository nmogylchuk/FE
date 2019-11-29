console.log("Start simple loop of Fibanachi numbers from 0 to 10");
for(i=0; i<11; i++) {
    x=fib(i);
    console.log("The Fibanachi number of " + i + " is " + x);
  }
  console.log("End simple loop of Fibanachi numbers from 0 to 10");
  
  function fib(n) {
    if (n==0 || n==1) {
        return n;
    }
    if (n==2) {
      return 1;
    }
    return fib(n-1) + fib(n-2)
  }



  // Generator of Fibanachi
  function* fibGenerator() {
    var i = 0;
    while(true) {
        yield fib(i++)
    }
}

console.log("Start Generator of Fibanachi numbers from 0 to 5");
var fibGen = fibGenerator();

var n0 = fibGen.next().value;
console.log("The Fibanachi number of Generator n0 is " + n0);

var n1 = fibGen.next().value;
console.log("The Fibanachi number of Generator n1 is " + n1);

var n2 = fibGen.next().value;
console.log("The Fibanachi number of Generator n2 is " + n2);

var n3 = fibGen.next().value;
console.log("The Fibanachi number of Generator n3 is " + n3);

var n4 = fibGen.next().value;
console.log("The Fibanachi number of Generator n4 is " + n4);

var n5 = fibGen.next().value;
console.log("The Fibanachi number of Generator n5 is " + n5);
console.log("End Generator of Fibanachi numbers from 0 to 5");