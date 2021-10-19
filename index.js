// https://www.analyticsvidhya.com/blog/2020/10/web-scraping-using-node-js/

const request = require("request")
const cheerio = require("cheerio")
const gKeep = "https://keep.google.com"
const gKeepNode = ".PvRhvb-ibnC6b-V67aGc"

const   freecoursesite = "https://www.freecoursesite.com",
        fcc = 'https://www.freecodecamp.org/'
;
const siteXNode = "h1"

request(fcc, (error, response, html) => {
    if(!error && response.statusCode==200) {
        const $= cheerio.load(html);
        // const output= datarow.find("th").text();

        $(siteXNode).each((i, data) => {
            const item= $(data).text();

            console.log(item);
        })
    } else {
        console.log(`
        error    : ${error}
        response : ${response}
        html     : ${html}
        `)
    }

});