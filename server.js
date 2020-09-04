"use strict";

var http = require('http'),
http1= require('https');
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');
var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "main.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

// // create options for GET request
// var options = {
//     hostname: 'api.ocbc.com',
//     port:8243,
//     path:'/Forex/1.1?country=SG',
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer 714d88bd7a42114c62ca390b940dbbb6'
//     }
//   }
  
//   // Database Connection
//   var con = mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "",
//       database: "watchlist",
//       port: '8080'
//     });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

// // load the function from the tools.js file
// var resultStock2 = require('./tools.js')

// app.get("/" + startPage, gotoIndex);

// app.route("/");

// // get all rows from stock1 table
// app.get('/stock1/:id', function (req, res) {
    
//       var responsedata = "";
//       var dataobj;
//       var response = [];
//       var stockNames = req.params.id; // list of stock names for BATCH QUOTE
  
//       var httpString = 'https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols='+stockNames+'&apikey=0A4V8SW22I040EAP';
  
//       const req1 = http1.request(httpString, (res1) => {
//         console.log(`STATUS: ${res1.statusCode}`);
//         console.log(`HEADERS: ${JSON.stringify(res1.headers)}`);
//         res1.setEncoding('utf8');
//         res1.on('data', (chunk) => {
//           console.log(`BODY: ${chunk}`);
//           responsedata += chunk;
//         });
//         res1.on('end', () => {
//           console.log('No more data in response.');
          
//           // converts the string into JSON format
//           dataobj = JSON.parse(responsedata);
  
//           // find list of stock names in BATCH QUOTE
//           var listOfStockNames = resultStock2(dataobj, '1. symbol');
//           // find list of stock prices in BATCH QUOTE
//           var listOfStockPrices = resultStock2(dataobj, '2. price');
//           //var listOfStockVolumes = resultStock2(dataobj, '3. volume');
  
//           //response.push({'info': responsedata});
//           response.push(listOfStockNames);
//           response.push(listOfStockPrices);
//           //response.push(listOfStockVolumes);
  
//           return res.send(response);
//         });
//       });
      
//       req1.on('error', (e) => {
//         console.error(`problem with request: ${e.message}`);
//       });
      
//       req1.end();
     
//     });

//      // Post notification to database
// app.post('/notification/add', function (req, res) {
//     var response = [];
  
//     var firstname = "John";
//     var stockname = "MSFT";
//     var stockprice = 107.65;
//     var stockunits = parseInt(req.body.stockunits);
//     var stocktotalunits = parseInt(req.body.stocktotalunits);
  
//     con.query('INSERT INTO notification (firstname, stockname, stockprice, stockunits, stocktotalunits) VALUES (?, ?, ?, ?, ?) ', [firstname, stockname, stockprice, stockunits, stocktotalunits], function (error, results, fields) {
//        if (error) throw error;
//        if (results.affectedRows != 0) {
//           response.push({'result' : 'success'});
//           return res.send(response);
//       } else 
//       {
//           response.push({'result' : 'failure'});
//           return res.send(response);
//       }
//      });
//    });  
  
//    // Get all from the notification table 
//    app.get('/notification', function (req, res) {
    
//         con.query('SELECT * FROM notification', function (error, results, fields) {
//            if (error) throw error;
//            return res.send(results); // send results only
//          }); 
//        });
    
  
//    //Post the accepted notification to database
  
//    // Post notification to database
//   app.post('/buy/add', function (req, res) {
//     var response = [];
  
//     var firstname = req.body.firstname;
//     var stockname = req.body.stockname;
//     var stockprice = req.body.stockprice;
//     var stocktotalunits = parseInt(req.body.stocktotalunits);
//     var typeoftransaction = "Group";
  
//     con.query('INSERT INTO buy (firstname, stockname, stockprice, stocktotalunits, typeoftransaction) VALUES (?, ?, ?, ?, ?) ', [firstname, stockname, stockprice, stocktotalunits, typeoftransaction], function (error, results, fields) {
//        if (error) throw error;
//        if (results.affectedRows != 0) {
//           response.push({'result' : 'success'});
//           return res.send(response);
//       } else 
//       {
//           response.push({'result' : 'failure'});
//           return res.send(response);
//       }
//      });
//    });

//    // get all rows from watchlist table
// app.get('/currencyapi', function (req, res) {
  
//   var responsedata = "";
//   var dataobj;
//   var response = [];

//   const req1 = http1.request(options, (res1) => {
//     console.log(`STATUS: ${res1.statusCode}`);
//     console.log(`HEADERS: ${JSON.stringify(res1.headers)}`);
//     res1.setEncoding('utf8');
//     res1.on('data', (chunk) => {
//       console.log(`BODY: ${chunk}`);
//       responsedata += chunk;
//     });
//     res1.on('end', () => {
//       console.log('No more data in response.');
      
//       // converts the string into JSON format
//       dataobj = JSON.parse(responsedata);
//       // it is a nested JSON
//       // need 2 loops
//       for (var x in dataobj)
//       {
//         // gets the list of rates in y
//         var y = dataobj[x];
//         for (var p in y) // go through each pair of rates
//         {
//           if (y[p].bankBuyingRateTT != null) // ignore empty values
//           {
//             response.push( {'BuyingRate' :y[p].bankBuyingRateTT } );
//             response.push( {'toCurrency' : y[p].toCurrency})
//           }
//         }
//       }
//       return res.send(response);
//     });
//   });
  
//   req1.on('error', (e) => {
//     console.error(`problem with request: ${e.message}`);
//   });
  
//   req1.end();
 
// });

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});