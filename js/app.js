'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; 

const storeLocations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima',];

var SalmonCookieCity = {
  totalCookies: this.totalCookies,
  hrCookieList: this.hrCookieList,
  name: this.name,
  minCust: this.minCust,
  maxCust: this.maxCust,
  avgCookie: this.avgCookie,
}

  //GENERATE A RANDOM NUMBER FOR CUSTOMERS PER HOUR  ///////GETTING ERRORS HERE
  SalmonCookieCity.prototype.customerPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  }

  //GENERATE A NUMBER FOR COOKIES PURCHASED PER HOUR  
  SalmonCookieCity.prototype.cookiesPurchasedHourly = function() {
    return Math.ceil(this.customerPerHour() * this.avgCookie)
  }
  
  //GENERATE COOKIES PER HOUR FOR ALL HOURS BETWEEN 6AM - 8PM
  SalmonCookieCity.prototype.hourlyCookieList = function() {
      for (var i = 0; i < hours.length; i++) {
        this.hrCookieList.push(this.cookiesPurchasedHourly())
      }
  }
  
  //GENERATE THE TOTAL NUMBER OF COOKIES PER CITY
  SalmonCookieCity.prototype.total = function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies = sum;
  },

  
  //GENERATE THE LIST OF TABLE ITEMS ///NEEDS TO BE FIXED//

  // SalmonCookieCity.prototype.render = function () {
  //   this.hourlyCookieList();
  //   this.total();
  //   for (var i = 0; i < hours.length; i++) {
  //     let city = document.getElementById('${this.name}');
  //     let li = document.createElement('li');
  //     li.innerHTML = `${hours[i]}: ${this.hrCookieList[i]} cookies`; 
  //     city.appendChild(li)
  //   };
  //   let city = document.getElementById('${this.name}');
  //   let li = document.createElement('li');
  //   li.textContent = `Total: ${this.totalCookies} cookies`; 
  //   city.appendChild(li)
  // }

  ///////////////RENDER FUNCTIONS FOR CITIES//////////////////
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();

  //CREATE NEW INSTANCES OF EACH STORE LOCATION USING "NEW" FROM THE SINGLE CONSTRUCTOR FUNCTION
  var seattle = new SalmonCookieCity (0, [], 'Seattle', 23, 65, 6.3)
  var tokyo = new SalmonCookieCity (0, [], 'Tokyo', 3, 24, 1.2)
  var dubai = new SalmonCookieCity (0, [], 'Dubai', 11, 38, 3.7)
  var paris = new SalmonCookieCity (0, [], 'Paris', 20, 38, 2.3)
  var lima = new SalmonCookieCity (0, [], 'Lima', 2, 16, 4.6)

///////////////CREATE TABLE HEADER///////////////////////
function createHeader() {
  for (var i = 0; i < hours.length; i++) {
    let times = document.getElementById('hours');
    let th = document.createElement('th');
    th.innerHTML = `${hours[i]}`; 
    times.appendChild(th)
  }
}

createHeader();

//////////////////CREATE LEFT SIDE CITY LIST.  CALLING IT A FOOTER   DONT UNDERSTAND DOUBLE LOOP????///////////////////
function createFooter() {
  for (var i = 0; i < storeLocations.length; i++) {
    for (var y = 0; y < storeLocations.length; y++) {
      if (y < i) {
        let locations = document.getElementById('city');
        let th = document.createElement('th');
        th.innerHTML = `${storeLocations[y]}`; 
        locations.appendChild(th)
      } 
    }
  }
}

createFooter();