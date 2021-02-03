'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; 

const storeLocations = [];

function SalmonCookieCity (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.totalCookies = 0;
  this.hrCookieList = [];
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  };

  

  //GENERATE A RANDOM NUMBER FOR CUSTOMERS PER HOUR  //////
  SalmonCookieCity.prototype.customerPerHour = function() {
    const perHourCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
    return perHourCustomers;
  };

  //GENERATE A NUMBER FOR COOKIES PURCHASED PER HOUR  
  SalmonCookieCity.prototype.cookiesPurchasedHourly = function() {
    const perHourCookies = Math.ceil(this.customerPerHour() * this.avgCookie);
    return perHourCookies;
  };

//// GENERATE COOKIES PER HOUR FOR ALL HOURS BETWEEN 6AM - 8PM  ///////////////
  SalmonCookieCity.prototype.hourlyCookieList = function() {
      for (var i = 0; i < hours.length; i++) {
        this.hrCookieList.push(this.cookiesPurchasedHourly())
        this.totalCookies += this.hrCookieList[i];
      }
      storeLocations.push(this);
  };

//////CREATE NEW INSTANCES OF EACH STORE LOCATION USING "NEW" FROM THE SINGLE CONSTRUCTOR FUNCTION
let seattle = new SalmonCookieCity ('Seattle', 23, 65, 6.3)
seattle.hourlyCookieList();
let tokyo = new SalmonCookieCity ('Tokyo', 3, 24, 1.2)
tokyo.hourlyCookieList();
let dubai = new SalmonCookieCity ('Dubai', 11, 38, 3.7)
dubai.hourlyCookieList();
let paris = new SalmonCookieCity ('Paris', 20, 38, 2.3)
paris.hourlyCookieList();
let lima = new SalmonCookieCity ('Lima', 2, 16, 4.6)
lima.hourlyCookieList();

///////////////CREATE TABLE HEADER///////////////////////
function createHeader() {
    let cookieStand = document.getElementById('storeHours');
    let th = document.createElement('th');
    th.textContent = "Store Locations";
    cookieStand.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = `${hours[i]}`; 
    cookieStand.appendChild(th)
  }
    let total = document.createElement('th');
    total.textContent = "Daily Location Total";
    cookieStand.appendChild(total);
}

createHeader();

////CREATE CITY LIST AND COOKIES PER HOUR DATA FOR EACH LOCATION//////////
function render() {
  for (var i = 0; i < storeLocations.length; i++) {
    let locations = document.getElementById('city');
    let tr = document.createElement('tr');
    tr.setAttribute('id', `${storeLocations[i].name}`)
    tr.textContent = `${storeLocations[i].name}`; 
    for (var j = 0; j < hours.length; j++) {
      let td = document.createElement('td');
      td.textContent = `${storeLocations[i].hrCookieList[j]}`;
      tr.appendChild(td)
    }
    locations.appendChild(tr)
    //console.log(locations);
  }
}

render();

////DAILY LOCATION TOTAL//////////
function cityGrandTotals() {
  for (let i = 0; i < storeLocations.length; i++) {
    let totals = document.getElementById(`${storeLocations[i].name}`);
    let td = document.createElement('td');
    td.textContent = `${storeLocations[i].totalCookies}`;
    totals.appendChild(td)
  }
};

cityGrandTotals();

////TOTALS AT THE BOTTOM //////////////////////


function grandTotal() {
  let totalNumber = [];
  for (let i = 0; i < storeLocations.length; i++) {
    let result = storeLocations[i].hrCookieList[0];
    console.log(result);
    result += 0;
  }
  totalNumber.push(result);
}
var total = grandTotal(); 
console.log(total);

//storeLocations[3].hrCookieList[0] + storeLocations[1].hrCookieList[1] + //NUMBER OF CITIES



