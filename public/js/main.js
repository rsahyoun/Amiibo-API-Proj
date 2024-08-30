document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('amiiboForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the selected option's value
        const selectedValue = document.getElementById('amiiboSelect').value;

        // Ensure the selectedValue is not empty
        if (selectedValue) {
            // Construct the URL with the selected value as a route parameter
            const apiUrl = `/amiibo/${encodeURIComponent(selectedValue)}`;

            // Redirect to the new URL
            window.location.href = apiUrl;
        } else {
            alert("Please select an Amiibo.");
        }
    });
});


