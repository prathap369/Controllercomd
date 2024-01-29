
function addcommand() {
    //call the function for loading spinner
    var submitButton = document.getElementById('kt_cmmdctrl_Get');
    //var operation = document.getElementById('operationcommnd').value;
    var controllers = document.getElementById('controller').value;
    var cmd = document.getElementById('command').value;
    if (controllers != '') {
        if (cmd != '') {
            showLoading();
            // Show loading indication
            submitButton.setAttribute('data-kt-indicator', 'on');
            // Disable button to avoid multiple click
            submitButton.disabled = true;
            setTimeout(function () {
                // Hide loading indication
                submitButton.removeAttribute('data-kt-indicator');
                // Enable button
                submitButton.disabled = false;
                $.ajax({
                    url: 'https://localhost:44333//api/Device/SetData?cmd=' + encodeURIComponent(cmd) + '&controllers=' + encodeURIComponent(controllers),
                    type: "POST",
                     // Pass both values as an object
                    success: function (response) {
                        hideLoading();
                        // Handle success response
                        var div1 = document.getElementById('note');
                        var objData = JSON.parse(response);
                        
                        if (objData.Success === "true") {
                            
                           
                        } else {
                            hideLoading();
                            Swal.fire({
                                text: objData.data,
                                icon: "error",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            });
                        }
                    },
                    error: function () {
                        hideLoading();
                        // Handle error
                        console.log("Error occurred during the AJAX request");
                    }
                });
            });
        } else {
            Swal.fire({
                text: "Please Enter the Command!",
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                    confirmButton: "btn btn-primary"
                }
            });
        }
    } else {
        Swal.fire({
            text: "Please Enter Device Id",
            icon: "warning",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
                confirmButton: "btn btn-primary"
            }
        });
    }
}
