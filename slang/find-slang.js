// Placeholder slang data
const slangData = [
  {
    slang: "Lit",
    meaning: "loreem ipsium",
    link: "learn.html",
    imageUrl: "../images/shirt.jpg",
  },
  {
    slang: "Flex",
    meaning: "To show off, demonstrate power or wealth.",
    link: "learn-more.html",
    imageUrl: "path/to/flex-t-shirt.jpg",
  },
  // Add more slang objects as needed
];

// Select elements
const slangSelect = document.getElementById("slangSelect");
const meaningDiv = document.getElementById("meaning");
const imageContainer = document.getElementById("imageContainer");
const addToCartButton = document.getElementById("addToCartButton");
const searchInput = document.getElementById("searchInput");
const learnMoreLink = document.getElementById("learnMoreLink");

// Function to populate slang select dropdown
function populateSlangDropdown() {
  slangData.forEach(slang => {
    const option = document.createElement("option");
    option.value = slang.slang;
    option.textContent = slang.slang;
    slangSelect.appendChild(option);
  });
}

// Function to display slang information
function displaySlangInfo(selectedSlang) {
  const selectedSlangData = slangData.find(slang => slang.slang === selectedSlang);
  if (selectedSlangData) {
    meaningDiv.textContent = selectedSlangData.meaning;

    if (selectedSlangData.imageUrl) {
      const image = document.createElement("img");
      image.src = selectedSlangData.imageUrl;
      image.alt = `${selectedSlangData.slang} T-shirt`;
      imageContainer.innerHTML = "";
      imageContainer.appendChild(image);
    } else {
      imageContainer.innerHTML = "";
    }

    if (selectedSlangData.link) {
      learnMoreLink.href = selectedSlangData.link;
      learnMoreLink.style.display = "inline-block";
    } else {
      learnMoreLink.style.display = "none";
    }

    if (selectedSlangData.link) {
      addToCartButton.classList.remove("hidden");
      addToCartButton.addEventListener("click", () => {
        // Show an alert when "Add to Cart" button is clicked
        alert("Item added to cart!");
      });
    } else {
      addToCartButton.classList.add("hidden");
    }

    document.getElementById("searchResults").style.display = "block";
  } else {
    hideSlangInfo();
  }
}

// Function to hide slang information
function hideSlangInfo() {
  meaningDiv.textContent = "";
  imageContainer.innerHTML = "";
  addToCartButton.classList.add("hidden");
  learnMoreLink.style.display = "none";
  document.getElementById("searchResults").style.display = "none";
}

// Function to filter slang data based on search term
function filterSlangData(searchTerm) {
  return slangData.filter(slang => slang.slang.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Function to display search results
function displaySearchResults(filteredData) {
  slangSelect.innerHTML = '<option value="" disabled selected>Select a slang</option>';
  filteredData.forEach(slang => {
    const option = document.createElement("option");
    option.value = slang.slang;
    option.textContent = slang.slang;
    slangSelect.appendChild(option);
    
  });
}

// Event listener for slang select dropdown
slangSelect.addEventListener("change", event => {
  const selectedSlang = event.target.value;
  if (selectedSlang) {
    displaySlangInfo(selectedSlang);
  } else {
    hideSlangInfo();
  }
});

// Event listener for search input
searchInput.addEventListener("input", event => {
  const searchTerm = event.target.value.trim();
  const filteredData = filterSlangData(searchTerm);
  displaySearchResults(filteredData);
});

// Populate slang dropdown on page load
populateSlangDropdown();
