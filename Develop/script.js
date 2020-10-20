
var city = 'Raleigh';

$.ajax({
    url:'api.openweathermap.org/data/2.5/weather?q'+ city + 'APPID=04943c3eae8c13386d8b00a95ebf6ca7',
    metod:"GET"
}).then(function(response){
console.log(response);
})