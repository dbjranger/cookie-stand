'use strict';

const hourlyCustomers = function randomCustomerNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; 

var stores = [];

let seattle = {
  totalCookies: [],
  hrCookieList: [],
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  },
  cookiesPurchasedHourly: function() {
      return Math.ceil(this.customerPerHour() * this.avgCookie)
  },
  hourlyCookieList: function() {
      for (i = 0; i < hours.length; i++) {
        this.hrCookieList.push(this.cookiesPurchasedHourly())
       }
      //return this.seattleHourlyCookieList
   },
  total: function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies.push(sum)
  }
}

let tokyo = {
  totalCookies: [],
  hrCookieList: [],
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  },
  cookiesPurchasedHourly: function() {
      return Math.ceil(this.customerPerHour() * this.avgCookie)
  },
  tokyoHourlyCookieList: [],
  hourlyCookieList: function() {
      for (i = 0; i < hours.length; i++) {
          this.hrCookieList.push(this.cookiesPurchasedHourly())
      }
      //return this.hrCookieList
  },
  total: function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies.push(sum)
  }
}

//CITY HOURLY COOKIE LIST = hrCookieList

let dubai = {
  totalCookies: [],
  hrCookieList: [],
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  },
  cookiesPurchasedHourly: function() {
      return Math.ceil(this.customerPerHour() * this.avgCookie)
  },
  hourlyCookieList: function() {
      for (i = 0; i < hours.length; i++) {
          this.hrCookieList.push(this.cookiesPurchasedHourly())
      }
      return this.hrCookieList
  },
  total: function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies.push(sum)
  }
}

let paris = {
  totalCookies: 0,
  hrCookieList: [],
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  },
  cookiesPurchasedHourly: function() {
      return Math.ceil(this.customerPerHour() * this.avgCookie)
  },
  hourlyCookieList: function() {
      for (i = 0; i < hours.length; i++) {
          this.hrCookieList.push(this.cookiesPurchasedHourly())
      }
      //return this.hrCookieList
  },
  total: function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies = sum
  }
}

let lima = {
  totalCookies: 0,
  hrCookieList: [],
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  customerPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  },
  cookiesPurchasedHourly: function() {
      return Math.ceil(this.customerPerHour() * this.avgCookie)
  },
  hourlyCookieList: function() {
      for (i = 0; i < hours.length; i++) {
          this.hrCookieList.push(this.cookiesPurchasedHourly())
      }
      return this.hrCookieList
  },
  total: function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies = sum
  }
}

///Call the function for each city to populate the empty array
seattle.hourlyCookieList();
tokyo.hourlyCookieList();
dubai.hourlyCookieList();
paris.hourlyCookieList();
lima.hourlyCookieList();

///Call the function to sum the total
seattle.total();
tokyo.total();
dubai.total();
paris.total();
lima.total();


//// Populate the unordered list with function

for (var i = 0; i < hours.length; i++) {
  let citySeattle = document.getElementById('Seattle');
  let li = document.createElement('li');
  li.innerHTML = `${hours[i]}: ${seattle.hrCookieList[i]} cookies`; 
  citySeattle.appendChild(li)
}

let citySeattle = document.getElementById('Seattle');
  let li = document.createElement('li');
  li.textContent = `Total: ${seattle.totalCookies} cookies`; 
  citySeattle.appendChild(li)

for (var i = 0; i < hours.length; i++) {
  let cityTokyo = document.getElementById('Tokyo');
  let li = document.createElement('li');
  li.innerHTML = `${hours[i]}: ${tokyo.hrCookieList[i]} cookies`; 
  cityTokyo.appendChild(li)
}

for (var i = 0; i < hours.length; i++) {
  let cityDubai = document.getElementById('Dubai');
  let li = document.createElement('li');
  li.innerHTML = `${hours[i]}: ${dubai.hrCookieList[i]} cookies`; 
  cityDubai.appendChild(li)
}

for (var i = 0; i < hours.length; i++) {
  let cityParis = document.getElementById('Paris');
  let li = document.createElement('li');
  li.innerHTML = `${hours[i]}: ${paris.hrCookieList[i]} cookies`; 
  cityParis.appendChild(li)
}

for (var i = 0; i < hours.length; i++) {
  let cityLima = document.getElementById('Lima');
  let li = document.createElement('li');
  li.innerHTML = `${hours[i]}: ${lima.hrCookieList[i]} cookies`; 
  cityLima.appendChild(li)
}


/// Populate the sum for Cities
  // let citySeattle = document.getElementById('Seattle');
  // let li = document.createElement('li');
  // li.textContent = `Total: ${seattle.totalCookies} cookies`; 
  // citySeattle.appendChild(li)

  let cityTokyo = document.getElementById('Tokyo');
  li = document.createElement('li');
  li.textContent = `Total: ${tokyo.totalCookies} cookies`; 
  cityTokyo.appendChild(li)

  let cityDubai = document.getElementById('Dubai');
  li = document.createElement('li');
  li.textContent = `Total: ${dubai.totalCookies} cookies`; 
  cityDubai.appendChild(li)

  let cityParis = document.getElementById('Paris');
  li = document.createElement('li');
  li.textContent = `Total: ${paris.totalCookies} cookies`; 
  cityParis.appendChild(li)

  let cityLima = document.getElementById('Lima');
  li = document.createElement('li');
  li.textContent = `Total: ${lima.totalCookies} cookies`; 
  cityLima.appendChild(li)


