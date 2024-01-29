function Sweetalert(name, message) {
    var currentTime = new Date();
    // Format the time as per your requirements
    var formattedTime = currentTime.toLocaleTimeString();
   // Update the content of the span with id "Timing"
   document.getElementById("Timing").textContent = formattedTime;
    var notificationContent = document.getElementById('notificationContent');
    notificationContent.innerHTML = name + ',' + message;
    const container = document.getElementById('kt_docs_toast_stack_container');
    const targetElement = document.querySelector('[data-kt-docs-toast="stack"]');
    // Create a new toast for each message
    const newToast = targetElement.cloneNode(true);
    newToast.querySelector('.toast-body').innerText = message;
    container.append(newToast);
    // Show the new toast using Bootstrap Toast
    const toast = new bootstrap.Toast(newToast);
    toast.show();
}