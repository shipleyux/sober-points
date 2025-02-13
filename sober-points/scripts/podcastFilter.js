let activeCategories = new Set();

// Handles tab clicks (New-Release, Popular, Recommended)
function toggleCategory(category, element) {
    if (activeCategories.has(category)) {
        activeCategories.delete(category);
        element.classList.remove("active");
    } else {
        activeCategories.add(category);
        element.classList.add("active");
    }
    filterPodcasts();
}

// Store the original order on page load
document.addEventListener("DOMContentLoaded", function () {
    window.allPodcasts = Array.from(document.querySelectorAll(".podcast-card"));
});

function filterPodcasts() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let selectedSubcategories = $("#multiSelect").val() || []; // Get selected options as an array
    let grid = document.getElementById("podcastGrid");

    let visibleCards = [];
    let hiddenCards = [];

    allPodcasts.forEach(podcast => {
        let title = podcast.getAttribute("data-title").toLowerCase();
        let category = podcast.getAttribute("data-category");
        let subcategory = podcast.getAttribute("data-subcategory");

        // Matches the search input
        let matchesTitle = title.includes(searchInput);

        console.log(activeCategories)

        // Matches the selected categories (Tabs)
        let matchesCategory = activeCategories.size === 0 || activeCategories.has(category);

        // Matches the multi-select dropdown
        let matchesSubcategory = selectedSubcategories.length === 0 || selectedSubcategories.includes(subcategory);

        let shouldShow = matchesTitle && matchesCategory && matchesSubcategory;

        if (shouldShow) {
            podcast.classList.remove("hidden");
            visibleCards.push(podcast);
        } else {
            podcast.classList.add("hidden");
            hiddenCards.push(podcast);
        }
    });

    // Clear grid and append filtered results first
    grid.innerHTML = "";
    visibleCards.forEach(card => grid.appendChild(card));
    hiddenCards.forEach(card => grid.appendChild(card)); // Keep hidden ones at the end
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
