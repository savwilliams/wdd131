// filters.js
export function setupFilters(callback) {
    const filterButton = document.querySelector(".filter-button");
    const filterMenu = document.querySelector(".filter-menu");
    const submitButton = document.querySelector(".submit-filters");

    // Toggle filter menu visibility
    filterButton.addEventListener("click", () => {
        filterMenu.classList.toggle("visible");
    });

    // Collect selected filters and pass them to callback
    submitButton.addEventListener("click", () => {
        const selectedFilters = {};
        const checkboxes = filterMenu.querySelectorAll("input[type='checkbox']:checked");
        checkboxes.forEach((checkbox) => {
            const name = checkbox.name;
            const value = checkbox.value;
            if (!selectedFilters[name]) {
                selectedFilters[name] = [];
            }
            selectedFilters[name].push(value);
        });
        callback(selectedFilters);
        filterMenu.classList.remove("visible"); // Hide menu after submission
    });
}
