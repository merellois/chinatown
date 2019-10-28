const request = require('request');
const cheerio = require('cheerio');


  // file creeren
  // const writeStream = fs.createWriteStream('post.csv');
  //write headers : file creeren
  // writeStream.write('randomordercontent group1 \n')

// second parameter of a function: =>
  // a subroutine is a sequence of program instructions that performs a specific task, packaged as a unit.
  // error, response, html
request('https://www.chinatownology.com/dragon_dance.html', (error, response, html) => {

// make sure there are no errors
//200 is a succesful http response OK: statuscode = comminiceren de server en de browser met elkaar
  if(!error && response.statusCode == 200){
    const $ = cheerio.load(html);
    // cheerio: Fast, flexible, and lean implementation of core jQuery designed specifically for the server

// Terminal: node + path van waar de file staat: krijg je de hele website die je als request hebt aan gegeven
    const mainContent = $('#mainContent');

// html, kriig je de html van de website te zien
    // console.log(mainContent.html());

// text, krijg je alleen de text van de website te zien

    // INSPECTEER ELEMENT!!!!!! van de website die genoteerd staat bij var.url
    //       # id
    //       . class
    //       () wat je wilt ontvangen aan info

// specifieker zoeken op de website
    const output = mainContent
    .find('scr')
    .text()
    // .replace(/\s\s+/g, '');

    console.log(mainContent.text());

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

// app.listen(port);
// console.log('Magic happens on port' + port);
// exports = module.exports = app;

// terminal
// cd pad naar de map
// node app.js
// control c, sluit van vorige code
// pijltje omhoog: node app.js
