const toast = document.getElementById("toast");
const toastContainer = document.getElementById("toast-container");
const toastText = document.getElementById("toast-text");
const toastHeader = document.getElementById("toast-header");
const toastTitle = document.getElementById("toast-title");

export default function (text, success = false) {
    if (success) toastHeader.classList.add("bg-success", "text-white");
    else toastHeader.classList.add("bg-danger", "text-white");
    toastText.innerText = text;
    toastTitle.innerText = 'Уведомление';
    toast.classList.add("show");
    toastContainer.style.display = "block";

    setTimeout(() => {
        toast.classList.remove("show");
        if (success) toastHeader.classList.remove("bg-success", "text-white");
        else toastHeader.classList.remove("bg-warning", "text-white");
        toastContainer.style.display = "none";
    }, 2000);
}
