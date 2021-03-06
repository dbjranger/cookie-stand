"use strict";

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];
let cityTotals = [];
const storeLocations = [];
let tableFooter = document.getElementById("tablefooter");

function SalmonCookieCity(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.totalCookies = 0;
  this.hrCookieList = [];
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.render();
}

// GENERATE A RANDOM NUMBER FOR CUSTOMERS PER HOUR //
SalmonCookieCity.prototype.customerPerHour = function () {
  const perHourCustomers =
    Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) +
    this.minCust;
  return perHourCustomers;
};

// GENERATE A RANDOM NUMBER FOR COOKIES PURCHASED PER HOUR //
SalmonCookieCity.prototype.cookiesPurchasedHourly = function () {
  const perHourCookies = Math.ceil(this.customerPerHour() * this.avgCookie);
  return perHourCookies;
};

// GENERATE COOKIES PER HOUR FOR ALL HOURS BETWEEN 6AM - 8PM //
SalmonCookieCity.prototype.hourlyCookieList = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hrCookieList.push(this.cookiesPurchasedHourly());
    this.totalCookies += this.hrCookieList[i];
  }
  storeLocations.push(this);
};

SalmonCookieCity.prototype.render = function () {
  this.hourlyCookieList();
  let locations = document.getElementById("city");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.textContent = this.name;
  tr.appendChild(th);
  for (var j = 0; j < hours.length; j++) {
    let td = document.createElement("td");
    td.textContent = this.hrCookieList[j];
    tr.appendChild(td);
  }
  let td = document.createElement("td");
  td.textContent = this.totalCookies;
  tr.appendChild(td);
  locations.appendChild(tr);
};

// CREATE NEW INSTANCES OF EACH STORE LOCATION //
let seattle = new SalmonCookieCity("Seattle", 23, 65, 6.3);
let tokyo = new SalmonCookieCity("Tokyo", 3, 24, 1.2);
let dubai = new SalmonCookieCity("Dubai", 11, 38, 3.7);
let paris = new SalmonCookieCity("Paris", 20, 38, 2.3);
let lima = new SalmonCookieCity("Lima", 2, 16, 4.6);

// CREATE TABLE HEADER //
function createHeader() {
  let cookieStand = document.getElementById("storeHours");
  let th = document.createElement("th");
  th.textContent = "Store Locations";
  cookieStand.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement("th");
    th.textContent = `${hours[i]}`;
    cookieStand.appendChild(th);
  }
  let total = document.createElement("th");
  total.textContent = "Daily Location Total";
  cookieStand.appendChild(total);
}

createHeader();

// PUSHES BOTTOM HOURLY TOTALS INTO ARRAY //
function createCityTotals() {
  cityTotals = [];
  for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (let j = 0; j < storeLocations.length; j++) {
      sum += storeLocations[j].hrCookieList[i];
    }
    cityTotals.push(sum);
  }
}

// POSTS BOTTOM HOURLY TOTALS TO THE DOM //
function renderTotal() {
  createCityTotals();
  let sumTotal = 0;
  for (let i = 0; i < storeLocations.length; i++) {
    sumTotal += storeLocations[i].totalCookies;
  }
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.textContent = "Totals";
  tr.appendChild(th);
  for (var j = 0; j < hours.length; j++) {
    let td = document.createElement("td");
    td.textContent = cityTotals[j];
    tr.appendChild(td);
  }
  let td = document.createElement("td");
  td.textContent = sumTotal;
  tr.appendChild(td);
  tableFooter.appendChild(tr);
}

renderTotal();

//GET ELEMENT FROM DOM //

let myForm = document.querySelector("form");

// FUNCTION FOR OUR EVENT LISTENER //

function handleSubmit(event) {
  // eliminate default behavior so form is not cleared out //
  event.preventDefault();
  // create variables to capture the response in each field for the form //
  let city = event.target.newLocation.value;
  let minimumCustomers = +event.target.minCust.value;
  let maximumCustomers = +event.target.maxCust.value;
  let averageCookies = +event.target.avgCookie.value;
  // CREATE NEW INSTANCE OF A COOKIE STAND BASED ON USER SUBMITTING FORM//
  let newCookieStand = new SalmonCookieCity(
    city,
    minimumCustomers,
    maximumCustomers,
    averageCookies
  );

  if (minimumCustomers > maximumCustomers) {
    alert("Max Customers must be higher than Min Customers");
  } else {
    tableFooter.innerHTML = "";
    renderTotal();
  }
}

// ADD EVENT LISTENER //
myForm.addEventListener("submit", handleSubmit);
