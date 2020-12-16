function openForm() {
    document.getElementById("myLogin").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function loginForm() {
    document.getElementById("myLogin").onclick=window.location.href='register.html';
}
function myResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$(document).ready(function(){
    /*******back home********/
    $("#validateLogin").click(function(){
        validateLogin();

    });

    /*******myResponsive********/
    $("#myResponsive").click(function(){
        myResponsive();

    });
});


function validateLogin() {
    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword1").value;

    readJsonFile("_JSON/logs.json", function (response) {
        var logs = JSON.parse(response);
        var size = logs.length;
        for (i = 0; i < logs.length; i++) {
            if (username == logs[i].username) {
                if (password == logs[i].password) {
                    sessionStorage.setItem("id_prof", logs[i].id);
                    window.location = 'home.html';
                    document.getElementById("loginName").innerText = logs[i].username;

                    break;
                } else {
                    alert("Senha incorreta!");
                }
            }
            size--;
        }

        if (size == 0) {
            alert("Introduza um nome de utilizador válido!");
        }

    })
}


function readJsonFile(jsonFile, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', jsonFile, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}