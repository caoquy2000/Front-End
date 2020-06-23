// //dataType
// // var x, y, z;
// // var z;
// // ở java khi khai báo biến var thì phải gán giá trị
// // không thì nó sẽ không nhận định được dataType
// // trong js thi k cần

// x = "2";
// y = "2";
// z = "2" + "2" - "2";
// // semicolons, 

// // x = 10; z= 10; c = a +b;
// // mutiple statement

// //heap
// // ws
// var msg = "1";//pool ram
// var msg =1.23000;
// var quy

// // printf = println
// console.log("z = "+z);
// console.log("msg = "+ msg);


function printToScreen(){
    for(var i =0; i<= 10;i++){
        document.getElementById("demo") =
        "<h2 >"+i+"</h2>";
    }
    return 1+2;
}


var $ = 2;
var $money = 5;

var _x = 2;
var _100 = 5;
document.getElementById("demo").innerHTML = _x + _100;
//phép gán assignment =
// phép cộng adding +
//phép nhân multiplication(multiplying) +
/*
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
*/

//
function add(a ,b){
    return a+b;
}

document.getElementById("demo").innerHTML = add(3,2);


var car =  "Win";//single bvalue

var car ={
    type:"moto",
    model:"250",
    color:"white",


    //method
    race: function(){
        document.getElementById("demo").innerHTML ="đua nhứ chó rách" +this.model;
    }
};
    car.race();
// document.getElementById("demo").innerHTML = car["type"];
var z = new Number(10);
// number z = 10
//
//

//khi muốn in ra \ " '
//thêm \ phía trước để phế võ công
/*
    \b
    \f
    \n
    \r
    \t
    \v

*/
var x = "John \":V\" Doe";
x.length

var x = new String("John Doe john");
console.log(x.search("hello",5));
console.log(x.slice(-8));

