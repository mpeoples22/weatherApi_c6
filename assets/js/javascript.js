var citySearch = document.querySelector("#city-search)");
var searchButtonEl = doecument.querySelector("#input");
var repContainerEl = document.querySelector("#repo-contnr");


var lwurl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=bc1f28870055bc60faa0ca0be126043c"
var submitHandle = function(event){
    event.preventDefault();
}
var city = InputEl.value.trim();

//var buttonClickHandler = function(event){}

var getRepo = function(city) {
    fetch(lwurl).
     then(function(response) {
         if(response.ok){
           console.log(response);
           response.json().then(function(data){
            console.log(data);
            displayRepos(data,city);
           });
         }
     });
} 
getRepo("san antonio, TX");

//var callRepo = document.querySelector("#call-rep");
//var infoCont = document.querySelector("#infor-cont");