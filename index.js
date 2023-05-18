const btn = document.getElementById("btn");
const container = document.getElementById("container");
btn.addEventListener("click", () => {
    createNotification()
})

function createNotification() {
    const notif = document.createElement("div");
    console.log(notif)
    notif.classList.add("toast");
    notif.innerText = "Share the Wave";
    container.appendChild(notif);
    // setTimeout(() => {
    //     notif.remove()
    // },5000);
}