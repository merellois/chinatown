const request = require('request');
const cheerio = require('cheerio');

request('https://www.chinatownology.com', (error, response, html) => {
  if(!error && response.statusCode == 200){
    const $ = cheerio.load(html);

    $('#mainContent').each(i, el) => {
      const title = $(el)
        .find('.randomordercontent group1')
        .text()
        // replace verwijdert de wit ruimte
        // g: global, dan neemt die alles mee
        // '', vervangen met niks
        .replace(/\s\s+/g, '');
        // de laaste regel laten eindigen met ;

        console.log(title);
    }

  }
});

// terminal
// cd pad naar de map
// node app.js
// control c, sluit van vorige code
// pijltje omhoog: node app.js
