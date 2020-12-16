var ALERT_TITLE = "GRAVADO";
var ALERT_BUTTON_TEXT = "Ok";


/**********
 * METODO PARA VOLTAR ATRÁS - Historico
 */
$(document).ready(function(){
    $("button.goBack").click(function(){
        window.history.back();
    });

    /**********
     * METODO PARA VOLTAR ATRÁS - Historico
     */

    $("button.alertaGravado").click(function(){
        alertaGravado();
    });
});


if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}
function alertaGravado() {
        var nameUser= document.getElementById("nameUser").value;
        var fname  = document.getElementById("fname").innerText;
        var data = document.getElementById("dtNasc").innerText;
        var tlm = document.getElementById("tlm").innerText;
        var email = document.getElementById("email").innerText;
        var passWord = document.getElementById("passWord").innerText;
        localStorage.setItem( "nameUser", nameUser);
        localStorage.setItem( "data", data);
        localStorage.setItem( "name", fname);
        localStorage.setItem( "tlm", tlm);
        localStorage.setItem( "email", email);
        localStorage.setItem( "passWord", passWord);
    alertMessage('gravado com sucesso')
}

function alertMessage(texto) {
    alert(texto);

}





function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    window.location.href='home.html';
}
