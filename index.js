//Importar la libreria axios en nodejs
const axios = require("axios");

let apiKey = "0938c3c26316050ca19523ef3f553c7d";
let city = "Bogota, col";

let requestConfig = {
    url: "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ apiKey
};

//Objeto spromesa
let objPromesa = axios(requestConfig);

objPromesa.then(function(response){
    //response.data son los datos que envía la API
    console.log("La temperatura en Bogota es: "+(response.data.main.temp - 273.15).toFixed(2).toString()+" grados celcius");
})
.catch(function(err){
    console.log(err);
})

console.log("hello world");