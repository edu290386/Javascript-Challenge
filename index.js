const btn = document.getElementById("btn");
const container = document.getElementById("container");
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

const messages = ["honor", "fe", "lealtad"];

function showVirtud(){
    for(let i=0; i<messages.length; i++) {
        setTimeout(function timer(){
            const virtud = document.createElement("div");
            virtud.classList.add("toast");
            container.appendChild(virtud);
            virtud.innerText = messages[i];
            setTimeout(() => {
                virtud.remove()
            },9000);
        },i*3000); 
    }
}

setInterval(showVirtud, 9000);

function showVirtud2(){
    for(let i=0; i<messages.length; i++) {
        setTimeout(function timer(){
            const virtud2 = document.createElement("div");
            virtud2.classList.add("container2");
            container2.appendChild(virtud2);
            virtud2.innerText = messages[i];
            setTimeout(() => {
                virtud2.remove()
            },3000);
        },i*3000); 
    }
}

setInterval(showVirtud2, 9000);

   