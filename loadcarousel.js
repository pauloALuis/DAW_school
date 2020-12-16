





$(document).ready(function(){

    /*****carrega os dados da home********/
    $("#loadHome").ready(function(){
        timer();
        startLogin();
    });


    /*******back home********/
    $("body.goBack").click(function(){
        window.history.back();
    });


});






/******************************************************
 * definição da data na web page
 * **********************************************************/
function timer()
{
    var d = new Date();
    document.getElementById('dataLocal').innerHTML =  d.toLocaleDateString() + " - "  + d.toLocaleTimeString();
    setTimeout('timer()', 1000);


}
function startLogin()
{
    document.getElementById("loginName").innerText += " "+ localStorage.getItem("nameUser");//logs[i].name;
}

/*****************************************************u************************************************************
************************************************ **********************************************************/


/*****
 * *  aceder ao ficheiro JSON
 * @param file
 * @param callback
 */
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

/*****************
 *  * tirar os dados da API-DOG
 */
readTextFile("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
    , function(text){
    var data = JSON.parse(text);

    carouselDescription("One" ,data[0].breeds[0].name, data[0].breeds[0].life_span,
        data[0].breeds[0].temperament , data[0].breeds[0].bred_for, data[0].url);

    carouselDescription("Two" ,data[1].breeds[0].name, data[1].breeds[0].life_span,
        data[1].breeds[0].temperament , data[1].breeds[0].bred_for, data[1].url);

    carouselDescription("Three" ,data[2].breeds[0].name, data[2].breeds[0].life_span,
        data[2].breeds[0].temperament , data[2].breeds[0].bred_for, data[2].url);

    carouselDescription("Four" ,data[3].breeds[0].name, data[3].breeds[0].life_span,
        data[3].breeds[0].temperament , data[3].breeds[0].bred_for, data[3].url);

});


/*****
 * escrever nos elementos html correspondentes
 *
 * @param num
 * @param nameAnimal
 * @param lifeEpanAnimal - vida util do animal
 * @param temperamentAnimal - comportamento tipico do animal
 * @param berdFor - nascido para
 * @param url - da imagem do animal
 */
function carouselDescription(num, nameAnimal, lifeEpanAnimal, temperamentAnimal, berdFor, url)
{
    document.getElementById("hSlide" + num ).innerHTML = nameAnimal + " - " + lifeEpanAnimal;
    document.getElementById("pSlide" + num).innerHTML = temperamentAnimal   + " - " + berdFor;
    document.getElementById("srcSlide" + num ).src =  url;
}
