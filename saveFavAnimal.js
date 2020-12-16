
/*****************
 *  * tirar os dados da API-DOG
 */
$(document).ready(function(){
    $(".backOne").click(function(){
            window.history.back();
    });
});

$(document).ready(function(){
    $.getJSON("_json/favAnimal.json", function(data){
        console.log(data.name); // Prints: Harry
        console.log(data.age); // Prints: 14
    }).fail(function(){
        console.log("Erro ao carregar ficheiro");
    });
})



/*****************
 *  * tirar os dados da API-DOG
 */
$(document).ready(function(){
     $("#goLikeAnimals").click(function(){
         //ler o arquivo JSON
         $.getJSON("_json/favAnimal.json", function(data){
             saveAnimalFav( JSON.parse(data) )
         }).fail(function(){
             console.log("Erro ao carregar ficheiro");
         });

    });
});


function saveAnimalFav(dataFav) {
    alert('FAV ' + dataFav[0].breed_group );

    dataFav[0].num_adopt = parseInt(dataFav[0].num_adopt)  + 1;
    localStorage.setItem( "favAnimal", JSON.stringify(dataFav));
}


