
// down arrow on homepage
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("scrollButton").addEventListener("click", function () {
        document.getElementById("next-section").scrollIntoView({ behavior: "smooth" });
    });
});

