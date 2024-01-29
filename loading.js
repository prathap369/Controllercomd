var loadingEl = "";
function showLoading() {
   
    loadingEl = document.createElement("div");
    document.body.prepend(loadingEl);
    loadingEl.classList.add("page-loader");
    loadingEl.classList.add("flex-column");
    loadingEl.classList.add("bg-dark");
    loadingEl.classList.add("bg-opacity-25");
    loadingEl.innerHTML = `
                <span class="spinner-border text-primary " role="status"></span>
                <span class="text-gray-800 fs-6 fw-semibold mt-5 ">Please Wait...</span>
            `;

    // Show page loading
    KTApp.showPageLoading();

}
function hideLoading() {
    // Hide after 3 seconds
    setTimeout(function () {
        KTApp.hidePageLoading();
        loadingEl.remove();
    }, 100);
}