const statusBtn = document.querySelector('.btn-status');

function controlarEstadoChile() {
    const opciones = { timeZone: 'America/Santiago', hour: 'numeric', hour12: false };
    const horaChile = parseInt(new Intl.DateTimeFormat('en-US', opciones).format(new Date()));


    const horaApertura = 9;
    const horaCierre = 19;

    if (horaChile >= horaApertura && horaChile < horaCierre) {
        statusBtn.classList.add('status-online');
        statusBtn.classList.remove('status-offline');
        statusBtn.title = "Online";
    } else {
        statusBtn.classList.add('status-offline');
        statusBtn.classList.remove('status-online');
        statusBtn.title = "Offline";
    }
}


controlarEstadoChile();

setInterval(controlarEstadoChile, 60000);
