document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");

    // Simulated data for demonstration purposes
    const slangData = [
        { slang: "Lit", meaning: "Awesome", link: "learn-more.html", image: "../images/shirt.jpg" },
        { slang: "Fam", meaning: "Family", link: "learn-more.html", image: "../images/shirt.jpg" },
        // Add more data as needed
    ];

    // Event listener for input changes
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredResults = slangData.filter(item => item.slang.toLowerCase().includes(searchTerm));

        displayResults(filteredResults);
    });

    // Event listener for search button click
    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredResults = slangData.filter(item => item.slang.toLowerCase().includes(searchTerm));

        displayResults(filteredResults);
    });

    // Function to display search results
    function displayResults(results) {
        // Clear previous results
        searchResults.innerHTML = "";

        // Display new results
        results.forEach(result => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("result-item");

            resultItem.innerHTML = `
                <div>${result.slang} - ${result.meaning}</div>
                <a href="${result.link}" target="_blank">Learn More</a>
                <a href="../tshirt/index.html"><img src="${result.image}" alt="T-shirt"></a>
                <button onclick="addToCart('${result.slang}')">Add to Cart</button>
            `;

            searchResults.appendChild(resultItem);
        });

        // Show the results container
        searchResults.style.display = results.length > 0 ? "block" : "none";
    }
});

// Function to simulate adding to cart
function addToCart(slang) {
    alert(`"${slang}" added to cart!`);
}
