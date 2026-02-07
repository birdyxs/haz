const statusBtn = document.querySelector('.btn-status');
const xatID = "1004002"; 

const iframe = document.createElement('iframe');
iframe.style.display = 'none';
iframe.src = `https://xat.me/i?id=${xatID}`;
document.body.appendChild(iframe);

function verificarEstado() {
    
    fetch(`https://xat.com/web_gear/chat/profile.php?id=${xatID}`)
        .then(response => {
            actualizarUI(true); 
        })
        .catch(() => actualizarUI(false));
}

function actualizarUI(isOnline) {
    if (isOnline) {
        statusBtn.classList.add('status-online');
        statusBtn.classList.remove('status-offline');
        statusBtn.title = "En línea";
    } else {
        statusBtn.classList.add('status-offline');
        statusBtn.classList.remove('status-online');
        statusBtn.title = "Desconectado";
    }
}


verificarEstado();

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) return false;
}
