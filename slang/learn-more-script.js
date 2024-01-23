document.addEventListener("DOMContentLoaded", function () {
    const slangDetailsContainer = document.getElementById("slangDetails");
    const imageCarousel = document.querySelector(".image-carousel");

    // Simulated data for demonstration purposes
    const slangData = [
        { slang: "Lit", meaning: "Awesome", details: "Lit is used to describe something that is exceptionally cool or exciting." },
        { slang: "Fam", meaning: "Family", details: "Fam is a term used to refer to close friends or family members." },
        // Add more data as needed
    ];

    // Get slang term from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const slangTerm = urlParams.get('term');

    // Find the slang details based on the term
    const slangDetails = slangData.find(item => item.slang.toLowerCase() === slangTerm.toLowerCase());

    // Display the details on the page
    if (slangDetails) {
        displaySlangDetails(slangDetails);
        initImageCarousel();
    } else {
        slangDetailsContainer.innerHTML = "<p>No details found for the selected slang term.</p>";
    }
});

// Function to display slang details on the page
function displaySlangDetails(details) {
    const slangDetailsContainer = document.getElementById("slangDetails");

    const detailsHTML = `
        <h2>${details.slang}</h2>
        <p>${details.meaning}</p>
        <p>${details.details}</p>
    `;

    slangDetailsContainer.innerHTML = detailsHTML;
}

// Function to initialize the image carousel
function initImageCarousel() {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);
}
