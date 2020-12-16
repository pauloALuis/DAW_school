
/*******
 * gera um numero inteiro entre 0 e 9 inclusive
 */

$(document).ready(function(){
        $("#newAnimal").click(function(){
        var index = Math.floor(Math.random() * 10)
        randoAnimal(index)

    });
});
/***************
 * gera um animal aleatorio
 * @param index
 */
function randoAnimal(index)
{
    $.getJSON("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10", function(data){
        loadInElementByID(data[index].breeds[0].name, data[index].breeds[0].life_span,
            data[0].breeds[0].temperament , data[0].breeds[0].bred_for, data[index].url,
            data[index].breeds[0].breed_group, data[index].width, data[index].height);
        }).fail(function(){
        console.log("Erro ao carregar ficheiro");
    });
}




$(document).ready(function(){
    $(".sendEMailAdotar").click(function(){
        sendEMailAdotar();
    });
});
function sendEMailAdotar()
{
        var link = "mailto:me@example.com"
            + "?cc=myCCaddress@example.com"
            + "&subject=" + escape("Pedido de adoção " )
            + "&body= pedido de adoção do animal com nome de: " +
            escape(document.getElementById('nameAnimal').value)
        ;

        window.location.href = link;
        alert("SERÁ ENVIADO UM EMAIL PARA PROCESSO DE ADOÇÃO")

}


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
function loadInElementByID( nameAnimal, lifeEpanAnimal, temperamentAnimal, berdFor, url, breed_group, widthA, heightA )
{
    document.getElementById("picProfAnimal" ).src =  url;
    document.getElementById("nameAnimal"  ).innerHTML = nameAnimal ;

    document.getElementById("divDataNascimento").innerHTML = lifeEpanAnimal;

    document.getElementById("divRaca"  ).innerHTML = breed_group;

    document.getElementById("divGenero"  ).innerHTML = "NÃO DEFINIDO";
    document.getElementById("subject" ).innerHTML = "TEMPERAMENT: " + temperamentAnimal   +
        "\n BER FOR: " + berdFor + "\n\n\n ORIGIN:" + origin  + "\n\n\n\n Width:" + widthA +"&nbsp;&nbsp; \n\n\n\ " + heightA ;
}


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