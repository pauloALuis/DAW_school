


$(document).ready(function(){
    $("#backHistory").click(function(){
        window.history.back();
    });
});
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
$("#starAnimal").ready(function(){
    readTextFile("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
        , function(text){
        var data = JSON.parse(text);
        document.getElementById("starAnimal").src =  data[9].url;
    });
});

