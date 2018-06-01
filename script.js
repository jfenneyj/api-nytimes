$(document).ready(function(){


  var newsArticle = $(this).attr("data-articles");
  var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  queryUrl += "?" + $.param({
    "api-key" : "dbe37e52fa5c45da9b7d61bb51632d83",
    "name" : "bill Gates",
    "q" : ""
  });
  

$.ajax({
  url: queryUrl,
  method: "GET",
}).then(function(response){
  console.log(response);

  var results = response.data;


});

























});