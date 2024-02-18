document.addEventListener("DOMContentLoaded", function () {
    const slangInfoContainer = document.getElementById("slangInfo");
    const relatedLinksList = document.getElementById("relatedLinks");

    // Simulated data for demonstration purposes
    const slangDetails = {
        name: "Lit",
        meaning: "Awesome",
        details: "Lit is used to describe something that is exceptionally cool or exciting.",
        relatedLinks: [
            { text: "Link 1", url: "#" },
            { text: "Link 2", url: "#" },
            // Add more related links as needed
        ]
    };

    // Display slang details
    slangInfoContainer.querySelector(".slang-name").textContent = slangDetails.name;
    slangInfoContainer.querySelector(".meaning").textContent = "Meaning: " + slangDetails.meaning;
    slangInfoContainer.querySelector(".details").textContent = "Details: " + slangDetails.details;

    // Display related links
    slangDetails.relatedLinks.forEach(link => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.textContent = link.text;
        anchor.href = link.url;
        listItem.appendChild(anchor);
        relatedLinksList.appendChild(listItem);
    });
});
