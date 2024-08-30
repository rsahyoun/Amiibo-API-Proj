document.addEventListener('DOMContentLoaded', function () {
    const filterButton = document.getElementById('filterButton');
    const typeFilter = document.getElementById('typeFilter');
    const amiiboSelect = document.getElementById('amiiboSelect');

    // Event listener for the filter button
    filterButton.addEventListener('click', function () {
        const selectedType = typeFilter.value;

        // Get all options in the amiiboSelect dropdown
        const options = amiiboSelect.querySelectorAll('option');

        // Loop through the options and filter them based on the selected type
        options.forEach(option => {
            const amiiboType = option.getAttribute('data-type');

            if (selectedType === 'all' || amiiboType === selectedType) {
                option.style.display = ''; // Show the option
            } else {
                option.style.display = 'none'; // Hide the option
            }
        });
    });
});



