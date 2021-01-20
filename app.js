var storeTimes = [ " ", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am",
  "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Daily Location Total"]

// Should "Total" be the last variable here to complete the table structure?
  var cityLocations = [ "Seattle", "Tokyo", "Dubai", "Paris", "Lima" ]



function createHeader() {
  for (var i = 0; i < storeTimes.length; i++) {
    //Add headers to table
    var tdParent = document.getElementById("Times");
    var td = document.createElement("td");
    var string = storeTimes[i];
    td.innerHTML = `${string}`;
    tdParent.appendChild(td);
  }
}
createHeader();

function createCityList() {
//Add cities to the left navigation of the table
  for (var i = 0; i < cityLocations.length; i++) {
    var tdParent = document.getElementById(cityLocations[i]);
    var td = document.createElement("td")
    var string = cityLocations[i];
    td.innerHTML = `${string}`  
    tdParent.appendChild(td);
    }
} 
createCityList();


var cookiesHr = [];
for (var i = 0; i < 14; i++) {
  cookiesHr.push(Math.floor(Math.random() * 100))
}

var totalCustomerCount = Math.floor(Math.random() * 100)

var minimumCustomerCount = (Math.floor(Math.random() * 10));

var maximumCustomerCount = (Math.floor(Math.random() * 75));

var allLocations = [];


function Location(locationName, totalCustomersDaily, minHourlyCustomers, maxHourlyCustomers, cookiesHourly) {
  this.locationName = locationName;
  this.totalCustomersDaily = totalCustomersDaily;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.cookiesHourly = cookiesHourly;
  this.allData = this
}



// totalCustomer, minimum, and maximum customer count are all the same number. 

  
  var seattle = new Location("Seattle", totalCustomerCount, minimumCustomerCount, maximumCustomerCount, cookiesHr)
  var tokyo = new Location("Tokyo", totalCustomerCount, minimumCustomerCount, maximumCustomerCount, cookiesHr);
  var dubai = new Location("Dubai", totalCustomerCount, minimumCustomerCount, maximumCustomerCount, cookiesHr);
  var paris = new Location("Paris", totalCustomerCount, minimumCustomerCount, maximumCustomerCount, cookiesHr);
  var lima = new Location("Lima", totalCustomerCount, minimumCustomerCount, maximumCustomerCount, cookiesHr);


  console.log(seattle.allData);


//console.log(seattle);
//console.log(tokyo);
//console.log(dubai);
//console.log(paris);
//console.log(lima);


// var cityLocations = [ "Seattle", "Tokyo", "Dubai", "Paris", "Lima" ]


// This for loop needs to loop through each cityLocation and enter their cookies per hour into the table. 
for (var i = 0; i < cityLocations.length; i++) {
  var tdParent = document.getElementById(cityLocations[i]);
  var td = document.createElement("td");
  var string = cityLocations[i];
  td.innerHTML = `${string}`;
  //tdParent.appendChild(td);
  for (var j = 0; j < cookiesHr.length; j++) {
    var td2 = document.createElement("td");
    var string2 = cookiesHr[j]
    td2.innerHTML = `${string2}`
    tdParent.appendChild(td2)

  }
}


//Find the totals for each hour


//Find the totals for each city Location



// Issues:  1) Same totalCustomer, minimum, and maximum customer count are all the same number.
//          2) Can't access the hourlycookies per location in the for loop
//          3) How to calculate totals for hour
//          4) How to calculate totals for each city Location










/*
//var minimumCustomerCount = Math.min.apply(Math, totalCustomerCount);

//Stores the min/max hourly customers, and the average cookies per customer, in object properties
var allLocations = []; 
var totalCustomersDaily = Math.floor(Math.random() * 100);



function averageCookiesPerCustomer() {
    //this.averageCookiesPerCustomer = function() {
      //  var average = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + (this.minHourlyCustomers) * this.cookiesHourly
      //};
}

//function totalCustomersDaily() {
//  Math.floor(Math.random() * 100)
//}

//function minHourCustomers() {
//  
//}



var  = document.createElement("li");
var num = Math.floor(Math.random() * 100);
var string = `${timeAM}am: ${num} cookies`;
li.innerHTML = `${string}`;
ul.appendChild(li);


var li = document.createElement("li");
var num = Math.floor(Math.random() * 100);
var string = `${timePM}pm: ${num} cookies`;
li.innerHTML = `${string}`;
ul.appendChild(li);
  

function createList() { 
    var li = document.createElement("li");
    var num = Math.floor(Math.random() * 100);
    var string = `${num} cookies`;
    li.innerHTML = `${string}`;
    ul.appendChild(li);
};





for (var i = 0; i < 13; i++) {
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

    seattle.cookiesHourly.push(Math.floor(Math.random() * 100));
    tokyo.cookiesHourly.push(Math.floor(Math.random() * 100));
    dubai.cookiesHourly.push(Math.floor(Math.random() * 100));
    paris.cookiesHourly.push(Math.floor(Math.random() * 100));
    lima.cookiesHourly.push(Math.floor(Math.random() * 100));

};





function maxHourCustomers() {
  Math.max.apply(Math, this.totalCustomersDaily);
}




/*

 var li = document.createElement("li");
    var num = Math.floor(Math.random() * 100);
    var string = `${timeAM}am: ${num} cookies`;
    li.innerHTML = `${string}`;
    ul.appendChild(li);







//All of these object literals are replaced with a single constructor function (Above)

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


var timeAM = 6;
var timePM = 1;





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

*/
