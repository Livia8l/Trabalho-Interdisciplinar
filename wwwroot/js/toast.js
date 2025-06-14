let toastTimeout;

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    toast.textContent = message;

    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
} 