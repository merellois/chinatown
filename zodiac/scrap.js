const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

// Dit is de array waarin we voor elk horoscoop artikel alle data in opslaan
let catched_data= [];

// De lijst van URL's die de code afloopt
const url_lijst = [
    "https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-rat.htm",
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
    "https://www.chinahighlights.com/travelguide/chinese-zodiac/monthly-fortune-for-pig.htm"
];

// Begin van de code die voor elke url word uitgevoerd
url_lijst.forEach(function(currentUrl){
    request({
        url: currentUrl
    }, function(error, response, html) {

        // De code binnen deze if-statement alleen uitvoeren wanneer er geen error is
        if(!error){
            // We laden alle HTML elementen in via cheerio zodat we die kunnen filteren, selecteren etc.
            const $ = cheerio.load(html);

            // Alle content bevind zich binnen de #mainContentRight div
            $('#mainContentRight').filter(function(){

                // Het JavaScript object waarin we alle data opslaan en die we toevoegen aan de catched_data array
                let temp_obj = {
                    zodiac: "",
                    h2_title: "",
                    text: []
                };

                // We gebruiken de URL om het zodiac teken te distileren
                // dat betekend dat we t/m 'monthly-fortune-for-' en het stukje '.htm' moeten weg halen
                // dan houden we de zodiac over zoals 'dragon' of 'pig'
                temp_obj.zodiac = currentUrl.substring(currentUrl.search("monthly-fortune-for-"));
                temp_obj.zodiac = temp_obj.zodiac.slice(0, temp_obj.zodiac.search(".htm"));
                temp_obj.zodiac = temp_obj.zodiac.split("monthly-fortune-for-")[1];

                // Elke titel van elke pagina zit in een H2 maar doordat er meerdere H2 elementen
                // in de pagina zitten moeten we steeds de 5e H2 element hebben (dit weet ik dmv uitproberen)
                temp_obj.h2_title = $(this).find('h2').eq(5).text();

                // Opslaan hoeveel paragraaf elementen er zijn om te scrapen (P elementen)
                let totalParagraphs = $(this).find('p').length;

                // Vind alle P elementen en voer een functie uit voor elk P element
                $(this).find('p').each(function(){
                    // Voeg de ccontent van elk P element toe aan het JavaScript object
                    temp_obj.text.push($(this).text());
                });

                // Als alle paragraven zijn gescraped hebben we alle data van die specifieke pagina
                // en kunnen we het gehehel javaScript object toevoegen aan de catched_data array
                if(temp_obj.text.length >= totalParagraphs) {
                    catched_data.push(temp_obj);
                    console.log(catched_data.length);

                    // Als alle URL's zijn gescraped kunnen we het bestand op onze hardeschijf schrijven met die data
                    if(catched_data.length === url_lijst.length) {
                        fs.writeFile('zodiac-output.js', 'var zodiac_data =' + JSON.stringify(catched_data, null, 2) + ';', function(error){
                            console.log("file written!");
                        });
                    }
                }
            });
        }
    });
});