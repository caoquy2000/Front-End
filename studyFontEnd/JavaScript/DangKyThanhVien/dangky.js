let summit = document.getElementById("summit");


summit.addEventListener("click",function(){
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let country = document.getElementById("Country").value;
    let about = document.getElementById("About").value;
    let gender = document.getElementById("gender").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if(fName.length <= 0){
        alert("Loi");
    }else if(lName.length <= 0){
        alert("loi");
    }else if(email.length <= 0){
        alert("Loi");
    }else if(pwd.length <= 0){
        alert("loi");
    }else{
        alert("Thanh cong roi ban oi");
        // fullname = fname + lName;
        // emailx = email;
        // birthdayx = day + month + year;
        // genderx = gender;
        // countryx = country;
        // aboutx = about;
        document.getElementById("fullname").innerText = fName + " "  + lName; 
        document.getElementById("emailx").innerText = email;
        document.getElementById("birthdayx").innerText = day + " " + month + " " + year;  
        document.getElementById("genderx").innerText = gender;
        document.getElementById("countryx").innerText = country;
        document.getElementById("aboutx").innerText = about;   
        document.getElementById("form-pro").style.display = "block";
    }
})