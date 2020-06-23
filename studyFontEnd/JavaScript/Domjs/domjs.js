var create = document.getElementById("create");
var hang = 2;
var cot = 2;
var body = document.getElementsByTagName("body")[0];

var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");
var row = document.createElement("tr");
var cell = document.createElement("td");
var cellText = document.createTextNode("colum   ","cell      ");
create.addEventListener("click", function createTable(){
    body;

    tbl;
    tblBody;

    for(var i = 0; i < hang;i++){

       row = document.createElement("tr");
    
        for(var j = 0; j < cot; j++){
            cell = document.createElement("td");
        
            cellText = document.createTextNode("colum   ","cell      ");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
})


var dellCot = document.getElementById("dellRowOrCol");


dellCot.addEventListener("click",function dellTable(){
    var element = document.getElementsByTagName("td");
    
    for (var index = 0; index < hang; index++) {
        element[index].parentNode.removeChild(element[index]);
    }
   
})

var dellAll = document.getElementById("dellAll");
var dellTatCa = document.getElementsByTagName("tbody");

// dellAll.addEventListener("click",function dellTable(){
//     // body = document.getElementsByTagName("body")[0];
//     // tbl = document.createElement("table");
//     // tblBody = document.createElement("tbody");
//     // row = document.createElement("tr");
//     // cell = document.createElement("td");
//     // cellText = document.createTextNode("colum   ","cell      ");

 

//     // for(var i = 0; i< hang; i++){
//     //     row.remove();
//     //     for(var j = 0; j< cot; j++){
//     //         cell.remove();
//     //     }
        
//     // }
//     var element = document.getElementsByTagName("tr");
//     var pro = document.getElementsByTagName("table");
//     for (var i = 0; i < 1; i++) {
//         pro[i].parentNode.removeChild(pro[i]);
//         dellAll.addEventListener("click",dellTable());
        
//     }

//     for (var index = 0; index < hang; index++) {
//         element[index].parentNode.removeChild(element[index]);
//         dellAll.addEventListener("click",dellTable());
        
//     }
//     // tbl.setAttribute("border", "none");
//     // tbl.setAttribute("border", "collapse");




// });

function dellCell(){
    var element = document.getElementsByTagName("td");
    for (var index = 0; index < hang; index++) {
        element[index].parentNode.removeChild(element[index]);
    }
}
function dellRow(){
    var element = document.getElementsByTagName("tr");
    for (var index = 0; index < hang; index++) {
        element[index].parentNode.removeChild(element[index]);
    }
}
function dellTbody(){
    var element = document.getElementsByTagName("tbody");
    for (var index = 0; index < 1; index++) {
        element[index].parentNode.removeChild(element[index]);
    }
}
function dellTable(){
    var element = document.getElementsByTagName("table");
    for (var index = 0; index < 1; index++) {
        element[index].parentNode.removeChild(element[index]);
    }
}
dellAll.addEventListener("click",function dellAllTable(){
    for(var i = 0; i < hang; i++){
        dellRow();
        dellAllTable();
        for(var j = 0; j < cot; j++){
            dellCell();
            dellAllTable();
        }
    }
    dellTbody();
    dellTable();
});