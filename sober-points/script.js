
// down arrow on homepage
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("scrollButton").addEventListener("click", function () {
        document.getElementById("next-section").scrollIntoView({ behavior: "smooth" });
    });
});

//podcast filter
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const podcasts = document.querySelectorAll("podcast.card");
    let selectedCategories = new Set(); // Store selected filters

    // Search filter
    searchBar.addEventListener("input", function () {
        filterPodcasts();
    });

    // Category filter
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            if (category === "all") {
                selectedCategories.clear(); // Reset filters
                filterButtons.forEach(btn => btn.classList.remove("active"));
            } else {
                if (selectedCategories.has(category)) {
                    selectedCategories.delete(category); // Deselect filter
                    this.classList.remove("active");
                } else {
                    selectedCategories.add(category); // Select filter
                    this.classList.add("active");
                }
            }

            filterPodcasts();
        });
    });

    function filterPodcasts() {
        const searchText = searchBar.value.toLowerCase();
        podcasts.forEach(podcast => {
            const title = podcast.querySelector(".card-title").textContent.toLowerCase();
            const description = podcast.querySelector(".card-text").textContent.toLowerCase();
            const podcastCategories = podcast.getAttribute("data-category").split(" ");

            const matchesSearch = title.includes(searchText) || description.includes(searchText);
            const matchesCategory = selectedCategories.size === 0 || [...selectedCategories].some(cat => podcastCategories.includes(cat));

            if (matchesSearch && matchesCategory) {
                podcast.style.display = "block";
            } else {
                podcast.style.display = "none";
            }
        });
    }
});
