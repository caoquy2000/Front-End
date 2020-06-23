var a = ["hello", "xin chào", "qua qua đi cạp"];
a[0] = "nihao";
a[2] = 123;
document.getElementById("array").innerHTML = a.toString;

var a = [1, 3, 2];
a.sort();
document.getElementById("array").innerHTML = a;

var fruits =["banana","orange","apple","mango"];
document.getElementById("demoJoin").innerHTML = fruits.join("+");
// fruits.push("lemon");
// fruits[fruits.length] = "lemon";
// fruits[fruits.length] = "hello";
var text = "<ul>";
// for(var i = 0; i <= fruits.length - 1 ;i++){
//     text +=  "<li>" + fruits[i] + "</li>";
// }
fruits.forEach(insertItem);//index value
text += "</ul>";
document.getElementById("demoUl").innerHTML = text;

function insertItem(value){
    text +=  "<li>" + value + "</li>";
}


var person = [];
person["fristName"] = "hello";
person["lastname"] = "xin chào";
console.log(person);
// Những điểm khác nhau giữa array và Object
// Array thì dùng index là số numbered indexes
// Object thì sử dụng vị trí theo tên Named indexes
// Array là một object đặc biệt với số thứ tự- WRAPPER CLASS

var point = new Array();
var point = [];
// Hai cách viết đều có chung cách sử dụng 
// nhưng mà cách viết 2 ít tốn dung lượng hơn. 
Array.isArray(fruits);

// document.getElementById("demoJoin").innerHTML = fruits;