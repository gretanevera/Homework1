let modal = document.getElementsByClassName("modal")
let newCarModal = document.getElementById("newCar")
let editCarModal = document.getElementById("editCar")
let historyCarModal = document.getElementById("carHistory")
let rentCarModal = document.getElementById("carRent")
let rentCarFinish = document.getElementById("carRentFinish")


function callModal(target) {

  if (target == newCarModal) {
    newCarModal.style.display = "block"
  } else if (target == editCarModal) {
    editCarModal.style.display = "block"
  } else if (target == historyCarModal) {
    historyCarModal.style.display = "block"
  } else if (target == rentCarModal) {
    rentCarModal.style.display = "block"
  } else if (target == rentCarFinish) {
    rentCarFinish.style.display = "block"
  }
}

function callRentModal(params) {
  console.log("call rent" + params)
  generateRentForm(params)
  callModal(rentCarModal)

}

function closeModal(target) {
  target.style.display = "none";

}