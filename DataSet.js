
$(document).ready(function(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart)

    var dataFonte  = {};
    readFileFav("_json/favAnimal.json", function (response) {
            dataFonte = JSON.parse(response);
        });

    function drawChart() {

        const container = document.querySelector('#chart')
        const data = new google.visualization.arrayToDataTable([
            [ 'Dog', 'Ki' ],

            [dataFonte[0].breed_group, dataFonte[0].num_adopt ],
            [dataFonte[1].breed_group, dataFonte[1].num_adopt ],
            [dataFonte[2].breed_group, dataFonte[2].num_adopt ],
            [dataFonte[3].breed_group, dataFonte[3].num_adopt ],
            [dataFonte[4].breed_group, dataFonte[4].num_adopt ],
            [dataFonte[5].breed_group, dataFonte[5].num_adopt ],
            [dataFonte[6].breed_group, dataFonte[6].num_adopt ],
            [dataFonte[7].breed_group, dataFonte[7].num_adopt ],
            [dataFonte[8].breed_group, dataFonte[8].num_adopt ],
        ])
        const options = {
           // title: 'RAÇA CANINA MAIS ADOTADAS',
            height: 500,
            width: 620,
            position: 'center'
        }

        const chart = new google.visualization.PieChart(container)
        chart.draw(data, options)
    }

});






/*****
 * *  aceder ao ficheiro JSON
 * @param file
 * @param callback
 */
function readFileFav(file, callback) {
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