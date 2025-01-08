async function fetchRecommendations() {
  try {
    const response = await fetch("travel_recommendation_api.json");
    const data = await response.json();
    console.log(data); // Check if data is fetched correctly
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchRecommendations();

function searchFunction() {
  const keyword = document
    .querySelector('input[type="text"]')
    .value.toLowerCase();
  // Logic to filter recommendations based on the keyword
  console.log("Searching for:", keyword);
}

function displayRecommendations(recommendations) {
  const resultsContainer = document.getElementById("results"); // Ensure you have a div with this ID
  resultsContainer.innerHTML = ""; // Clear previous results
  recommendations.forEach((rec) => {
    const recElement = document.createElement("div");
    recElement.innerHTML = `
            <h3>${rec.name}</h3>
            <img src="${rec.imageUrl}" alt="${rec.name}" />
            <p>${rec.description}</p>
            <button>Visit</button>
        `;
    resultsContainer.appendChild(recElement);
  });
}

function clearFunction() {
  document.querySelector('input[type="text"]').value = "";
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear displayed results
}

function displayTime() {
  const options = {
    timeZone: "America/New_York",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const newYorkTime = new Date().toLocaleTimeString("en-US", options);
  console.log("Current time in New York:", newYorkTime);
}

displayTime();
