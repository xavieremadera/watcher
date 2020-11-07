const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.bestbuy.com/site/misc/deal-of-the-day/pcmcat248000050016.c?id=pcmcat248000050016';

/**
 * Calls upon getData() to get html, then
 * parses html with cheerio to get
 * product names and prices.
 */
const getDOTD = async () => {
    const $ = await getData();

    console.log('from getDOTD')

    const deals = []

    $('h3.product-title').each((i, elem) => {
        deals.push({
            title: $(elem).text(),
            pricing: {},
        })
    })

    /*
    $('div.pricing-price').each((i, elem) => {
        deals[i].pricing = {
            currPrice: $(elem).find('div.priceView-hero-price').text(),
            regularPrice: $(elem).find('div.pricing-price__savings-regular-price').text(),
        }
    })
    */

    return deals
}


/**
 * Awaits html from axios and returns it.
 */
const getData = async () => {
    const { data } = await axios.get(url);
    return cheerio.load(data);
}

exports.getDOTD = getDOTD;