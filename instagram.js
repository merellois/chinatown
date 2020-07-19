var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var url = require('url');

var port = 9999;
var app = express();

var DOWNLOAD_DIR = './';


// INSTAGRAM SCRAPER: access by going to 'localhost:2100/instagram'
app.get('/instagram', function(req, res){

  // try any hashtags and see the results, make sure to write INSIDE the quotation marks
  var hashtag = 'me';
  var url = 'https://instagram.com/explore/tags/'+ hashtag +'/?__a=1';

  // let's make the http request to the url above using the 'request' dependency
  request(url, function(error, response, html) {

    // only execute if there's no error
    if(!error) {

      // we can use the dependency 'cheerio' to traverse the DOM and use jQuery-like selectors and functions
      var $ = cheerio.load(html);

      // the url actually gives back already a ready to use JSON object so we just want that raw text
      var instagram_data = JSON.parse($.text());
      var instagram_urls = [];

      for(var i = 0; i < instagram_data.graphql.hashtag.edge_hashtag_to_media.edges.length; i++) {
        instagram_urls[i] = instagram_data.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url;

        download_file_curl(instagram_data.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url);

        // fs.createWriteStream('./data/'+[i]+'.jpg', instagram_data.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url, function(err){
          console.log('File is written successfully!');
        // });
      }

      // send the data we've stored in our array back to the browser
      res.send(instagram_urls);

      // save the data we've stored in our object on our machine

    }
  });
});
