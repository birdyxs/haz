const statusBtn = document.querySelector('.btn-status');
const xatID = "1004002"; 

async function verificarPresenciaXat() {

    const proxy = "https://api.allorigins.win/get?url=";
    const xatUrl = encodeURIComponent(`https://xat.com/web_gear/chat/profile.php?id=${xatID}`);

    try {
        const response = await fetch(`${proxy}${xatUrl}`);
        const data = await response.json();
        
        if (data.contents && data.contents.includes('Online')) {
            actualizarEstado(true);
        } else {

            const isOnline = data.contents.includes('Status:'); 
            actualizarEstado(isOnline);
        }
    } catch (error) {
        console.log("Error de conexión, reintentando con método de imagen...");
        const img = new Image();
        img.src = `https://xat.com/web_gear/chat/av/${xatID}.png?${new Date().getTime()}`;
        img.onload = () => actualizarEstado(true);
    }
}

function actualizarEstado(online) {
    if (online) {
        statusBtn.classList.add('status-online');
        statusBtn.classList.remove('status-offline');
        statusBtn.title = "Haz está Online";
    } else {
        statusBtn.classList.add('status-offline');
        statusBtn.classList.remove('status-online');
        statusBtn.title = "Haz está Offline";
    }
}

verificarPresenciaXat();
setInterval(verificarPresenciaXat, 30000);

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) return false;
}
