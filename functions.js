var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var functions = express();


(function searchStores() {
  functions.stockArray = [];
  /************************** AMAZON REQUEST ***********************/
  request('https://www.amazon.co.uk/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=nes+classic+mini&rh=i%3Aaps%2Ck%3Anes+classic+mini', function(error, response, body) {

      if (!error) {
          var $ = cheerio.load(body);

          var price, stock, origin, link;
          var amazon = {origin: 0, price: 0, stock, link};
          $('#result_0').filter(function() {
            var data = $(this);
            amazon.origin = 'Amazon';
            amazon.price = data.find($('.a-size-base.a-color-price.a-text-bold')).text();
            amazon.link = 'https://www.amazon.co.uk/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=nes+classic+mini&rh=i%3Aaps%2Ck%3Anes+classic+mini';
            if(amazon.price) {
              functions.stockArray.push(amazon);
            } else {
              amazon.stock = 'Out of stock';
            }
          });
      }
  });


  /*************************** NINTENDO REQUEST *******************************/
  request('http://store.nintendo.co.uk/nintendo-classic-mini-hardware/nintendo-classic-mini-nintendo-entertainment-system/11352485.html#7HDEX3j2kzIqheu4.97', function(error,response, body) {
      if(!error) {
          var $ = cheerio.load(body);

          var price, stock, origin, link;
          var nintendo = {origin: 0, price: 0, stock, link};

          $('.product-details').filter(function() {
              var data = $(this);
              nintendo.origin = 'Nintendo';
              nintendo.price = data.find($('.price')).text().trim();
              nintendo.link = 'http://store.nintendo.co.uk/nintendo-classic-mini-hardware/nintendo-classic-mini-nintendo-entertainment-system/11352485.html#7HDEX3j2kzIqheu4.97';
              if(nintendo.stock = data.find($('.cat-button.soldout')).text().trim()) {
                nintendo.stock = data.find($('.cat-button.soldout')).text().trim();
              } else {
                functions.stockArray.push(nintendo);
              }
          });
      }
  });

  /********************** SMYTHS TOYS **********************************/
  request('http://www.smythstoys.com/uk/en-gb/video-games-tablets/c-984/retro-gaming/p-19306/nintendo-classic-mini-nintendo-entertainment-system-with-30-games/', function(error, response, body) {
      if(!error) {
          var $ = cheerio.load(body);

          var price, stock, origin, link;
          var smyths = {origin: 0, price: 0, stock, link};

          $('.d-only.pricing-container').filter(function() {
              var data = $(this);
              smyths.origin = 'Smyths';
              smyths.price = data.find('span[itemprop="price"]').text().trim();
              smyths.link = 'http://www.smythstoys.com/uk/en-gb/video-games-tablets/c-984/retro-gaming/p-19306/nintendo-classic-mini-nintendo-entertainment-system-with-30-games/';
              if(smyths.price) {
                functions.stockArray.push(smyths);
              } else {
                smyths.stock = 'Out of stock';
              }
          });
      }
  });

  /**************************** TOYS'R'US *******************************/
  request('http://www.toysrus.co.uk/toys/nintendo-classic-mini-nintendo-entertainment-system/TRUP1607840001?gclid=Cj0KEQiA08rBBRDUn4qproqwzYMBEiQAqpznsysR2baZjI1DDbUIAYBpbfC9bvehZG8Smd9wPzIl9bcaApSk8P8HAQ', function(error, response, body) {
      if(!error) {
          var $ = cheerio.load(body);

          var price, stock, origin, link;
          var toys = {origin: 0, price: 0, stock, link};

          $('.wrapper.browse.color-2').filter(function() {
            var data = $(this);
            toys.origin = 'Toys r us';
            toys.price = data.find($('.sale.strong.block')).text().trim();
            toys.link = 'http://www.toysrus.co.uk/toys/nintendo-classic-mini-nintendo-entertainment-system/TRUP1607840001?gclid=Cj0KEQiA08rBBRDUn4qproqwzYMBEiQAqpznsysR2baZjI1DDbUIAYBpbfC9bvehZG8Smd9wPzIl9bcaApSk8P8HAQ';
            if(data.find($('.mb28.f12.block:contains("Sorry, this item is out of stock for delivery")'))) {
              toys.stock = 'Out of stock';
            } else {
              functions.stockArray.push(toys);
            }
          });
      }
  });

  /************************* Zaavi *********************************/

  request('http://www.zavvi.com/games/nintendo-classic-mini-nintendo-entertainment-system/11318086.html', function(error, response, body) {
      if(!error) {
          var $ = cheerio.load(body);

          var price, stock, origin, link;
          var zaavi = {origin: 0, price: 0, stock, link};

          $('.product-area.column-row').filter(function() {
            var data = $(this);
            zaavi.origin = 'Zaavi';
            zaavi.price = data.find($('.price')).text().trim();
            zaavi.link = 'http://www.zavvi.com/games/nintendo-classic-mini-nintendo-entertainment-system/11318086.html';
            if(data.find($('.cat-button.soldout:contains("Sold Out")'))) {
              zaavi.stock = 'Out of stock';
            } else {
              functions.stockArray.push(zaavi);
            }
          });
      }
  });
  setTimeout(searchStores, 60000);
})()

module.exports = functions;
