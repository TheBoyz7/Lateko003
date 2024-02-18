document.addEventListener("DOMContentLoaded", function () {
    const slangDetailsContainer = document.getElementById("slangDetails");

    // Simulated data for demonstration purposes
    const slangData = [
        { slang: "Lit", meaning: "Awesome", details: "Lit is used to describe something that is exceptionally cool or exciting." },
        { slang: "Fam", meaning: "Family", details: "Fam is a term used to refer to close friends or family members." },
        // Add more data as needed
    ];

    // Get slang term from URL parameter (replace 'term' with your parameter name)
    const urlParams = new URLSearchParams(window.location.search);
    const slangTerm = urlParams.get('term');

    // Find the slang details based on the term
    const slangDetails = slangData.find(item => item.slang.toLowerCase() === slangTerm.toLowerCase());

    // Display the details on the page
    if (slangDetails) {
        displaySlangDetails(slangDetails);
    } else {
        slangDetailsContainer.innerHTML = "<p>No details found for the selected slang term.</p>";
    }
});

// Function to display slang details on the page
function displaySlangDetails(details) {
    const slangDetailsContainer = document.getElementById("slangDetails");

    const detailsHTML = `
        <p>${details.meaning}</p>
        <p>${details.details}</p>
    `;

    slangDetailsContainer.innerHTML = detailsHTML;
}

// Function to add item to cart (replace with your functionality)
function addToCart() {
    alert("Item added to cart!");
}
