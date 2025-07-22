document.addEventListener("DOMContentLoaded", function () {
    // Card Hover Effect - Slight Enlargement
    document.querySelectorAll(".dish-card").forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Button Hover Effect - Slight Shade Change
    document.querySelectorAll(".dish-card a, .search-box button").forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.filter = "brightness(90%)"; // Darker
            this.style.transition = "filter 0.3s ease-in-out";
        });
        button.addEventListener("mouseout", function () {
            this.style.filter = "brightness(100%)";
        });
    });

    // Scroll Animation for Cards
    const dishCards = document.querySelectorAll(".dish-card");

    function revealCards() {
        dishCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 50) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }

    // Initial State for Cards (Hidden & Below)
    dishCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener("scroll", revealCards);
    revealCards(); // Run once on page load in case some cards are already visible
});
