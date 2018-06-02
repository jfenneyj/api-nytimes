$(document).ready(function(){

//Setup Variables
//========================

var queryTerm  = "";
var numResults = 0;
var startYear  = 0;
var endYear    = 0;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
  'api-key': "dbe37e52fa5c45da9b7d61bb51632d83",
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});





//Function
//========================
//Main Processes
//========================

//1. Retrieve user inputs & convert to variables
//2. Use those variales to run an AJAX call to the Ny Times
//3. Break down the NYT object into useable fields
//4. Dynamically generate html content

//5. dealing with "edge cases" -- bugs or situation that are not intuitive.
















});