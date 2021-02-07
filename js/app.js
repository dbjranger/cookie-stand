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

////PUSHES BOTTOM HOURLY TOTALS INTO ARRAY//////////////////////
let cityTotals = [];

  for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (let j = 0; j < storeLocations.length; j++) {
      sum += storeLocations[j].hrCookieList[i];
    }
    cityTotals.push(sum);
  }

////////////POSTS BOTTOM HOURLY TOTALS TO THE DOM///////////////

function renderTotal() {
    let locations = document.getElementById('city');
    let tr = document.createElement('tr');
    tr.setAttribute('id', `Hourly Totals`)
    tr.textContent = `Hourly Totals`; 
    for (var j = 0; j < hours.length; j++) {
      let td = document.createElement('td');
      td.textContent = `${cityTotals[j]}`;
      tr.appendChild(td)
    }
    locations.appendChild(tr)
}

renderTotal();

//////////////Sum up Daily Total Cookies////////////

let sumTotal = 0;

for (let i = 0; i < storeLocations.length; i++) {
  sumTotal += storeLocations[i].totalCookies
}

//////////////TOTAL COOKIES///////////////////////////

function dailyLocationSum () {
  let locations = document.getElementById('Hourly Totals');
  let td = document.createElement('td');
  td.textContent = `${sumTotal}`;
  locations.appendChild(td)
}

dailyLocationSum();

//GET ELEMENT FROM DOM //

let myForm = document.querySelector("form");

// ADD EVENT LISTENER //
myForm.addEventListener("submit", handleSubmit);

// FUNCTION FOR OUR EVENT LISTENER //

function handleSubmit(event) {

  //eliminate default behavior so form is not cleared out
  event.preventDefault();

  // create variables to capture the response in each field for the form //
  let city = event.target.newLocation.value;
  let minimumCustomers = +event.target.minCust.value;
  let maximumCustomers = +event.target.maxCust.value;
  let averageCookies = +event.target.avgCookie.value;
  
  // CREATE NEW INSTANCE OF A COOKIE STAND BASED ON USER SUBMITTING FORM//
  let newCookieStand = new SalmonCookieCity (city, minimumCustomers, maximumCustomers, averageCookies)
  newCookieStand.hourlyCookieList();
  console.log(newCookieStand.hrCookieList);

  // Ensure MIN CUSTOMERS IS LOWER THAN MAX CUST //
  // if (minimumCustomers < maximumCustomers) {
  //   alert("Minimum Customer Count must be lower than Maximum Customer Count")
  // };

  // REPOST THE TABLE DATA INCLUDING THE NEW FORM DATA //
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
      }
    }
    //DO NOT ALLOW THE FORM TO BE SUBMITTED WITH EMPTY FIELDS//
    if ((city || minimumCustomers || maximumCustomers || averageCookies) == "") {
    alert("No empty field allowed!");
  } else if (minimumCustomers > maximumCustomers) {
    alert("Max Customers must be higher than Min Customers");
  } else {
    // NEED TO CLEAR THE TABLE BEFORE REPOSTING //
    document.querySelector("tbody").textContent = "";
    render();
    renderTotal();
    dailyLocationSum();
    cityGrandTotals();
  }
}




