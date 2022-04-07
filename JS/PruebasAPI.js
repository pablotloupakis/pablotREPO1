"use strict";
console.log ("Hello API"); 

//const fetchUriPABLOT = "https://www.admiralty.co.uk/admiraltydownloadmedia/avcs/readme.txt";
//const fetchUriPABLOT = "README.txt";
const fetchUriPABLOT = "https://www.admiralty.co.uk";

const fetchInitPABLOT = {
  method: 'GET',
  mode: 'no-cors',
 //The mode you want to use for the request, e.g., cors, no-cors, or same-origin. 
 //‘Access-Control-Allow-Origin
};

function myDisplayer(some) {
  console.log (some); 
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value2) {myDisplayer(value2);},
  function(error) {myDisplayer(error);}
);
