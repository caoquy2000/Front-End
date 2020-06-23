var x = 123e5;
var y = 123e-5;
console.log(x);
console.log(y);

var x = 999999999999999;
var y = 99999999999999999;
console.log(x);
console.log(y);


var x = 0.2 + 0.1;
var y = (0.2*10 + 0.1*10)/10;
console.log(x);
console.log(y);

// số + số = số
// chuỗi + chuỗi = chuỗi => dù chuỗi là số cũng là chuỗi
// số + chuỗi = chuỗi.
// số + số + chuỗi = chuỗi
// chuỗi/chuỗi = số
// chuỗi * chuỗi = số
// chuỗi - chuỗi = số
var a = "100";
var b = "10"; 
console.log(a/b);
// Kiểu dữ liệu NaN (not a number);
var x = NaN;
var z = 100/x;
console.log(z);
// if(isNaN(z))alert("yw");

var x = NaN;
var z = "100"+x;
console.log(z);
// NaN cũng là Number
// var x = typeof NaN ;
// consolo.log(x);


// Infinity
// infinity sẽ trả ra kết quả mà vượt khỏi định mức của con số đó
// var number = 2;
// while(number !=Infinity){
//     number = number + number;
//     console.log(number);
// }
var a = -2;
console.log(a/0);
// Infinity cũng là Number
var number = 36;
console.log(number.toString(10));
console.log(number.toString(32));
console.log(number.toString(16));
console.log(number.toString(8));
console.log(number.toString(2));
var x = 123;
var y = new Number(123); //type of return object


y.toExponential(2);

console.log(y.toExponential(2));
// hàm này trả ra chuỗi, không trả ra số

var x = 123.653
x.toFixed(0);
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(6));
x.toPrecision(4);
console.log(x.toPrecision(4));
console.log(x.valueOf());

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("    10"));
console.log(Number("10     "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("john"));

console.log(Number(new Date("2020-06-2")));


console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 year"));
console.log(parseFloat("year 10"));

var x = Number.MAX_VALUE;





