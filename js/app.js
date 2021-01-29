'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; 

var stores = [];

let seattle = {
  totalCookies: 0,
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
      for (var i = 0; i < hours.length; i++) {
        this.hrCookieList.push(this.cookiesPurchasedHourly())
       }
   },
  total: function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies = sum;
  },
  render: function () {
    seattle.hourlyCookieList();
    seattle.total();
    for (var i = 0; i < hours.length; i++) {
      let citySeattle = document.getElementById('Seattle');
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]}: ${seattle.hrCookieList[i]} cookies`; 
      citySeattle.appendChild(li)
    };
    let citySeattle = document.getElementById('Seattle');
    let li = document.createElement('li');
    li.textContent = `Total: ${seattle.totalCookies} cookies`; 
    citySeattle.appendChild(li)

  }
}

let tokyo = {
  totalCookies: 0,
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
      for (var i = 0; i < hours.length; i++) {
          this.hrCookieList.push(this.cookiesPurchasedHourly())
      }
  },
  total: function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies = sum;
  },
  render: function () {
    tokyo.hourlyCookieList();
    tokyo.total();
    for (var i = 0; i < hours.length; i++) {
      let cityTokyo = document.getElementById('Tokyo');
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]}: ${tokyo.hrCookieList[i]} cookies`; 
      cityTokyo.appendChild(li)
    };
    let cityTokyo = document.getElementById('Tokyo');
    let li = document.createElement('li');
    li.textContent = `Total: ${tokyo.totalCookies} cookies`; 
    cityTokyo.appendChild(li)
  }
} 
  
let dubai = {
  totalCookies: 0,
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
      for (var i = 0; i < hours.length; i++) {
          this.hrCookieList.push(this.cookiesPurchasedHourly())
      }
      return this.hrCookieList
  },
  total: function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies = sum;
  },
  render: function () {
    dubai.hourlyCookieList();
    dubai.total();
    for (let i = 0; i < hours.length; i++) {
      let cityDubai = document.getElementById('Dubai');
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]}: ${dubai.hrCookieList[i]} cookies`; 
      cityDubai.appendChild(li)
    };
    let cityDubai = document.getElementById('Dubai');
    let li = document.createElement('li');
    li.textContent = `Total: ${dubai.totalCookies} cookies`; 
    cityDubai.appendChild(li)
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
      for (var i = 0; i < hours.length; i++) {
          this.hrCookieList.push(this.cookiesPurchasedHourly())
      }
  },
  total: function () {
    let sum = 1;
    for (var i = 0; i < hours.length; i++) {
      sum += this.hrCookieList[i]
    }
    this.totalCookies = sum
  },
  render: function () {
    paris.hourlyCookieList();
    paris.total();
    for (var i = 0; i < hours.length; i++) {
      let cityParis = document.getElementById('Paris');
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]}: ${paris.hrCookieList[i]} cookies`; 
      cityParis.appendChild(li)
    };
    let cityParis = document.getElementById('Paris');
    let li = document.createElement('li');
    li.textContent = `Total: ${paris.totalCookies} cookies`; 
    cityParis.appendChild(li)
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
      for (var i = 0; i < hours.length; i++) {
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
  },
  render: function () {
    lima.hourlyCookieList();
    lima.total();
    for (var i = 0; i < hours.length; i++) {
      let cityLima = document.getElementById('Lima');
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]}: ${lima.hrCookieList[i]} cookies`; 
    cityLima.appendChild(li)
    };
    let cityLima = document.getElementById('Lima');
    let li = document.createElement('li');
    li.textContent = `Total: ${lima.totalCookies} cookies`; 
    cityLima.appendChild(li);
  }
}

tokyo.render();
dubai.render();
paris.render();
lima.render();


















































