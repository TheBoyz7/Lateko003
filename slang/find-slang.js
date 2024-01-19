const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const slangList = document.getElementById('slang-list');
const tShirtPopup = document.querySelector('.t-shirt-popup');

// Simulate search (replace with your actual search logic)
const slangData = {
    "Naija": "Nigerian slang for 'Nigeria'",
    "Chop Life": "To enjoy life to the fullest",
    "Jand": "Abroad, specifically referring to Western countries",
    // Add more slang terms and definitions
};

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = searchInput.value.toLowerCase();
    const matchingSlang = Object.entries(slangData)
        .filter(([slangTerm]) => slangTerm.toLowerCase().includes(searchTerm))
        .map(([slangTerm, definition]) => ({ slangTerm, definition }));

    slangList.innerHTML = ''; // Clear previous results

    matchingSlang.forEach(({ slangTerm, definition }) => {
        const slangItem = document.createElement('li');
        slangItem.classList.add('slang-item');
        slangItem.textContent = slangTerm;

        const definitionElement = document.createElement('div');
        definitionElement.classList.add('definition');
        definitionElement.textContent = definition;

        slangItem.appendChild(definitionElement);
        slangList.appendChild(slangItem);

        slangItem.addEventListener('click', () => {
            openTShirtPopup(slangTerm);
        });
    });
});

// Open the T-shirt popup
function openTShirtPopup(slangTerm) {
    // Replace with your logic to fetch T-shirt image based on slangTerm
    const tShirtImage = 'https://example.com/tshirts/' + slangTerm + '.jpg'; // Example placeholder

    tShirtPopup.style.display = 'flex';
    tShirtPopup.querySelector('img').src = tShirtImage;
}

// Close the T-shirt popup
function closeTShirtPopup() {
    tShirtPopup.style.display = 'none';
}

// Add event listener for closing the popup (e.g., clicking outside or on a close button)
tShirtPopup.addEventListener('click', (event) => {
    if (event.target === tShirtPopup) {
        closeTShirtPopup();
    }
});



