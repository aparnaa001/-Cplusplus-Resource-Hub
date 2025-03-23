// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleLinks = document.querySelectorAll(".toggle-section");

    toggleLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection.style.display === "block") {
                targetSection.style.display = "none";
            } else {
                targetSection.style.display = "block";
            }
        });
    });
});

