function inThongBao(msg){
    alert(msg);
}

function demoOnkeydown(){
    document.getElementById('demo').innerHTML = "Dang tim kiem";
}


document.getElementById("demo1").addEventListener("keypress",changeBackground)
function changeBackground(){
    document.getElementById("demo1").style.backgroundColor = "red";
}

function changeBackground2(){
    document.getElementById("demo1").style.backgroundColor = "yellow";
}