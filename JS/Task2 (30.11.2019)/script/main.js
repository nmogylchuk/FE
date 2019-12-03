    // '1u 2d 0u 3d'
    // u = 0 -> 9
    // d = 9 -> 0

    // 0 - 31

    // 24: 11000
    // 22: 10110
    // 23: 10111


function myFunction() {

  var arr = [];

  for (let i = 0; i < 32; i++) {

    var number = i.toString(2);
    number = "00000".substr(number.length) + number;

    arr.push(number);

    console.log("bit numner of " + i + " is " + number);

    var s = document.getElementById("id1");
    s.value = s.value + "\n" + number;

  }

  var s = document.getElementById("id1");
  s.value = s.value + "\n ----END---";
  s.value = s.value + " ---- " + arr.sort(function (a, b) {

    var elementA0 = a.slice(0, 1);
    var elementA1 = a.slice(1, 2);
    var elementA2 = a.slice(2, 3);
    var elementA3 = a.slice(3, 4);

    var elementB0 = b.slice(0, 1);
    var elementB1 = b.slice(1, 2);
    var elementB2 = b.slice(2, 3);
    var elementB3 = b.slice(3, 4);

    if (elementA1 <= elementB1) {
      if (elementA2 >= elementB2) {
        if (elementA0 <= elementB0) {
          if (elementA3 >= elementB3) {
            return 1;
          }
          if (elementA3 < elementB3) {
            return -1;
          }
        }
        if (elementA0 > elementB0) {
          return -1;
        }
      }
      if (elementA2 < elementB2) {
        return -1;
      }
    }
    if (elementA1 > elementB1) {
      return -1
    }
    return 0;
  });
}
