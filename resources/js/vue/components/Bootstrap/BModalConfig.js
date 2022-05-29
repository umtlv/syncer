export function open(id) {
    try {
        const modalsLength = document.querySelectorAll(".modal.show").length;
        const event = new CustomEvent("openModal", {
            detail: { index: 1050 + modalsLength + 1, id },
        });
        window.dispatchEvent(event);
    } catch {
        return false;
    }
}

export function close(id) {
    try {
        const event = new CustomEvent("closeModal", {
            detail: { id },
        });
        window.dispatchEvent(event);
    } catch {
        return false;
    }
}

const NodModalConfig = {
    open,
    close,
};
export default NodModalConfig;
