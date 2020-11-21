// The solution should have:
// 1.	Stage 1: List of cars
// a.	Users should be able to see list of cars in the fleet
// b.	Users should be able to add new cars
// c.	Users should be able to edit existing entries in the list
// d.	Users should be able change car state: Available or Rented
// e.	Users should be able to clearly see if car is rented or not
// f.	Car should have these properties: Unique ID, Car Maker, Car Model, Manufacturing Year, Number of seats, Price per day, Rented Date From, Rented Date To
// 2.	Stage 2: Rent history
// a.	Each car should have rent history.
// b.	Rent history should include: Date from, Date to, Number of days rented, Miles Driven, Price per day, Total Price (days rented * price per day), Total Price with VAT (Total Price + 21%)

// local storage?
// is kur bus paimamas sarasas
// gal geriau issaugoti kur nors, kad neistrintu su cookies
// mass delete?
// how add new works? new window or just a modal pop up? new window is tiring. refreshes will cause trouble(Shouldnt as data is being saved and is not static)?
// it would work nicer with react
// plan: build one vanilla and then if has time build one on react. double the fun.
// comments?

let car = [{
        "id": 1,
        "manufacturer": "Toyota",
        "model": "Yaris",
        "manufacturingYear": new Date('2000-01-01'),
        "capacity": 5,
        "dayPrice": 6,
        "rentedFrom": new Date('2000-01-01'),
        "rentedTo": new Date('2000-01-01'),
        //extra stuff
        "plateNumber": "abc123",
        "rented": true,
        rentHistory: [{
                "dateFrom": new Date('2000-01-01'),
                "dateTo": new Date('2000-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
            {
                "dateFrom": new Date('2001-01-01'),
                "dateTo": new Date('2001-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
        ]
    },
    {
        "id": 2,
        "manufacturer": "lexus",
        "model": "Yaris",
        "manufacturingYear": new Date('2000-01-01'),
        "capacity": 5,
        "dayPrice": 6,
        "rentedFrom": new Date('2000-01-01'),
        "rentedTo": new Date('2000-01-01'),
        //extra stuff
        "plateNumber": "abc123",
        "rented": false,
        rentHistory: [{
                "dateFrom": new Date('2000-01-01'),
                "dateTo": new Date('2000-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
            {
                "dateFrom": new Date('2001-01-01'),
                "dateTo": new Date('2001-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
        ]
    },
    {
        "id": 3,
        "manufacturer": "mazda",
        "model": "Yaris",
        "manufacturingYear": new Date('2000-01-01'),
        "capacity": 5,
        "dayPrice": 6,
        "rentedFrom": new Date('2000-01-01'),
        "rentedTo": new Date('2000-01-01'),
        //extra stuff
        "plateNumber": "abc123",
        "rented": true,
        rentHistory: [{
                "dateFrom": new Date('2000-01-01'),
                "dateTo": new Date('2000-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
            {
                "dateFrom": new Date('2001-01-01'),
                "dateTo": new Date('2001-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,

            },
        ]
    },
    {
        "id": 4,
        "manufacturer": "BMW",
        "model": "Yaris",
        "manufacturingYear": new Date('2000-01-01'),
        "capacity": 5,
        "dayPrice": 6,
        "rentedFrom": new Date('2000-01-01'),
        "rentedTo": new Date('2000-01-01'),
        //extra stuff
        "plateNumber": "abc123",
        "rented": true,
        rentHistory: [{
                "dateFrom": new Date('2000-01-01'),
                "dateTo": new Date('2000-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
            {
                "dateFrom": new Date('2001-01-01'),
                "dateTo": new Date('2001-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
        ]
    },
    {
        "id": 5,
        "manufacturer": "BMW",
        "model": "Yaris",
        "manufacturingYear": new Date('2000-01-01'),
        "capacity": 5,
        "dayPrice": 6,
        "rentedFrom": new Date('2000-01-01'),
        "rentedTo": new Date('2000-01-01'),
        //extra stuff
        "plateNumber": "abc123",
        "rented": true,
        rentHistory: [{
                "dateFrom": new Date('2000-01-01'),
                "dateTo": new Date('2000-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
            {
                "dateFrom": new Date('2001-01-01'),
                "dateTo": new Date('2001-01-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
        ]
    },

]
console.log(car)




function generateList() {
    console.log('hello')
 
    //pasiimti is backo (koks jis bus?) ir sumesti i lentete
    let tbody = document.getElementById("tableBody");

    let tr
    for (let i = 0; i < car.length; i++) {

        if (car[i].rented == true) {
            tr = "<tr class='rented'>";
        } else {
            tr = "<tr>";
        }
        tr += "<td><input type='checkbox'></td>";
        tr += " <td>" + car[i].manufacturer + "</td>";
        tr += "  <td>" + car[i].model + "</td>";
        tr += " <td>" + car[i].plateNumber + "</td>";
        tr += " <td>" + car[i].dayPrice + "</td>";
        if (car[i].rented == true) {
            tr += "  <td>yes</td>"
        } else {
            tr += "  <td>no</td>"
        }

        tr += " <td><button data-target='#demo" + i + "' class='accordion-toggle' data-toggle='collapse'>details</button></td>";
        tr += "</tr>";
        tr += "  </tr>"
        tr += "  <tr class='p'>"
        tr += "  <td colspan='9' class='hiddenRow'>"
        tr += " <div class='accordian-body collapse details-on-car' id='demo" + i + "'>"
        tr += " <div class='detail-buttons'>"
        tr += "<button>Edit </button>"
        tr += "<button>History </button>"
        tr += " <div class='panels'>"
        tr += "<div class='left row-panel'>"
        tr += "<p>Manufacturing Year</p>"
        tr += "<p>Number of seats</p>"
        tr += "</div>"
        tr += "<div class='right row-panel'>"
        tr += "<p>Rented Date From</th>"
        tr += "<p>Rented Date To</p>"
        tr += "<p>Days left on lease</p>"
        tr += "</div>"
        tr += "</div>"
        tr += "<div class='button-panels-bottom panels'>"

        tr += "<div class='left-bottom-row-panel'>"
        tr += "<button>Delete </button>"
        tr += "</div>"
        tr += "<div class='right-bottom-row-panel'>"
        tr += "<button>Rent/Return </button>"
        tr += "</div>"
        tr += " </div>"
        tr += " </div>"
        tr += " </td>"
        tr += " </tr>"




        tbody.innerHTML += tr;
    }
}
// on page load?
generateList();




function addNewCar() {
    //ideto i cars nauja iraso bloka ir pasiusti i backa issaugoti, bet koks backas?
    //unique id: number bigger than the last, check for dublicates.
    let tbody = document.getElementById("tableBody");

    //gather info with modal probably

    
    let tr = "<tr>";
    tr += "<td><input type='checkbox'></td>";
    tr += " <td>" + data.manufacturer + "</td>";
    tr += "  <td>" + data.model + "</td>";
    tr += " <td>" + data.plateNumber + "</td>";
    tr += " <td>" + data.dayPrice + "</td>";
    tr += "  <td>no</td>"
    tr += " <td><button data-target='#demo" + i + "' class='accordion-toggle' data-toggle='collapse'>details</button></td>";
    tr += "</tr>";
    tr += "  </tr>"
    tr += "  <tr class='p'>"
    tr += "  <td colspan='9' class='hiddenRow'>"
    tr += " <div class='accordian-body collapse details-on-car' id='demo" + data.id + "'>"
    tr += " <div class='detail-buttons'>"
    tr += "<button>Edit </button>"
    tr += "<button>History </button>"
    tr += " <div class='panels'>"
    tr += "<div class='left row-panel'>"
    tr += "<p>Manufacturing Year</p>"
    tr += "<p>Number of seats</p>"
    tr += "</div>"
    tr += "<div class='right row-panel'>"
    tr += "<p>Rented Date From</th>"
    tr += "<p>Rented Date To</p>"
    tr += "<p>Days left on lease</p>"
    tr += "</div>"
    tr += "</div>"
    tr += "<div class='button-panels-bottom panels'>"
    tr += "<div class='left-bottom-row-panel'>"
    tr += "<button>Delete </button>"
    tr += "</div>"
    tr += "<div class='right-bottom-row-panel'>"
    tr += "<button>Rent/Return </button>"
    tr += "</div>"
    tr += " </div>"
    tr += " </div>"
    tr += " </td>"
    tr += " </tr>"

    tbody.innerHTML += tr;

}

function editCar() {
    // new page? or just a modal?

}

function editCarState() {
    // and make it visible that is rented or not
}

function addToHistory(params) {
    // add to specific part of arrObj a history block.
}

function showHistory(params) {
    // call a modal? open in new window?
}

// extra function not included in the task
function deleteCar() {
    // delete from arrObj a specific object
}

function massDelete(params) {

}
//duplicate alert?