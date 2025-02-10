document.addEventListener("DOMContentLoaded", function () {
    const sobercastsContainer = document.getElementById("sobercasts");
    const communitiesContainer = document.getElementById("communities");
    const seeMoreSobercasts = document.getElementById("seeMoreSobercasts");

    const sobercasts = [
        { title: "Over the Influence", image: "sobercast1.jpg" },
        { title: "Sober Awakenings", image: "sobercast2.jpg" },
        { title: "This Sober Life", image: "sobercast3.jpg" }
    ];

    const communities = [
        { title: "The Sober Club", image: "community1.jpg" },
        { title: "Thrive", image: "community2.jpg" },
        { title: "Sober Full Society", image: "community3.jpg" }
    ];

    function loadItems(container, items) {
        container.innerHTML = items.map(item => `
            <div class="card">
                <img src="${item.image}" alt="${item.title}">
                <p>${item.title}</p>
            </div>
        `).join("");
    }

    if (sobercastsContainer && communitiesContainer) {
        loadItems(sobercastsContainer, sobercasts);
        loadItems(communitiesContainer, communities);
    }

    if (seeMoreSobercasts) {
        seeMoreSobercasts.addEventListener("click", function () {
            alert("Load more Sobercasts coming soon!");
        });
    }
});
