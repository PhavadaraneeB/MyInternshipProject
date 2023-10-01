// In script.js
document.addEventListener("DOMContentLoaded", function () {
    const portfolioImages = document.querySelectorAll(".portfolio-image");

    portfolioImages.forEach((image) => {
        image.addEventListener("click", () => {
            // Create a modal for the clicked image
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<img src="${image.src}" alt="Portfolio Image">`;
            document.body.appendChild(modal);

            // Close the modal when clicked outside
            modal.addEventListener("click", () => {
                modal.remove();
            });
        });
    });
});
