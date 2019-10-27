var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
// localhost:8000
var port = 8000;
var app = express();

// achter localhost
app.get('/chinatownology', function (req,res){

// scrappen van andere url/pagina
  var main_url = "https://www.chinatownology.com/food_culture.html";
  // var recept_urls = [];
  // var letterlijk_alles = [];

  request(main_url, function(error, response, html){

    // var paginaTitle;
    // var paginaTable;

    // var alleContent;

    if(!error){

      var $ = cheerio.load(html);

      $("td").first().filter(function(){
        $(this).find(".randomordercontent").each(function(){
          main_url.push("https://www.chinatownology.com/" + $(this).find('img').attr("src"));
        });
      });
      //
      // if(recept_urls.length > 0) {
      //   recept_urls.splice(0);
      //   console.log(recept_urls);
      //
      //   recept_urls.forEach(function(url){
      //     request({
      //       url: url,
      //       json: true
      //     }, function(err, res, body){
      //       console.log(body);
      //       // letterlijk_alles.push(body);
      //     });
      //   });


        for(url in recept_urls) {

          request(url, function(err, res, body){
            console.log(recept_urls);
            letterlijk_alles.push(body);
          });

        }

      }


// INSPECTEER ELEMENT!!!!!! van de website die genoteerd staat bij var.url
//       # id
//       . class
//       () wat je wilt ontvangen aan info

  // $ ('#container').filter(function(){
  //    paginaTitle = $(this).find('#mainContent').text();

  // keywords.forEach(function(elem, index){
  //   var imageElement - "<img scr=" + keywords[index] + "'>'"
  // }
  //
  //     $ ('#container').filter(function(){    // CHINATOWNOLOGY
  //       paginaTitle = $(this).find('tbody').text();
  //
  //       nivileert de info,  meer specifiek
  //       paginaTable = $(this).find('table').text();
  //
  //       de info wat je terug gestuurd krijgt van cheeroi
  //
  //       als je meerdere info wilt nivileren
  //       alleContent = paginaTitle, paginaTable;
  //
  //     });

      if(letterlijk_alles.length > 0) {
        res.send(main_url);
      }
    }

  });
});
// terminal
// cd pad naar de map
// node app.js
// control c, sluit van vorige code
// pijltje omhoog: node app.js

// app.listen(port);
// console.log('Magic happens on port' + port);
// exports = module.exports = app;
//
// app.get('/chinatownology', function (req,res){
//
//   var url = "https://www.chinatownology.com/food_culture.html";
//
//   request(url, function(error, response, html){
//
//     if(!error){
//
//       var imdb_data = [];
//
//       var $ = cheerio.load(html);
//
//       $ ('.lister').filter(function(){
//         $(this).find('tr').each(function(i, element){   // tr wordt aangegeven op de imdb site als de code opzoekt achter de site
//
//           imdb_data[i] = "'" + $(this).find('img').attr('src') + "'";
//
//         });
//       });
//
//       res.send(imdb_data);
//       fs.writeFile('imdb_output.js',"var imdb_output =[" + imdb_data +"]", function(error){  //imdb_output.js als je er imdb_output2.js van maakt, word er een nieuw document opgeslagen
//         console.log('file is written successfully')
//       })
