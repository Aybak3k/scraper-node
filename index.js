// https://www.analyticsvidhya.com/blog/2020/10/web-scraping-using-node-js/

const request = require("request")
const cheerio = require("cheerio")
// const targetSite = "https://keep.google.com"
// const targetNode = ".PvRhvb-ibnC6b-V67aGc"
const targetSite = "https://www.analyticsvidhya.com/blog/2020/10/web-scraping-using-node-js/"
const targetNode = "h4"

request(targetSite, (error, response, html) => {
    if(!error && response.statusCode==200) {
        const $= cheerio.load(html);
        // const output= datarow.find("th").text();

        $(targetNode).each((i, data) => {
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