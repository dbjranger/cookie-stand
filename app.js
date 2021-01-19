//Stores the min/max hourly customers, and the average cookies per customer, in object properties
var seattle = {
  totalCustomersDaily: [],
  minHourlyCustomers: null,
  maxHourlyCustomers: null,
  averageCookiesPerHour: function() {
    (this.minHourlyCustomers + this.maxHourlyCustomers) / 2;
  },
  cookiesHourly: [],
  cookieTotal: 0,
};

var tokyo = {
  totalCustomersDaily: [],
  minHourlyCustomers: null,
  maxHourlyCustomers: null,
  averageCookiesPerHour: function() {
    (this.minHourlyCustomers + this.maxHourlyCustomers) / 2;
  },
  cookiesHourly: [],
  cookieTotal: 0,
};

var dubai = {
  totalCustomersDaily: [],
  minHourlyCustomers: null,
  maxHourlyCustomers: null,
  averageCookiesPerHour: function() {
    (this.minHourlyCustomers + this.maxHourlyCustomers) / 2;
  },
  cookiesHourly: [],
  cookieTotal: 0,
};

var paris = {
  totalCustomersDaily: [],
  minHourlyCustomers: null,
  maxHourlyCustomers: null,
  averageCookiesPerHour: function() {
    (this.minHourlyCustomers + this.maxHourlyCustomers)
  },
  cookiesHourly: [],
  cookieTotal: 0,
};

var lima = {
  totalCustomersDaily: [],
  minHourlyCustomers: null,
  maxHourlyCustomers: null,
  averageCookiesPerHour: function() {
    minHourlyCustomers + maxHourlyCustomers)
  },
  cookiesHourly: [],
  cookieTotal: 0,
};

//Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
var customersPerHour = Math.floor(Math.random() * 50);

//Uses a method of that object to generate a random number of cookies per hour. Objects/Math/random
var cookiesPerHour = Math.floor(Math.random() * 100);

//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var timeAM = 6;
var timePM = 1;

function createList() {
  if (timeAM < 13) {  
    var li = document.createElement("li");
    var num = Math.floor(Math.random() * 100);
    var string = `${timeAM}am: ${num} cookies`;
    li.innerHTML = `${string}`;
    ul.appendChild(li);
  } else {
    var li = document.createElement("li");
    var num = Math.floor(Math.random() * 100);
    var string = `${timePM}pm: ${num} cookies`;
    li.innerHTML = `${string}`;
    ul.appendChild(li);
  }
}



for (var i = 0; i < 13; i++) {
  if (timeAM < 13) {
    var ul = document.getElementById("seattleCookies");
    createList();
    var ul = document.getElementById("tokyoCookies");
    createList();
    var ul = document.getElementById("dubaiCookies");
    createList();
    var ul = document.getElementById("parisCookies");
    createList();
    var ul = document.getElementById("limaCookies");
    createList();

    tokyo.cookiesHourly.push(timeAM + "am: " + Math.floor(Math.random() * 100));
    dubai.cookiesHourly.push(timeAM + "am: " + Math.floor(Math.random() * 100));
    paris.cookiesHourly.push(timeAM + "am: " + Math.floor(Math.random() * 100));
    lima.cookiesHourly.push(timeAM + "am: " + Math.floor(Math.random() * 100));

    timeAM++;

    } else {
          var ul = document.getElementById("seattleCookies");
          createList();
          var ul = document.getElementById("tokyoCookies");
          createList();
          var ul = document.getElementById("dubaiCookies");
          createList();
          var ul = document.getElementById("parisCookies");
          createList();
          var ul = document.getElementById("limaCookies");
          createList();

          seattle.cookiesHourly.push(timePM + "pm: " + Math.floor(Math.random() * 100));
          tokyo.cookiesHourly.push(timePM + "pm: " + Math.floor(Math.random() * 100));
          dubai.cookiesHourly.push(timePM + "pm: " + Math.floor(Math.random() * 100));
          paris.cookiesHourly.push(timePM + "pm: " + Math.floor(Math.random() * 100));
          lima.cookiesHourly.push(timePM + "pm: " + Math.floor(Math.random() * 100));
          timePM++
        }
    }



// Store a separate variable (We can refactor this code)
seattle.cookieTotal = seattle.cookiesHourly.reduce(reducer);
tokyo.cookieTotal = tokyo.cookiesHourly.reduce(reducer);
dubai.cookieTotal = dubai.cookiesHourly.reduce(reducer);
paris.cookieTotal = paris.cookiesHourly.reduce(reducer);
lima.cookieTotal = lima.cookiesHourly.reduce(reducer);

// Add the totals to the end of the arrays for each city
seattle.cookiesHourly.push("Total: " + seattle.cookiesHourly.reduce(reducer));
tokyo.cookiesHourly.push("Total: " + tokyo.cookiesHourly.reduce(reducer));
dubai.cookiesHourly.push("Total: " + dubai.cookiesHourly.reduce(reducer));
paris.cookiesHourly.push("Total: " + paris.cookiesHourly.reduce(reducer));
lima.cookiesHourly.push("Total: " + lima.cookiesHourly.reduce(reducer));

//console.log(seattle.cookiesHourly);

// Total Number of Customers per location
for (var i = 0; i < 14; i++) {
  seattle.totalCustomersDaily.push(Math.floor(Math.random() * 100));
  tokyo.totalCustomersDaily.push(Math.floor(Math.random() * 100));
  dubai.totalCustomersDaily.push(Math.floor(Math.random() * 100));
  paris.totalCustomersDaily.push(Math.floor(Math.random() * 100));
  lima.totalCustomersDaily.push(Math.floor(Math.random() * 100));
}

seattle.minHourlyCustomers = Math.min.apply(Math, seattle.totalCustomersDaily);
//console.log(seattle.totalCustomersDaily);
//console.log(seattle.minHourlyCustomers);
//Math.min.apply(Math, seattle.totalCustomersDaily)
//minhourlyCustomers

//Store the results for each location in a separate array… perhaps as a property of the object representing that location

//Display the values of each array as unordered lists in the browser

//Calculating the sum of these hourly totals; your output for each location should look like this:
