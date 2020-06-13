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
}

alert("¡Bienvenido! Primero queremos conocerte...");

var inputFirstName = prompt("¿Cuál es tu nombre?");
var inputLastName = prompt("¿Cuál es tu apellido?");
var inputMail = prompt("¿Cuál es tu correo electrónico?");

alert("Hola " + inputFirstName + "! ¿A dónde te vas a mudar hoy? Primero ingresa los datos de origen de la mudanza. ¿Cuál es la dirección de origen?");

var checkInData = [];
var checkOutData = [];

var inputCheckInStreet = prompt("¿Cuál es la calle o avenida de origen?");
var inputCheckInNumber = prompt("¿Cuál es el número de origen?");
var inputCheckInFloor = prompt("¿Cuál es el piso y/o departamento de origen?");
var inputCheckInPostalCode = prompt("¿Cuál es el código postal de origen?");
var selectCheckInLocation = prompt("¿Cuál es la localidad de origen?");
var selectCheckInProvince = prompt("¿Cuál es la provincia de origen?");
var inputCheckInDate = prompt("¿Cuál es la fecha de origen?");
var inputCheckInTime = prompt("¿Cuál es la hora de origen?");

alert("¡Muy bien " + inputFirstName + "! Ahora debes ingresar los datos de destino de la mudanza. ¿Cuál es la dirección de destino?");

var inputCheckOutStreet = prompt("¿Cuál es la calle o avenida de destino?");
var inputCheckOutNumber = prompt("¿Cuál es el número de destino?");
var inputCheckOutFloor = prompt("¿Cuál es el piso y/o departamento de destino?");
var inputCheckOutPostalCode = prompt("¿Cuál es el código postal de destino?");
var selectCheckOutLocation = prompt("¿Cuál es la localidad de destino?");
var selectCheckOutProvince = prompt("¿Cuál es la provincia de destino?");
var inputCheckOutDate = prompt("¿Cuál es la fecha de destino?");
var inputCheckOutTime = prompt("¿Cuál es la hora de destino?");

alert("¡Excelente! ya falta poco...");

var selectTruckType = prompt("¿Qué tipo de camión necesitas? (Chico o Grande o Extra Grande)");

alert("¡Último paso " + inputFirstName + "!");

var selectServiceType = prompt("¿Qué servicio adicional necesitas? (Empaque o Desempaque o Ambos o Ninguno)");

checkInData.push(inputCheckInStreet, inputCheckInNumber, inputCheckInFloor, inputCheckInPostalCode, selectCheckInLocation, inputCheckInDate, inputCheckInTime);
checkOutData.push(inputCheckOutStreet, inputCheckOutNumber, inputCheckOutFloor, inputCheckOutPostalCode, selectCheckOutLocation, inputCheckOutDate, inputCheckOutTime);

console.log("Datos del Origen: " + checkInData + "; Datos del Destino: " + checkOutData + "; Tipo de Camión: " + selectTruckType + "; Servicios Adicionales: " + selectServiceType);

var concatArray = (checkInData,checkOutData) => {
   let order = checkInData.concat(checkOutData, selectTruckType, selectServiceType, inputFirstName);
   return order;
}

var order = concatArray(checkInData,checkOutData);

console.log(order);

alert(`¡${order[16]} confirmá que los datos esten bien! ORIGEN == Dirección: ${order[0]} ${order[1]} ${order[2]} ${order[3]} ${order[4]}, Fecha: ${order[5]} ${order[6]}, DESTINO == Dirección: ${order[7]} ${order[8]} ${order[9]} ${order[10]} ${order[11]}, Fecha: ${order[12]} ${order[13]}, Camión: ${order[14]}, Servicio Adicional: ${order[15]}`);

var successfullyCompleted = prompt("¿Aceptas el presupuesto? (1:Sí o 2:No)");

var yes = 1;
var no = 2;

var convertNumber = Number(successfullyCompleted);

if(successfullyCompleted == 1) {
   alert("¡Felicitaciones " + inputFirstName + "! Tu mudanza ha sido confirmada.");
} else if(successfullyCompleted == 2) {
   alert("¡No hay problema " + inputFirstName + "! Volve a intentar más tarde.");
} else {
   prompt(inputFirstName + " intentá ingresando 1 para Sí o 2 para No.");
}

console.log(successfullyCompleted);

// No se como hacer para presupuestar.
// // precio total de los productos de la mudanza
// function ShoppingCart() {
//     var listShoppingCart = [];
//     this.total = function () {
//         var total = 0;
//         listShoppingCart.forEach(function (currentProduct) {
//             total = currentProduct.price * currentProduct.quantity + total;
//         })
//         return total;
//     }
// }
// var myShoppingCart = new ShoppingCart();
// // obtengo la suma de los precios de los elementos de la mudanza y la muestro por consola
// var priceBudget = myShoppingCart.total();
// console.log(`Total: ${priceBudget}`);