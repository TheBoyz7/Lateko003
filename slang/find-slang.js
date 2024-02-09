// Store actual slang data with image paths
const slangData = [
   
    // ... more slang objects
  ];
  
  // Get references to HTML elements
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResults = document.getElementById("searchResults");
  const loadingIndicator = document.createElement("div");
  const errorMessage = document.createElement("p");
  
  // Set up loading indicator and error message elements
  loadingIndicator.classList.add("loading");
  loadingIndicator.innerHTML = `<img src="path/to/loading-indicator.gif" alt="Loading">`;
  errorMessage.classList.add("error");
  errorMessage.textContent = "No slang matches your search.";
  
  // Event listener for input changes
  searchInput.addEventListener("input", function () {
    searchResults.innerHTML = ""; // Clear previous results
    searchResults.classList.remove("visible"); // Hide results if the input changes
  
    // Ignore empty input
    if (searchInput.value.trim() === "") {
      return;
    }
  
    // Show loading indicator while simulating data fetch (replace with actual API call)
    loadingIndicator.style.display = "block";
  
    const searchTerm = searchInput.value.toLowerCase();
    const filteredResults = slangData.filter(
      (item) => item.slang.toLowerCase().includes(searchTerm)
    );
  
    setTimeout(() => { // Simulate data fetching delay
      displayResults(filteredResults);
    }, 1000); // Adjust timeout as needed
  });
  
  // Event listener for search button click (triggers input event)
  searchButton.addEventListener("click", function () {
    searchInput.dispatchEvent(new Event("input"));
  });
  
  // Function to display search results
  function displayResults(results) {
    // Hide loading indicator
    loadingIndicator.style.display = "none";
  
    // Handle no results found
    if (results.length === 0) {
      searchResults.appendChild(errorMessage);
      return;
    }
  
    // Clear previous results and iterate over filtered slang data
    searchResults.innerHTML = "";
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
  
      // Create HTML content for each result item
      resultItem.innerHTML = `
        <h3>${result.slang}</h3>
        <p>${result.meaning}</p>
        <a href="${result.link}" target="_blank">Learn More</a>
        <img src="${result.image}" alt="${result.slang} T-shirt">
        <button data-slang="${result.slang}">Add to Cart</button>
      `;
  
      // Add result item to search results container
      searchResults.appendChild(resultItem);
    });
  
    // Make results container visible
    searchResults.classList.add("visible");
  
    // Add click handlers for "Add to Cart" buttons
    searchResults.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", function () {
        addToCart(this.dataset.slang); // Use data-slang attribute to get slang name
      });
    });
  }
  
  // Simulate adding to cart functionality (replace with actual cart logic)
  function addToCart(slang) {
    alert(`"${slang}" added to cart!`);
  }
  
  // Run code when the page loads (DOMContentLoaded event)
  document.addEventListener("DOMContentLoaded", function () {
    // ... rest of the code from your previous example ...
  });
  