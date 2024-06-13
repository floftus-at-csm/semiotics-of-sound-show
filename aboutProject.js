// Function to show a modal with buttons and handle redirection
function showAlertAndRedirect() {
    // Get the modal
    const modal = document.getElementById('myModal');

    // Get the buttons
    const continueButton = document.getElementById('continueButton');
    const endButton = document.getElementById('endButton');

    // Set the timeout duration in milliseconds (120000ms = 2 minutes)
    const timeoutDuration = 60000;
    const modalTimeoutDuration = 15000;

// Use setTimeout to display the modal after the specified delay
    setTimeout(() => {
        modal.style.display = 'block';

        // Set another timeout to redirect if no action is taken within 30 seconds
        const modalTimeout = setTimeout(() => {
            window.location.href = 'index.html';
        }, modalTimeoutDuration);

        // When the user clicks on "Continue Session", close the modal and clear the modal timeout
        continueButton.onclick = function() {
            modal.style.display = 'none';
            clearTimeout(modalTimeout);
        }

        // When the user clicks on "End Session", redirect to the index page
        endButton.onclick = function() {
            window.location.href = 'index.html';
        }
    }, timeoutDuration);
}

// Call the function to set the timeout
showAlertAndRedirect();