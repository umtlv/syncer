const spinner = document.getElementById("spinner");

export default {
    start() {
        try {
            spinner.classList.remove("hidden");
        } catch {
            return false;
        }
    },
    finish() {
        try {
            spinner.classList.add("hidden");
        } catch {
            return false;
        }
    },
};
