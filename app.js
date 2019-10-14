var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
// localhost:8000
var port = 8000;
var app = express();

// achter localhost/
app.get('/chinatownology', function (req,res){

// scrappen van andere url/pagina
  var main_url = "https://www.chinatownology.com/food_culture.html";
  var recept_urls = [];
  var letterlijk_alles = [];

  request(main_url, function(error, response, html){

    // var paginaTitle;
    // // var paginaTable;
    //
    // // var alleContent;
    //
    if(!error){

      var $ = cheerio.load(html);

      $("td").first().filter(function(){
        $(this).find(".randomordercontent").each(function(){
          recept_urls.push("https://www.chinatownology.com/" + $(this).find('a').attr("href"));
        });
      });

      if(recept_urls.length > 0) {
        recept_urls.splice(0);
        console.log(recept_urls);

        recept_urls.forEach(function(url){
          request({
            url: url,
            json: true
          }, function(err, res, body){
            console.log(body);
            // letterlijk_alles.push(body);
          });
        });



        // for(url in recept_urls) {
        //
        //   request(url, function(err, res, body){
        //     console.log(recept_urls);
        //     letterlijk_alles.push(body);
        //   });
        //
        // }

      }






// INSPECTEER ELEMENT!!!!!! van de website die genoteerd staat bij var.url
      // # id
      // . class
      // () wat je wilt ontvangen aan info

  // $ ('#container').filter(function(){
  //    paginaTitle = $(this).find('#mainContent').text();

  // keywords.forEach(function(elem, index){
  //   var imageElement - "<img scr=" + keywords[index] + "'>'"
  // }

      // $ ('#container').filter(function(){    // CHINATOWNOLOGY
      //   paginaTitle = $(this).find('tbody').text();

        // nivileert de info,  meer specifiek
        // paginaTable = $(this).find('table').text();

        // de info wat je terug gestuurd krijgt van cheeroi

        // als je meerdere info wilt nivileren
        // alleContent = paginaTitle, paginaTable;

      // });

      if(letterlijk_alles.length > 0) {
        res.send(letterlijk_alles);
      }
    }

  });
});
// terminal
// cd pad naar de map
// node app.js
// control c, sluit van vorige code
// pijltje omhoog: node app.js
app.listen(port);
console.log('Magic happens on port' + port);
exports = module.exports = app;
