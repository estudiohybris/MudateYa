// [] Array
// {} Objeto

// Precios Provincias
var amountProvinceCABA = 500;
var amountProvinceBS = 500;
var amountProvinceSF = 2500;

// Precios Tipo de Camión
var amountTruckSM = 100;
var amountTruckMD = 200;
var amountTruckXL = 300;

// Precios Tipo de Servicio
var amountServiceEmpaque = 50;
var amountServiceDesempaque = 50;
var amountServiceAmbos = 100;

// Precio Total
var totalPrice;

// Objeto Completo
var totalData = {};

// Steps
var showing = [1, 0, 0, 0, 0, 0, 0];
var steps = ['step0', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6'];

function next() {

    var qElems = [];

    for (var i = 0; i < steps.length; i++) {
        qElems.push(document.getElementById(steps[i]));
    }

    for (var i = 0; i < showing.length; i++) {
        if (showing[i] == 1) {
            qElems[i].style.display = 'none';
            showing[i] = 0;
            if (i == showing.length - 1) {
                qElems[0].style.display = 'block';
                showing[0] = 1;
            } else {
                qElems[i + 1].style.display = 'block';
                showing[i + 1] = 1;
            }
            break;
        }
    }

    // Step0
    totalData.FirstName = document.getElementById("inputFirstName").value;
    totalData.LastName = document.getElementById("inputLastName").value;
    totalData.Mail = document.getElementById("inputMail").value;

    // console.log(totalData);

    let elementsUserName = document.querySelectorAll(".userName");
    console.log(elementsUserName);
    elementsUserName.forEach(x => {
        x.innerHTML = totalData.FirstName;
    });

    // var list = document.querySelectorAll('.userName');
    // for (var n = 0; n < list.length; ++n) {
    //     list[n].innerHTML = totalData.FirstName;
    //     console.log(list[n]);
    // }

    // Step1
    totalData.CheckInStreet = document.getElementById("inputCheckInStreet").value;
    totalData.CheckInNumber = document.getElementById("inputCheckInNumber").value;
    totalData.CheckInFloor = document.getElementById("inputCheckInFloor").value;
    totalData.CheckInPostalCode = document.getElementById("inputCheckInPostalCode").value;
    totalData.CheckInLocation = document.getElementById("selectCheckInLocation").value;
    totalData.CheckInProvince = document.getElementById("selectCheckInProvince").value;

    // console.log(totalData.CheckInProvince);

    let elementsCheckInAddress = document.querySelectorAll(".checkInAddress");
    // console.log(elementsCheckInAddress);
    elementsCheckInAddress.forEach(x => {
        x.innerHTML = totalData.CheckInStreet.concat(totalData.CheckInNumber,totalData.CheckInFloor);
    });

    if(totalData.CheckInProvince == 1) {
        totalPrice = amountProvinceCABA;
    } else if(totalData.CheckInProvince == 2) {
        totalPrice = amountProvinceCABA;
    } else if(totalData.CheckInProvince == 3) {
        totalPrice = amountProvinceSF;
    }

    // console.log(totalPrice);

    // Step2
    totalData.CheckInDate = document.getElementById("inputCheckInDate").value;
    totalData.CheckInTime = document.getElementById("inputCheckInTime").value;

    let elementsCheckInDate = document.querySelectorAll(".checkInDate");
    // console.log(elementsCheckInDate);
    elementsCheckInDate.forEach(x => {
        x.innerHTML = totalData.CheckInDate.concat(totalData.CheckInTime);
    });

    // console.log(totalData);

    // Step3
    totalData.CheckOutStreet = document.getElementById("inputCheckOutStreet").value;
    totalData.CheckOutNumber = document.getElementById("inputCheckOutNumber").value;
    totalData.CheckOutFloor = document.getElementById("inputCheckOutFloor").value;
    totalData.CheckOutPostalCode = document.getElementById("inputCheckOutPostalCode").value;
    totalData.CheckOutLocation = document.getElementById("selectCheckOutLocation").value;
    totalData.CheckOutProvince = document.getElementById("selectCheckOutProvince").value;

    // console.log(totalData.CheckOutProvince);

    let elementsCheckOutAddress = document.querySelectorAll(".checkOutAddress");
    // console.log(elementsCheckOutAddress);
    elementsCheckOutAddress.forEach(x => {
        x.innerHTML = totalData.CheckOutStreet.concat(totalData.CheckOutNumber,totalData.CheckOutFloor);
    });

    if(totalData.CheckOutProvince == 1) {
        totalPrice = totalPrice + amountProvinceCABA;
    } else if(totalData.CheckOutProvince == 2) {
        totalPrice = totalPrice + amountProvinceCABA;
    } else if(totalData.CheckOutProvince == 3) {
        totalPrice = totalPrice + amountProvinceSF;
    }

    // console.log(totalPrice);

    // Step4
    totalData.CheckOutDate = document.getElementById("inputCheckOutDate").value;
    totalData.CheckOutTime = document.getElementById("inputCheckOutTime").value;

    let elementsCheckOutDate = document.querySelectorAll(".checkOutDate");
    // console.log(elementsCheckOutDate);
    elementsCheckOutDate.forEach(x => {
        x.innerHTML = totalData.CheckOutDate.concat(totalData.CheckOutTime);
    });

    // console.log(totalData);

    // Step5
    totalData.TruckType = 1;

    let elementsTruckType = document.querySelectorAll(".truckType");
    // console.log(elementsTruckType);
    elementsTruckType.forEach(x => {
        x.innerHTML = totalData.TruckType;
    });

    if(totalData.TruckType == 1) {
        totalPrice = totalPrice + amountTruckSM;
    } else if(totalData.TruckType == 2) {
        totalPrice = totalPrice + amountTruckMD;
    } else if(totalData.TruckType == 3) {
        totalPrice = totalPrice + amountTruckXL;
    }

    // console.log(totalPrice);

    // Step6
    totalData.ServiceType = 1;

    let elementsServiceType = document.querySelectorAll(".serviceType");
    // console.log(elementsServiceType);
    elementsServiceType.forEach(x => {
        x.innerHTML = totalData.ServiceType;
    });

    if(totalData.ServiceType == 1) {
        totalPrice = totalPrice + amountServiceEmpaque;
    } else if(totalData.ServiceType == 2) {
        totalPrice = totalPrice + amountServiceDesempaque;
    } else if(totalData.ServiceType == 3) {
        totalPrice = totalPrice + amountServiceAmbos;
    } else if(totalData.ServiceType == 4) {
        totalPrice;
    } 

    // console.log(totalPrice);

    // Monto Total
    let elementsPrice = document.getElementById("totalPrice");
    elementsPrice.innerHTML = totalPrice;

}