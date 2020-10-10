
function sweetalertclick()
{
    swal({text: "Hola!", icon: "success",});
}

function logoutclick()
{
    swal("Estás seguro?", {
        dangerMode: true,
        buttons: true,
    });
}

// crear y descargar PDF al clickear botón
function creardocumento(){
    const doc = new jsPDF();

    doc.text("Ejemplo #1!", 10, 10);
    doc.save("ejemplo-jspdf.pdf");
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    maintainAspectRatio: false,
    data: {
        labels: ['Rojo', 'Azul', 'Amarillo'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

