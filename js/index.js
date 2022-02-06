var ganancia_silver = 0;
var ganancia_gold = 2;
var ganancia_carbon = 4;
var ganancia_enterprice = 4;
var ganancia_hytapper = 6;
var ganancia_seven = 10;
var ganancia_bussines = 12;

function calcularTotalDefault() {
    var porcentaje = $('#cont_membresia').val() / 100;
    var total_membresia = $('#contactos').val() * porcentaje;

    $('#total_membresia').val(parseInt(total_membresia));
    
    $('#mGold').val(parseInt(total_membresia * 0.38));
    $('#mCarbon').val(parseInt(total_membresia * 0.19));
    $('#mEnterprice').val(parseInt(total_membresia * 0.11));
    $('#mHytapper').val(parseInt(total_membresia * 0.18));
    $('#mSeven').val(parseInt(total_membresia * 0.09));
    $('#mBussines').val(parseInt(total_membresia * 0.05));
    $('#mTotal').val(parseInt(total_membresia));

    var totalG = (($('#mSilver').val() * ganancia_silver) + 
                    ($('#mGold').val() * ganancia_gold) +
                    ($('#mCarbon').val() * ganancia_carbon) +
                    ($('#mEnterprice').val() * ganancia_enterprice) +
                    ($('#mHytapper').val() * ganancia_hytapper) +
                    ($('#mSeven').val() * ganancia_seven) +
                    ($('#mBussines').val() * ganancia_bussines));
    
    $('#totalG').val("$" + totalG);

    $('#f_pago1').val("$" + (totalG / 2));
    $('#f_pago2').val("$" + (totalG / 2));
}

function calcularTotalManual() {
    var totalG = (($('#mSilver').val() * ganancia_silver) + 
                    ($('#mGold').val() * ganancia_gold) +
                    ($('#mCarbon').val() * ganancia_carbon) +
                    ($('#mEnterprice').val() * ganancia_enterprice) +
                    ($('#mHytapper').val() * ganancia_hytapper) +
                    ($('#mSeven').val() * ganancia_seven) +
                    ($('#mBussines').val() * ganancia_bussines));
    
    $('#totalG').val("$" + totalG);

    $('#f_pago1').val("$" + (totalG / 2));
    $('#f_pago2').val("$" + (totalG / 2));
}

// recargas
function calcularTotalRecargas() {
    var totalRecargas = $('#cantReferidos').val() * $('#dolares').val() * $('#cantidad').val() * 0.005;

    $('#totalRecarga').val(totalRecargas);

    $('#fPago1').val("$" + (totalRecargas / 2));
    $('#fPago2').val("$" + (totalRecargas / 2));
}