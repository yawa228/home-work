// ----------------Задача 1.-----------------

var x;
var y;
var z;

x = prompt("Введите первое число", "");
y = prompt("Введите второе число", "");
z = prompt("Введите третье число", "");

if (x < y && z) {
    alert(x);
}
else if(z < x && y) {
    alert(z);
}
else if(y < x && z) {
    alert(y);
}

// -----------------Задача 2.-----------------

// var x;
// var y;
// var z;

// x = prompt("Введите первое число", "");
// y = prompt("Введите второе число", "");
// z = prompt("Введите третье число", "");

// if (x == y && x == z && y == z) {
//     alert(3);
// }
// else if (x == y | x == z | y == z) {
//     alert(2);
// }
// else if (x !== y && x !== z && y !== z) {
//     alert(0);
// }

// ---------------------Задача 3.-----------------------

// var n;
// var m;
// var k;

// n = prompt("Введите число n", "");
// m = prompt("Введите число m", "");
// k = prompt("Введите число k", "");

// if (k < n*m && k % n == 0 || k % m == 0) {
//     alert('YES');
// }
// else {
//     alert('NO');
// }
