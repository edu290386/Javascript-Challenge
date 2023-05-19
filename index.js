const btn = document.getElementById("btn");
const container = document.getElementById("container");
const message = "Culture                 Empowerment         Awareness         Environment          ";
const container2 = document.getElementById("container2");

btn.addEventListener("click", () => {
    createNotification()
})

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = "Share the Wave";
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove()
    },8000);
}

let index = 0;
function writeText(){
    container2.innerText = message.slice(0, index);
    index ++;
    if (index > message.length) {
        index = 0;
    }
}

setInterval(writeText, 90);