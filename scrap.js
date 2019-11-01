const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

index = 0;

// const currentUrl = "sample.js"

const url_lijst = ["https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-rat.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-ox.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-tiger.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-rabbit.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-dragon.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-snake.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-horse.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-goat.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-monkey.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-rooster.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-dog.htm",
"https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-pig.htm"]


  url_lijst.forEach(function(currentUrl){

request({
  url: currentUrl
}, function(error, response, html) {

  if(!error){
    const $ = cheerio.load(html);


  // let's create a javascript object to save our data in
   let catched_data= {
    // text: ''
    text: ''

  };


  $('#mainContentRight').filter(function(){

     catched_data.text = $(this).find('h2').text();
          catched_data.text = $(this).find('p').text();
    // catched_data.text = $(this).find('div.table-responsive').text();
    // catched_data.img = $(this).find('').attr('');
    // catched_data.img = $(this).find('img.img-responsive').attr('src');


  });

  fs.writeFile('Url.'+index+'.js', catched_data.text, function(error){
    console.log("file written!");
  });

  index++;

}


});

});
