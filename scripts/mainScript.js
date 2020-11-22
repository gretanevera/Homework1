let car = [{
        "id": 1,
        "manufacturer": "Toyota",
        "model": "Yaris",
        "manufacturingYear": 2000,
        "capacity": 5,
        "dayPrice": 6,
        "plateNumber": "abc123",
        "rented": true,
        rentHistory: [{
                "dateFrom": new Date('2020-10-25'),
                "dateTo": new Date('2020-11-25'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 5,
            },
            {
                "dateFrom": new Date('2001-02-01'),
                "dateTo": new Date('2001-03-01'),
                "daysRented": 6,
                "milesDriven": 6,
                "dayPrice": 6,
            },
        ]
    },
    {
        "id": 2,
        "manufacturer": "BMW",
        "model": "x5",
        "manufacturingYear": 2020,
        "capacity": 5,
        "dayPrice": 26,
        "plateNumber": "C00L",
        "rented": false,
        rentHistory: [{
                "dateFrom": new Date('2020-01-13'),
                "dateTo": new Date('2020-02-01'),
                "daysRented": 5,
                "milesDriven": 5,
                "dayPrice": 35,
            },
            {
                "dateFrom": new Date('2001-02-01'),
                "dateTo": new Date('2001-03-01'),
                "daysRented": 6,
                "milesDriven": 6,
                "dayPrice": 6,
            },
        ]
    },


]
let uniqueId = 5;

function generateList(list) {
    let tbody = document.getElementById("tableBody");

    let tr
    for (let i = 0; i < list.length; i++) {

        if (list[i].rented == true) {
            tr = "<tr id='" + list[i].id + "' class='rented'>";
        } else {
            tr = "<tr id='" + list[i].id + "' class='not-rented'>";
        }

        tr += " <td>" + list[i].manufacturer + "</td>";
        tr += "  <td>" + list[i].model + "</td>";
        tr += " <td>" + list[i].plateNumber + "</td>";
        tr += " <td>" + list[i].dayPrice + "</td>";
        tr += " <td><button data-target='#demo" + i + "' class='accordion-toggle' data-toggle='collapse'>details</button></td>";
        tr += "</tr>";
        tr += "  </tr>"
        tr += "  <tr class='hidde-table'>"
        tr += "  <td colspan='6' class='hiddenRow'>"
        tr += " <div class='accordian-body collapse details-on-car' id='demo" + i + "'>"
        tr += " <div class='detail-buttons'>"
        tr += "<button onclick='generateEditForm(" + i + ")' class='edit-btn'>Edit </button>"
        tr += "<button class='history-btn' onclick='generateHistory(" + i + ") '>History</button>"
        tr += " <div class='panels'>"
        tr += "<div class='left row-panel'>"
        tr += " <table><tr><th>Manufacturing Year:</th><td>" + list[i].manufacturingYear + " </td></tr>"
        tr += "<tr><th>Seats:</th><td>" + list[i].capacity + " </td></tr>"
        tr += "<tr><th>Price for a day:</th><td>" + list[i].dayPrice + "$ </td></tr>"
        tr += "<tr><th>Number of seats:</th><td>" + list[i].capacity + "</td></tr></table></div>"
        tr += "<div class='right row-panel'>"

        if ((list[i].rentHistory[0] != null || undefined) && list[i].rented == true) {

            let daysLeft = (list[i].rentHistory[0].dateTo.getTime() - new Date().getTime())
            let daysLeftOnLease = Math.floor(daysLeft / (24 * 60 * 60 * 1000))

            tr += "<table><tr><th>Rented?</th> <td> Yes </td> </tr><tr><th>Rented Date From</th><td>" + list[i].rentHistory[0].dateFrom.getFullYear() + "-" + (list[i].rentHistory[0].dateFrom.getMonth() + 1) + "-" + (list[i].rentHistory[0].dateFrom.getDate()) + " </td></tr>"
            tr += "<tr><th>Rented Date to</th><td>" + list[i].rentHistory[0].dateTo.getFullYear() + "-" + (list[i].rentHistory[0].dateTo.getMonth() + 1) + "-" + (list[i].rentHistory[0].dateTo.getDate()) + " </td></tr>"
            tr += "<tr><th>Days untill return:</th> <td> " + daysLeftOnLease + " </td> </tr>"
            tr += "</table>"
        }

        tr += "</div>"
        tr += "</div>"
        tr += "<div class='button-panels-bottom panels'>"
        tr += "<div class='left-bottom-row-panel'>"
        tr += "<button class='delete-btn' onClick='deleteCar(" + i + ")'>Delete </button>"
        tr += "</div>"
        tr += "<div class='right-bottom-row-panel'>"
        tr += "<button class='rent-btn' onclick='rentUnrentCar(" + list[i].id + ")'>Rent/Return </button>"
        tr += "</div>"
        tr += " </div>"
        tr += " </div>"
        tr += " </td>"
        tr += " </tr>"




        tbody.innerHTML += tr;
    }
}

generateList(car);

function deleteList() {
    let tableBody = document.getElementById('tableBody');
    while (tableBody.firstChild) {
        tableBody.firstChild.remove()
    }
}

function addNewCar() {
    let carMaker = document.getElementById("car-maker").value;
    let carModel = document.getElementById("car-model").value
    let carPlate = document.getElementById("car-plate").value
    let carPrice = document.getElementById("price-per-day").value
    let carYear = document.getElementById("manuf-year").value
    let carSeats = document.getElementById("seat-number").value

    if (carMaker && carModel && carPlate && carPrice && carYear && carSeats != (null || undefined || "")) {
        let carId = uniqueId + 1;
        let newCar = {
            "id": carId,
            "manufacturer": carMaker,
            "model": carModel,
            "manufacturingYear": carYear,
            "capacity": carSeats,
            "dayPrice": carPrice,
            "plateNumber": carPlate,
            "rented": false,
            rentHistory: []
        };
        uniqueId = carId;
        car.push(newCar);
        //clear all the inputs 
        resetInputs('new-car-inputs', 6)
        //turn off modal
        deleteList()
        generateList(car)
        closeModal(newCarModal)

    } else {
        alert("Please fill in all the fields!")
    }




}

function editCar() {
    let target = document.getElementById("edit-car-submit").className
    let carIndex = target.replace(/\D/g, '')
    let carMkr = document.getElementById('edit-car-maker').value
    let carMdl = document.getElementById('edit-car-model').value
    let carPlate = document.getElementById('edit-car-plate').value
    let carPrice = document.getElementById('edit-price-per-day').value
    let carMnfYear = document.getElementById('edit-manuf-year').value
    let carSeats = document.getElementById('edit-seat-number').value
    let lastRentFrom = document.getElementById('edit-rent-from').valueAsDate
    let lastRentto = document.getElementById('edit-rent-to').valueAsDate

    if (carMkr && carMdl && carPlate && carPrice && carMnfYear && carSeats && lastRentFrom && lastRentto != (null || undefined || "")) {

        if (carMkr !== car[carIndex].manufacturer) {

            car[carIndex].manufacturer = carMkr;

        } else {}

        if (carMdl !== car[carIndex].model) {
            car[carIndex].model = carMdl;
        } else {}

        if (carPlate !== car[carIndex].plateNumber) {
            car[carIndex].plateNumber = carPlate;
        } else {}

        if (carPrice != car[carIndex].dayPrice) {
            car[carIndex].dayPrice = carPrice;
        } else {}

        if (carMnfYear != car[carIndex].manufacturingYear) {
            car[carIndex].manufacturingYear = carMnfYear;
        } else {}

        if (carSeats != car[carIndex].capacity) {
            car[carIndex].capacity = carSeats;
        } else {}
        if (car[carIndex].rentHistory[0] != undefined || null) {

            if (lastRentFrom.getTime() != car[carIndex].rentHistory[0].dateFrom.getTime()) {
                car[carIndex].rentHistory[0].dateFrom = lastRentFrom;
            } else {}
            if (lastRentto.getTime() != car[carIndex].rentHistory[0].dateTo.getTime()) {
                car[carIndex].rentHistory[0].dateTo = lastRentto;
            } else {}

        }
        resetInputs('edit-car-inputs', 6)
        deleteList();
        generateList(car); {
            document.getElementById('edit-rent-from').style.display = "block"
            document.getElementById('edit-rent-to').style.display = "block"
        }
        closeModal(editCarModal)
    } else {
        alert("Please fill in all the fields!")
    }

}

function rentUnrentCar(carId) {
    let targetCar = car.findIndex(({
        id
    }) => id == carId)

    if (car[targetCar].rented == true) {
        let confirmedUnrent = confirm("Are you sure you want to finish this rent period?");
        if (confirmedUnrent == true) {
            generateEndRent(targetCar)
            callModal(rentCarFinish)
        }
    } else {
        callRentModal(targetCar)
    }
}

function generateEndRent(target) {
    let endDate = car[target].rentHistory[0].dateTo
    document.getElementById("end-rent-to").valueAsDate = endDate
    document.getElementById('end-rent-button').className = target + "end"
}

function generateRentForm(carIndex) {
    let carManuf = car[carIndex].manufacturer
    let carModel = car[carIndex].model
    let carPlate = car[carIndex].plateNumber
    let carId = car[carIndex].id
    document.getElementById('manuf-span').innerHTML = carManuf;
    document.getElementById('model-span').innerHTML = carModel;
    document.getElementById('car-plate-span').innerHTML = carPlate;
    document.getElementById('manuf-span').className = ("car" + carId);
    document.getElementById('start-rent-price').value = car[carIndex].dayPrice

}

function startCarRent() {
    let from = document.getElementById("start-rent-from").value;
    let to = document.getElementById("start-rent-to").value;
    let carId = document.getElementById("manuf-span").className
    let dayPrice = document.getElementById("start-rent-price").value
    let days = document.getElementById('start-rent-total-days').value
    carId = carId.replace(/\D/g, '')
    let targetCar = car.findIndex(({
        id
    }) => id == carId)



    //check for empty
    if (from && to && dayPrice && days != (null || undefined || "")) {


        document.getElementById(carId).className = "rented"
        document.getElementById("manuf-span").className = ""
        car[targetCar].rented = true
        addToHistory(targetCar, from, to, dayPrice, days)
        //reset fields
        resetInputs("start-rent-inputs", 6)
        //close modal
        deleteList()
        generateList(car)
        closeModal(rentCarModal)

    } else {
        alert("Please fill all the fields")
    }


}

function fixRentPrice() {

    let newRentStart = document.getElementById("start-rent-from").valueAsDate
    let newRentTo = document.getElementById("start-rent-to").valueAsDate
    let rentPricePerDay = parseInt(document.getElementById("start-rent-price").value)
    let rentedMs
    let rentedDays
    let rentTotal
    let rentTotalWithVat
    if ((newRentStart != null) && (newRentTo != null)) {
        rentedMs = newRentTo.getTime() - newRentStart.getTime()
        rentedDays = Math.floor(rentedMs / (24 * 60 * 60 * 1000))
        rentTotal = parseInt(rentedDays) * parseInt(rentPricePerDay)
        rentTotalWithVat = parseInt(rentTotal) + (parseInt(rentTotal) * 0.21)
        document.getElementById("start-rent-total").value = rentTotal
        document.getElementById("start-rent-total-vat").value = rentTotalWithVat
        document.getElementById('start-rent-total-days').value = rentedDays
    }
}

function resetInputs(targetClass, resets) {
    for (i = 0; i < resets; i++) {
        if (document.getElementsByClassName(targetClass)[i].value != null || undefined) {
            document.getElementsByClassName(targetClass)[i].value = null;
        } else {

        }
    }
}

function addToHistory(target, from, to, price, days) {
    // add to specific part of arrObj a history block.
    let newHistory = {
        "dateFrom": new Date(from),
        "dateTo": new Date(to),
        "daysRented": days,
        "milesDriven": "",
        "dayPrice": price,
    }
    car[target].rentHistory.unshift(newHistory)
}

function finishRentHistory() {
    //miles and rent end
    let target = document.getElementById("end-rent-button").className
    let carIndex = target.replace(/\D/g, '')
    let endDate = document.getElementById("end-rent-to").valueAsDate
    let miles = document.getElementById('end-rent-miles').value


    if (endDate && miles != (null || undefined || "")) {
        car[carIndex].rentHistory[0].milesDriven = miles
        car[carIndex].rented = false
        document.getElementById(car[carIndex].id).className = "not-rented"

        if (endDate.getTime() != car[carIndex].rentHistory[0].dateTo.getTime()) {
            car[carIndex].rentHistory[0].dateTo = endDate
        }
        //reset fields
        resetInputs('end-car-rent', 2)
        //close modal
        deleteList();
        generateList(car);
        closeModal(rentCarFinish)


    } else {
        alert("Please fill in all the fields!")
    }

}

function generateEditForm(carIndex) {
    //generate info
    document.getElementById('edit-car-maker').value = car[carIndex].manufacturer
    document.getElementById('edit-car-submit').className = "edit" + carIndex
    document.getElementById('edit-car-model').value = car[carIndex].model
    document.getElementById('edit-manuf-year').value = car[carIndex].manufacturingYear
    document.getElementById('edit-seat-number').value = car[carIndex].capacity
    document.getElementById('edit-price-per-day').value = car[carIndex].dayPrice
    document.getElementById('edit-car-plate').value = car[carIndex].plateNumber
    //Change this rent time?
    if (car[carIndex].rentHistory[0] != undefined || null) {
        document.getElementById('edit-rent-from').valueAsDate = car[carIndex].rentHistory[0].dateFrom
        document.getElementById('edit-rent-to').valueAsDate = car[carIndex].rentHistory[0].dateTo
    } else {
        document.getElementById('edit-rent-from').style.display = "none"
        document.getElementById('edit-rent-to').style.display = "none"
    }


    //call modal
    callModal(editCarModal)
}

function generateHistory(carIndex) {
    let table = document.getElementById("history-table")

    for (let i = 0; i < car[carIndex].rentHistory.length; i++) {

        let tr = "<tr>"
        tr += "<th>Rent date - From:</th>"
        tr += "<td>  " + car[carIndex].rentHistory[i].dateFrom.getFullYear() + "-" + (car[carIndex].rentHistory[i].dateFrom.getMonth() + 1) + "-" + (car[carIndex].rentHistory[i].dateFrom.getDate()) + " </td>"
        tr += "</tr>"
        tr += "<tr>"
        tr += "<th>Rent date - To:</th>"
        tr += "<td>" + car[carIndex].rentHistory[i].dateTo.getFullYear() + "-" + (car[carIndex].rentHistory[i].dateTo.getMonth() + 1) + "-" + (car[carIndex].rentHistory[i].dateTo.getDate()) + "</td>"
        tr += "</tr>"
        tr += "<tr>"
        //count days
        let totalDays = (car[carIndex].rentHistory[i].dateTo.getTime() - car[carIndex].rentHistory[i].dateFrom.getTime())
        let totalDaysNum = Math.floor(totalDays / (24 * 60 * 60 * 1000))
        tr += "<th>Total days rented:</th>"
        tr += "<td>" + totalDaysNum + "</td>"
        tr += "</tr>"
        tr += "<tr>"
        tr += "<th>Miles:</th>"
        tr += "<td> " + car[carIndex].rentHistory[i].milesDriven + "</td>"
        tr += "</tr>"
        tr += "<tr>"
        tr += "<th>Preice per day:</th>"
        tr += "<td>" + car[carIndex].rentHistory[i].dayPrice + " </td>"
        tr += "</tr>"
        tr += "<tr>"

        //count total
        let total = parseInt(car[carIndex].rentHistory[i].dayPrice) * totalDaysNum
        tr += "<th>Total:</th>"
        tr += "<td>" + total + "</td>"
        tr += "</tr>"
        tr += "<tr>"

        //count total With wat
        let totalVat = total + (total * 0.21)
        tr += "<th>Total+VAT:</th>"
        tr += "<td>" + totalVat + "</td>"
        tr += "</tr>"

        tr += "<tr>"
        tr += "<th colspan = '2'><hr></th>"
        tr += "</tr>"
        table.innerHTML += tr
    }


    //show modal
    callModal(historyCarModal);
}

function deleteGeneratedHistory() {
    //remove everything from table
    let table = document.getElementById("history-table");

    table.innerHTML = ''
    //close modal

    closeModal(historyCarModal)
}


function deleteCar(target) {
    let confirmDelete = confirm("Are you sure you want to delete this car?");
    if (confirmDelete == true) {
        car.splice(target, 1);
        deleteList()
        generateList(car)
    }

}