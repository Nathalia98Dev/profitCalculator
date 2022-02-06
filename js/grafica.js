const ctx = document.getElementById('myChart').getContext('2d');

var cuatro, seis, doce, vCuatro, tSeis, grCuatro, grSeis, grDoce, grVCuatro, grTSeis;

// compra de token
function calcularTotalToken() {
    if ($('#select_meses').val() == 4) {
        cuatro = $('#cant_token').val() * 0.026;
        $('#totalToken').val(cuatro);
    }
    
    if ($('#select_meses').val() == 6) {
        seis = $('#cant_token').val() * 0.048;
        $('#totalToken').val(seis);
    }
    
    if ($('#select_meses').val() == 12) {
        doce = $('#cant_token').val() * 0.12;
        $('#totalToken').val(doce);
    }
    
    if ($('#select_meses').val() == 24) {
        vCuatro = $('#cant_token').val() * 0.3;
        $('#totalToken').val(vCuatro);
    }
    
    if ($('#select_meses').val() == 36) {
        tSeis = $('#cant_token').val() * 0.54;
        $('#totalToken').val(tSeis);   
    }

    // valores de la grafica
    grCuatro = $('#cant_token').val() * 0.026;
    grSeis = $('#cant_token').val() * 0.048;
    grDoce = $('#cant_token').val() * 0.12;
    grVCuatro = $('#cant_token').val() * 0.3;
    grTSeis = $('#cant_token').val() * 0.54;

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['4', '6', '12', '24', '36'],
            datasets: [{
                label: 'Meses',
                data: [grCuatro, grSeis, grDoce, grVCuatro, grTSeis],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


$('#select_meses').append('<option value="4">4</option>');
$('#select_meses').append('<option value="6">6</option>');
$('#select_meses').append('<option value="12">12</option>');
$('#select_meses').append('<option value="24">24</option>');
$('#select_meses').append('<option value="36">36</option>');