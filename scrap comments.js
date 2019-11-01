const request = require('request');
const cheerio = require('cheerio');

request('https://www.instagram.com/p/woI9A-FCrf/', (error, response, html) => {
  if( !error ){
    const $ = cheerio.load(html);
    const comment= $( 'article' );
    const output = '';

    $( 'article' ).filter(function() {
      output += $( this ).find( 'a' ) + ' ';
    } );

    console.log( "output", output );
  }
});
