// [] Array
// {} Objeto

// VARIABLES -------------
// Variables que almacenan el los Precios
var amountCheckInProvince;
var amountCheckOutProvince;
var amountTruckType;
var amountServiceType;

// Variable que almacena el OBJETO Completo para resumen
var totalData = {};

// Variables que almacenan el Precio de cada Provincia
var amountProvinceMI = 4000;
var amountProvinceSL = 3900;
var amountProvinceSJ = 3800;
var amountProvinceER = 3700;
var amountProvinceSC = 3600;
var amountProvinceRN = 3500;
var amountProvinceCH = 3400;
var amountProvinceCB = 3300;
var amountProvinceME = 3200;
var amountProvinceLR = 3100;
var amountProvinceCA = 3000;
var amountProvinceLP = 2900;
var amountProvinceSE = 2800;
var amountProvinceCO = 2700;
var amountProvinceSF = 2600;
var amountProvinceTU = 2500;
var amountProvinceNE = 2400;
var amountProvinceSA = 2300;
var amountProvinceCC = 2200;
var amountProvinceFO = 2100;
var amountProvinceJU = 2000;
var amountProvinceCF = 0;
var amountProvinceBS = 500;
var amountProvinceTF = 5000;

// Variables que almacenan el Precio de cada Tipo de Camión
var amountTruckSM = 100;
var amountTruckMD = 200;
var amountTruckXL = 300;

// Variables que almacenan el Precio de cada Tipo de Servicio
var amountServiceNull = 0;
var amountServicePacking = 500;
var amountServiceUnpacking = 500;
var amountServiceDuo = 1000;

// FUNCIONES -------------
// Funciones que se conectan con la API de provincias y municipios
function searchProvince() {
    var url = `https://apis.datos.gob.ar/georef/api/provincias`;
    $.ajax({
        method: "GET",
        url: url,
    }).done(function (data) {
        // console.log(data);
        renderProvince(data.provincias);
    }).fail(function (error) {
        console.log(error)
    });
}

function getOptionProvince(province) {
    return `
        <option value="${province.id}">${province.nombre}</option>
    `;
}

function renderProvince(provinces) {
    provinces.forEach(province => {
        $('#selectCheckInProvince').append(getOptionProvince(province));
        $('#selectCheckOutProvince').append(getOptionProvince(province));
    });
}

function searchTown(id) {
    var url = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${id}&campos=id,nombre&max=100`;
    $.ajax({
        method: "GET",
        url: url,
    }).done(function (data) {
        // console.log(data.municipios);
        renderTown(data.municipios);
    }).fail(function (error) {
        console.log(error);
    });
}

function getOptionTown(town) {
    return `
        <option value="${town.id}">${town.nombre}</option>
    `;
}

function renderTown(towns) {
    towns.forEach(town => {
        $('#selectCheckInTown').append(getOptionTown(town));
        $('#selectCheckOutTown').append(getOptionTown(town));
    });
}

function saveCheckInProvince() {
    var saveCheckInProvince = $("#selectCheckInProvince").val();
    searchTown(saveCheckInProvince);
}

function saveCheckOutProvince() {
    var saveCheckOutProvince = $("#selectCheckOutProvince").val();
    searchTown(saveCheckOutProvince);
}

// Función que devuelve el Precio de cada Provincia
function AmountCheckInProvince(totalDataProvince) {
    var totalDataProvince = totalData.CheckInProvince;
    if(totalDataProvince == "54") {
        totalData.amountCheckInProvince = amountProvinceMI;
    } else if(totalDataProvince == "74") {
        totalData.amountCheckInProvince = amountProvinceSL;
    } else if(totalDataProvince == "70") {
        totalData.amountCheckInProvince = amountProvinceSJ;
    } else if(totalDataProvince == "30") {
        totalData.amountCheckInProvince = amountProvinceER;
    } else if(totalDataProvince == "78") {
        totalData.amountCheckInProvince = amountProvinceSC;
    } else if(totalDataProvince == "62") {
        totalData.amountCheckInProvince = amountProvinceRN;
    } else if(totalDataProvince == "26") {
        totalData.amountCheckInProvince = amountProvinceCH;
    } else if(totalDataProvince == "14") {
        totalData.amountCheckInProvince = amountProvinceCB;
    } else if(totalDataProvince == "50") {
        totalData.amountCheckInProvince = amountProvinceME;
    } else if(totalDataProvince == "46") {
        totalData.amountCheckInProvince = amountProvinceLR;
    } else if(totalDataProvince == "10") {
        totalData.amountCheckInProvince = amountProvinceCA;
    } else if(totalDataProvince == "42") {
        totalData.amountCheckInProvince = amountProvinceLP;
    } else if(totalDataProvince == "86") {
        totalData.amountCheckInProvince = amountProvinceSE;
    } else if(totalDataProvince == "18") {
        totalData.amountCheckInProvince = amountProvinceCO;
    } else if(totalDataProvince == "82") {
        totalData.amountCheckInProvince = amountProvinceSF;
    } else if(totalDataProvince == "90") {
        totalData.amountCheckInProvince = amountProvinceTU;
    } else if(totalDataProvince == "58") {
        totalData.amountCheckInProvince = amountProvinceNE;
    } else if(totalDataProvince == "66") {
        totalData.amountCheckInProvince = amountProvinceSA;
    } else if(totalDataProvince == "22") {
        totalData.amountCheckInProvince = amountProvinceCC;
    } else if(totalDataProvince == "34") {
        totalData.amountCheckInProvince = amountProvinceFO;
    } else if(totalDataProvince == "38") {
        totalData.amountCheckInProvince = amountProvinceJU;
    } else if(totalDataProvince == "02") {
        totalData.amountCheckInProvince = amountProvinceCF;
    } else if(totalDataProvince == "06") {
        totalData.amountCheckInProvince = amountProvinceBS;
    } else if(totalDataProvince == "94") {
        totalData.amountCheckInProvince = amountProvinceTF;
    } else {
        console.log('La provincia es inválido. Intenta nuevamente.');
    }
    console.log(totalData.amountCheckInProvince);
}

function AmountCheckOutProvince(totalDataProvince) {
    var totalDataProvince = totalData.CheckOutProvince;
    if(totalDataProvince == "54") {
        totalData.amountCheckOutProvince = amountProvinceMI;
    } else if(totalDataProvince == "74") {
        totalData.amountCheckOutProvince = amountProvinceSL;
    } else if(totalDataProvince == "70") {
        totalData.amountCheckOutProvince = amountProvinceSJ;
    } else if(totalDataProvince == "30") {
        totalData.amountCheckOutProvince = amountProvinceER;
    } else if(totalDataProvince == "78") {
        totalData.amountCheckOutProvince = amountProvinceSC;
    } else if(totalDataProvince == "62") {
        totalData.amountCheckOutProvince = amountProvinceRN;
    } else if(totalDataProvince == "26") {
        totalData.amountCheckOutProvince = amountProvinceCH;
    } else if(totalDataProvince == "14") {
        totalData.amountCheckOutProvince = amountProvinceCB;
    } else if(totalDataProvince == "50") {
        totalData.amountCheckOutProvince = amountProvinceME;
    } else if(totalDataProvince == "46") {
        totalData.amountCheckOutProvince = amountProvinceLR;
    } else if(totalDataProvince == "10") {
        totalData.amountCheckOutProvince = amountProvinceCA;
    } else if(totalDataProvince == "42") {
        totalData.amountCheckOutProvince = amountProvinceLP;
    } else if(totalDataProvince == "86") {
        totalData.amountCheckOutProvince = amountProvinceSE;
    } else if(totalDataProvince == "18") {
        totalData.amountCheckOutProvince = amountProvinceCO;
    } else if(totalDataProvince == "82") {
        totalData.amountCheckOutProvince = amountProvinceSF;
    } else if(totalDataProvince == "90") {
        totalData.amountCheckOutProvince = amountProvinceTU;
    } else if(totalDataProvince == "58") {
        totalData.amountCheckOutProvince = amountProvinceNE;
    } else if(totalDataProvince == "66") {
        totalData.amountCheckOutProvince = amountProvinceSA;
    } else if(totalDataProvince == "22") {
        totalData.amountCheckOutProvince = amountProvinceCC;
    } else if(totalDataProvince == "34") {
        totalData.amountCheckOutProvince = amountProvinceFO;
    } else if(totalDataProvince == "38") {
        totalData.amountCheckOutProvince = amountProvinceJU;
    } else if(totalDataProvince == "02") {
        totalData.amountCheckOutProvince = amountProvinceCF;
    } else if(totalDataProvince == "06") {
        totalData.amountCheckOutProvince = amountProvinceBS;
    } else if(totalDataProvince == "94") {
        totalData.amountCheckOutProvince = amountProvinceTF;
    } else {
        console.log('La provincia es inválido. Intenta nuevamente.');
    }
    console.log(totalData.amountCheckOutProvince);
}

// Función que devuelve el Precio de cada Tipo de camión
function AmountTruckType(totalDataTruckType) {
    var totalDataTruckType = totalData.TruckType;
    if(totalDataTruckType == "Chico") {
        totalData.amountTruckType = amountTruckSM;
    } else if(totalDataTruckType == "Grande") {
        totalData.amountTruckType = amountTruckMD;
    } else if(totalDataTruckType == "Extra Grande") {
        totalData.amountTruckType = amountTruckXL;
    } else {
        console.log('El tipo de camión es inválido. Intenta nuevamente.');
    }
    console.log(totalData.amountTruckType);
}

// Función que devuelve el Precio de cada Tipo de serivico
function AmountServiceType(totalDataServiceType) {
    var totalDataServiceType = totalData.ServiceType;
    if(totalDataServiceType == "Ninguno") {
        totalData.amountServiceType = amountServiceNull;
    } else if(totalDataServiceType == "Empaque") {
        totalData.amountServiceType = amountServicePacking;
    } else if(totalDataServiceType == "Desempaque") {
        totalData.amountServiceType = amountServiceUnpacking;
    } else if(totalDataServiceType == "Ambos") {
        totalData.amountServiceType = amountServiceDuo;
    } else {
        console.log('El tipo de servicio es inválido. Intenta nuevamente.');
    }
    console.log(totalData.amountServiceType);
}

// Ejecución en DOM -------------
$(document).ready(() => {

    $('.userName').addClass('d-none');
    $('#step1Label .d-flex .d-flex').addClass('btn-primary');
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").hide();
    $("#step5").hide();
    $("#step6").hide();
    $("#step7").hide();
    $("#step8").hide();

    // STEP 1 - Datos del usuario
    $("form[name='step1']").validate({
        rules: {
            inputFirstName: {
                required: true
            },
            inputLastName: {
                required: true
            },
            inputMail: {
                required: true,
                email: true
            },
            inputPhone: {
                required: true,
                digits: true,
                minlength: 8,
                maxlength: 10
            }
        },
        messages: {
            inputFirstName: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputLastName: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputMail: {
                required: 'El campo es <strong>requerido</strong>.',
                email: 'El correo electrónico es inválido. Intenta nuevamente.'
            },
            inputMail: {
                required: 'El campo es <strong>requerido</strong>.',
                digits: "El teléfono es inválido. Intenta nuevamente.",
                minlength: "El teléfono debe tener mínimo 8 dígitos",
                maxlength: "El teléfono debe tener mínimo 10 dígitos",
            }
        },
        submitHandler: function(form) {
            totalData.FirstName = $('input[name="inputFirstName"]').val();
            totalData.LastName = $('input[name="inputLastName"]').val();
            totalData.Mail = $('input[name="inputMail"]').val();
            totalData.Phone = $('input[name="inputPhone"]').val();

            $("#step1").slideUp("slow", function() {
                $("#step2").slideDown("slow", function(){
                    $('#step1Label .d-flex .d-flex').removeClass('btn-primary');
                    $('#step1Label .d-flex .d-flex').addClass('btn-light');
                    $('.userName').addClass('d-flex');
                    $('.userName').html($('input[name="inputFirstName"]').val());
                    $('#step2Label .d-flex .d-flex').addClass('btn-primary');
                })
            });
            console.log(totalData);
        }
    });

    // OJO - no se actualizan las localidades
    searchProvince();
    $("#selectCheckInProvince").change(saveCheckInProvince);
    saveCheckInProvince();

    // STEP 2 - Dirección de origen
    $("form[name='step2']").validate({
        rules: {
            selectCheckInProvince: {
                required: true
            },
            selectCheckInTown: {
                required: false
            },
            inputCheckInStreet: {
                required: true
            },
            inputCheckInNumber: {
                required: true
            },
            inputCheckInFloor: {
                required: false
            },
            inputCheckInPostalCode: {
                required: true
            }
        },
        messages: {
            selectCheckInProvince: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputCheckInStreet: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputCheckInNumber: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputCheckInPostalCode: {
                required: 'El campo es <strong>requerido</strong>.'
            }
        },
        submitHandler: function(form) {
            totalData.CheckInProvince = $('select[name="selectCheckInProvince"]').val();
            totalData.CheckInTown = $('select[name="selectCheckInTown"]').val();
            totalData.CheckInStreet = $('input[name="inputCheckInStreet"]').val();
            totalData.CheckInNumber = $('input[name="inputCheckInNumber"]').val();
            totalData.CheckInFloor = $('input[name="inputCheckInFloor"]').val();
            totalData.CheckInPostalCode = $('input[name="inputCheckInPostalCode"]').val();
            $("#step2").slideUp("slow", function() {
                $("#step3").slideDown("slow", function(){
                    $('#step2Label .d-flex .d-flex').removeClass('btn-primary');
                    $('#step2Label .d-flex .d-flex').addClass('btn-light');
                    $('.checkInAddress').html($('input[name="inputCheckInStreet"]').val() + ' ' + $('input[name="inputCheckInNumber"]').val() + ' ' + $('input[name="inputCheckInFloor"]').val());
                    $('#step3Label .d-flex .d-flex').addClass('btn-primary');
                })
            });
            console.log(totalData);
            let idCheckInProvince = totalData.CheckInProvince;
            amountCheckInProvince = AmountCheckInProvince(idCheckInProvince);
        }
    });

    // STEP 3 - Fecha de origen
    $("form[name='step3']").validate({
        rules: {
            inputCheckInDate: {
                required: false
            },
            inputCheckInTime: {
                required: true
            }
        },
        messages: {
            inputCheckInDate: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputCheckInTime: {
                required: 'El campo es <strong>requerido</strong>.'
            }
        },
        submitHandler: function(form) {
            totalData.CheckInDate = $('input[name="inputCheckInDate"]').val();
            totalData.CheckInTime = $('input[name="inputCheckInTime"]').val();
            $("#step3").slideUp("slow", function() {
                $("#step4").slideDown("slow", function(){
                    $('#step3Label .d-flex .d-flex').removeClass('btn-primary');
                    $('#step3Label .d-flex .d-flex').addClass('btn-light');
                    $('.checkInDate').html($('input[name="inputCheckInDate"]').val() + ' ' + $('input[name="inputCheckInTime"]').val());
                    $('#step4Label .d-flex .d-flex').addClass('btn-primary');
                })
            });
            console.log(totalData);
        }
    });

    // OJO - no se actualizan las localidades
    searchProvince();
    $("#selectCheckOutProvince").change(saveCheckOutProvince);
    saveCheckOutProvince();

    // STEP 4 - Dirección de destino
    $("form[name='step4']").validate({
        rules: {
            selectCheckOutProvince: {
                required: true
            },
            selectCheckOutTown: {
                required: false
            },
            inputCheckOutStreet: {
                required: true
            },
            inputCheckOutNumber: {
                required: true
            },
            inputCheckOutFloor: {
                required: false
            },
            inputCheckOutPostalCode: {
                required: true
            }
        },
        messages: {
            selectCheckOutProvince: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputCheckOutStreet: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputCheckOutNumber: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputCheckOutPostalCode: {
                required: 'El campo es <strong>requerido</strong>.'
            }
        },
        submitHandler: function(form) {
            totalData.CheckOutProvince = $('select[name="selectCheckOutProvince"]').val();
            totalData.CheckOutTown = $('select[name="selectCheckOutTown"]').val();
            totalData.CheckOutStreet = $('input[name="inputCheckOutStreet"]').val();
            totalData.CheckOutNumber = $('input[name="inputCheckOutNumber"]').val();
            totalData.CheckOutFloor = $('input[name="inputCheckOutFloor"]').val();
            totalData.CheckOutPostalCode = $('input[name="inputCheckOutPostalCode"]').val();
            $("#step4").slideUp("slow", function() {
                $("#step5").slideDown("slow", function(){
                    $('#step4Label .d-flex .d-flex').removeClass('btn-primary');
                    $('#step4Label .d-flex .d-flex').addClass('btn-light');
                    $('.checkOutAddress').html($('input[name="inputCheckOutStreet"]').val() + ' ' + $('input[name="inputCheckOutNumber"]').val() + ' ' + $('input[name="inputCheckOutFloor"]').val());
                    $('#step5Label .d-flex .d-flex').addClass('btn-primary');
                })
            });
            console.log(totalData);
            let idCheckOutProvince = totalData.CheckOutProvince;
            AmountCheckOutProvince(idCheckOutProvince);
        }
    });

    // STEP 5 - Fecha de destino
    $("form[name='step5']").validate({
        rules: {
            inputCheckOutDate: {
                required: false
            },
            inputCheckOutTime: {
                required: true
            }
        },
        messages: {
            inputCheckOutDate: {
                required: 'El campo es <strong>requerido</strong>.'
            },
            inputCheckOutTime: {
                required: 'El campo es <strong>requerido</strong>.'
            }
        },
        submitHandler: function(form) {
            totalData.CheckOutDate = $('input[name="inputCheckOutDate"]').val();
            totalData.CheckOutTime = $('input[name="inputCheckOutTime"]').val();
            $("#step5").slideUp("slow", function() {
                $("#step6").slideDown("slow", function(){
                    $('#step5Label .d-flex .d-flex').removeClass('btn-primary');
                    $('#step5Label .d-flex .d-flex').addClass('btn-light');
                    $('.checkOutDate').html($('input[name="inputCheckOutDate"]').val() + ' ' + $('input[name="inputCheckOutTime"]').val());
                    $('#step6Label .d-flex .d-flex').addClass('btn-primary');
                })
            });
            console.log(totalData);
        }
    });

    // STEP 6 - Tipo de camión
    $("form[name='step6']").validate({
        rules: {
            selectTruckSM: {
                required: false
            },
            selectTruckMD: {
                required: false
            },
            selectTruckXL: {
                required: false
            }
        },
        submitHandler: function(form) {
            totalData.TruckType = $('input:radio[name="selectTruckType"]:checked').val();
            $("#step6").slideUp("slow", function() {
                $("#step7").slideDown("slow", function(){
                    $('#step6Label .d-flex .d-flex').removeClass('btn-primary');
                    $('#step6Label .d-flex .d-flex').addClass('btn-light');
                    $('.truckType').html(totalData.TruckType);
                    $('#step7Label .d-flex .d-flex').addClass('btn-primary');
                })
            });
            console.log(totalData);
            var amountTruckType = totalData.TruckType;
            AmountTruckType(amountTruckType);
        }
    });

    // STEP 7 - Tipo de servicio
    $("form[name='step7']").validate({
        rules: {
            selectServiceNull: {
                required: false
            },
            selectervicePacking: {
                required: false
            },
            selectServiceUnpacking: {
                required: false
            },
            selectServiceDuo: {
                required: false
            }
        },
        submitHandler: function(form) {
            totalData.ServiceType = $('input:radio[name="selectServiceType"]:checked').val();
            $("#step7").slideUp("slow", function() {
                $("#step8").slideDown("slow", function(){
                    $('#step7Label .d-flex .d-flex').removeClass('btn-primary');
                    $('#step7Label .d-flex .d-flex').addClass('btn-light');
                    $('.serviceType').html(totalData.ServiceType);
                    $('#step8Label .d-flex .d-flex').addClass('btn-success');
                })
            });
            console.log(totalData);
            var amountServiceType = totalData.ServiceType;
            AmountServiceType(amountServiceType);
        }
    });

    var elementsTotalPrice = document.querySelectorAll(".totalPrice");
    console.log(elementsTotalPrice);
    elementsTotalPrice.forEach(x => {
        x.innerHTML = totalData.amountCheckInProvince + totalData.amountCheckOutProvince + totalData.amountServiceType + totalData.amountTruckType;
    });

});