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

// issaugoti local storage?
// is kur bus paimamas sarasas
// gal geriau issaugoti kur nors, kad neistrintu su cookies
// mass delete?
// how add new works? new window or just a modal pop up? new window is tiring. refreshes will cause trouble(Shouldnt as data is being saved and is not static)?
// it would work nicer with react
// plan: build one vanilla and then if has time build one on react. double the fun.

var cars = [{
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
        rentHistory: [{
            "dateFrom": new Date('2000-01-01'),
            "dateTo": new Date('2000-01-01'),
            "daysRented": 5,
            "milesDriven": 5,
            "dayPrice": 5,

        }]
    },



]
console.log(cars)

function generateList() {
    //very much generate
    //pasiimti is backo (koks jis bus?) ir sumesti i lentete
}

function addNewCar() {
    //ideto i cars nauja iraso bloka ir pasiusti i backa issaugoti, bet koks backas?
    //unique id: number bigger than the last, check for dublicates.


}

function editCar() {
// new page? or just a modal?

}

function editCarState() {
    // and make it visible that is rented or not
}

function history(params) {

}


// extra function not included in the task
function deleteCar() {

}
//duplicate alert?