const safe = require('../safe.js')
const fetch = require('node-fetch')

const client = safe.createCoinbaseClient();

const getCoin = async (coin) => {
    const pair = coin + '-USD'
    var amt = 0;
    /*
    fetch('https://api.coinbase.com/v2/prices/' + pair + '/buy')
        .then(response => response.json())
        .then(price => {
            let amt = price.data.amount
            console.log(amt)
            return amt
        })
    */

    amt = await getPrice(pair)

    return amt
}

const getPrice = async (pair) => {
    var amt = 0;
    try {
        const res = await fetch('https://api.coinbase.com/v2/prices/' + pair +'/buy')

        if(!res.ok) {
            throw new Error(res.status)
        }

        /*
        const price = await res.json()
        amt = price.data.amount
        */
    } catch (err) {
        console.log(err)
    }
    return amt
}

exports.getCoin = getCoin;