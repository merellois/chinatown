const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

index = 0;
  // file creeren
  // const writeStream = fs.createWriteStream('post.csv');
  //write headers : file creeren
  // writeStream.write('randomordercontent group1 \n')
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
// second parameter of a function: =>
  // a subroutine is a sequence of program instructions that performs a specific task, packaged as a unit.
  // error, response, html
  url_lijst.forEach(function(currentUrl){

request({
  url: currentUrl
}, function(error, response, html) {
// make sure there are no errors
//200 is a succesful http response OK: statuscode = comminiceren de server en de browser met elkaar
  if(!error){
    const $ = cheerio.load(html);
    // cheerio: Fast, flexible, and lean implementation of core jQuery designed specifically for the server

// Terminal: node + path van waar de file staat: krijg je de hele website die je als request hebt aan gegeven
    // const table = $('.img-responsive');

// html, kriig je de html van de website te zien
    // console.log(mainContent.html());

// text, krijg je alleen de text van de website te zien

    // INSPECTEER ELEMENT!!!!!! van de website die genoteerd staat bij var.url
    //       # id
    //       . class
    //       () wat je wilt ontvangen aan info

// specifieker zoeken op de website
    // const output = table-responsive
    // .find('')
    // .text()
    // .replace(/\s\s+/g, '');

    // $('.img-responsive + alt').filter(function() {
    //     $(this).find('horoscope in 2019').each(function(i, element) {
    //       // // guten_data[i] = $(this).text();
    //       // // guten_data[i] = "http://www.gutenberg.org/files/" + "'" + $(this).attr('href') + "'";
    //       // var bookNumber = $(this).attr('href');
    //       // // var bookNumber2 = str.substring(0);
    //       // guten_data_urls[i] = "http://www.gutenberg.org/files/" + bookNumber + "/" + bookNumber + "-h/" + bookNumber + "-h.htm";
    //     });
    //   });

  // let's create a javascript object to save our data in
   let catched_data= {
    text: '',
    img: ''
  };

  // all the content we are looking for are inside a div with the id 'content', let's filter so that the data we are working with is without unnecessary data
  $('#mainContentRight').filter(function(){

    // we can access the properties of our javascript object by writing the name of the object 'dot' and then the name of the property
    catched_data.text = $(this).find('div.table-responsive').text();
    catched_data.img = $(this).find('img.img-responsive').attr('src');
    // alt, de overeenkomende titel
    // url.paragraph = $(this).find('p').first().text();

  });


    // console.log(MainhotelContent.text());
    // const data = table-responsive.text();

    fs.writeFile('china_output-'+index+'.js', catched_data.img, function(error){
      console.log("file written!");
    });
    index++;
  // find = childern
  // next = parents

    // const output = sidebar1
    //   .find('p')
    // // next= wat er na h1 in de div staat
    //   .text();
    //

    // $('#sidebar1 a').each(i, el) => {
// each(i, el) herkent de terminal niet
    // i: index el:de naam
    // const: variable
    // krijg je de info na de links te zien
      // const item = $(el).text();

    // href krijg je alle links te zien
        // const link = $(el).attr('href');

    // console zorgt er voor dat het de data laat zien
      // console.log(item);
      // console.log(link);

      //file creeren
     //   writeStream.write('${randomordercontent group1}, \n');
    // console.log('scraping done...')


  }

});

});

// app.listen(port);
// console.log('Magic happens on port' + port);
// exports = module.exports = app;

// terminal
// cd pad naar de map
// node app.js
// control c, sluit van vorige code
// pijltje omhoog: node app.js
