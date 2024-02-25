// Placeholder slang data
const slangData = [
  {
    slang: "Baba Ijebu",
    meaning: "An illegal lottery or gambling game.",
    link: "learn-baba-ijebu.html",
    imageUrl: "../images/shirt.jpg",
  },
  {
    slang: "Gbedu",
    meaning: "Refers to a good song or music with a great beat.",
    link: "learn-gbedu.html",
    imageUrl: "path/to/gbedu-album.jpg",
  },
  {
    slang: "K-leg",
    meaning: "To make a mistake or fail at something.",
    link: "learn-k-leg.html",
    imageUrl: "path/to/k-leg-meme.jpg",
  },
  {
    slang: "Gbe body e",
    meaning: "To dance or move vigorously, especially in a party setting.",
    link: "learn-gbe-body-e.html",
    imageUrl: "path/to/gbe-body-e-dance.jpg",
  },
  {
    slang: "Japa",
    meaning: "To flee or escape from a situation.",
    link: "learn-japa.html",
    imageUrl: "path/to/japa-meme.jpg",
  },
  {
    slang: "Owanbe",
    meaning: "A lavish or elaborate party or celebration, especially a wedding.",
    link: "learn-owanbe.html",
    imageUrl: "path/to/owanbe-party.jpg",
  },
  {
    slang: "Soro soke",
    meaning: "To speak up or voice out against injustice or oppression.",
    link: "learn-soro-soke.html",
    imageUrl: "path/to/soro-soke-protest.jpg",
  },
  {
    slang: "Wahala dey",
    meaning: "There's trouble or a problem brewing.",
    link: "learn-wahala-dey.html",
    imageUrl: "path/to/wahala-dey-meme.jpg",
  },
  {
    slang: "Yawa",
    meaning: "To be in trouble or facing a difficult situation.",
    link: "learn-yawa.html",
    imageUrl: "path/to/yawa-meme.jpg",
  },
  {
    slang: "Aproko",
    meaning: "Gossip or someone who gossips a lot.",
    link: "learn-aproko.html",
    imageUrl: "path/to/aproko.jpg",
  },
  {
    slang: "Chop knuckle",
    meaning: "To exchange greetings by knocking fists together.",
    link: "learn-chop-knuckle.html",
    imageUrl: "path/to/chop-knuckle.jpg",
  },
  {
    slang: "Gbege",
    meaning: "A fight or a quarrel.",
    link: "learn-gbege.html",
    imageUrl: "path/to/gbege.jpg",
  },
  {
    slang: "Jand",
    meaning: "The United Kingdom, usually used to refer to traveling abroad.",
    link: "learn-jand.html",
    imageUrl: "path/to/jand.jpg",
  },
  {
    slang: "Padi",
    meaning: "Friend or buddy.",
    link: "learn-padi.html",
    imageUrl: "path/to/padi.jpg",
  },
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
