const statusBtn = document.querySelector('.btn-status');
const xatID = "1004002"; 

async function verificarPresenciaXat() {
    try {
        const response = await fetch(`https://corsproxy.io/?https://xat.com/web_gear/chat/profile.php?id=${xatID}`);
        const data = await response.text();
        const img = new Image();
        img.src = `https://xat.com/web_gear/chat/av/${xatID}.png?nocache=${new Date().getTime()}`;

        img.onload = function() {
            statusBtn.classList.add('status-online');
            statusBtn.classList.remove('status-offline');
            statusBtn.title = "En línea en xat";
            console.log("Haz está Online");
        };

        img.onerror = function() {
            statusBtn.classList.add('status-offline');
            statusBtn.classList.remove('status-online');
            statusBtn.title = "Desconectado";
            console.log("Haz está Offline");
        };

    } catch (error) {
        console.error("Error al verificar estado:", error);
    }
}


verificarPresenciaXat();


setInterval(verificarPresenciaXat, 30000);


document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    if(e.keyCode == 123 || 
       (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
       (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
}
