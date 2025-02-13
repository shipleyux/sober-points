let activeCategories = new Set();

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

function filterPodcasts() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let subCategory = document.getElementById("subCategoryFilter").value;
    let podcasts = document.querySelectorAll(".podcast-card");

    podcasts.forEach(podcast => {
        let title = podcast.getAttribute("data-title").toLowerCase();
        let category = podcast.getAttribute("data-category");
        let subcategory = podcast.getAttribute("data-subcategory");

        let matchesTitle = title.includes(searchInput);
        let matchesCategory = activeCategories.size === 0 || activeCategories.has(category);
        let matchesSubcategory = subCategory === "" || subCategory === subcategory;

        podcast.classList.toggle("hidden", !(matchesTitle && matchesCategory && matchesSubcategory));
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
