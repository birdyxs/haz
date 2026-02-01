const statusBtn = document.querySelector('.btn-status');
const xatID = "1004002"; 

function verificarPresenciaXat() {
    const img = new Image();
    
    img.src = `https://xat.com/web_gear/chat/av/${xatID}.png?${new Date().getTime()}`;

    img.onload = function() {

        statusBtn.classList.add('status-online');
        statusBtn.classList.remove('status-offline');
        statusBtn.title = "En línea";
    };

    img.onerror = function() {

        statusBtn.classList.add('status-offline');
        statusBtn.classList.remove('status-online');
        statusBtn.title = "Desconectado";
    };
}

verificarPresenciaXat();

setInterval(verificarPresenciaXat, 120000);
