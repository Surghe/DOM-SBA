// Dynamic Anime Web Application SBA

// Create the main container
document.body.innerHTML += 
    <div id="app">
        <h1>Anime Search</h1>
        <form id="anime-form">
            <input type="text" id="anime-input" placeholder="Enter anime name" required/>
            <button type="submit">Search</button>
        </form>
        <div id="anime-results"></div>
    </div>

const form = document.getElementById("anime-form");
const input = document.getElementById("anime-input");
const results = document.getElementById("anime-results");

// Fetch anime data from an API
async function fetchAnime(animeName) {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);
        const data = await response.json();
        displayAnime(data.data);
    } catch (error) {
        console.error("Error fetching anime data:", error);
        results.innerHTML = "<p>Failed to load anime. Try again later.</p>";
    }
}

// Display anime results
function displayAnime(animeList) {
    results.innerHTML = "";
    animeList.forEach(anime => {
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");
        animeCard.innerHTML = `
            <h2>${anime.title}</h2>
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <p>${anime.synopsis || "No synopsis available."}</p>
            <a href="${anime.url}" target="_blank">More Info</a>
        `;
        results.appendChild(animeCard);
    });
}

// Event-driven programming: Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const animeName = input.value.trim();
    if (animeName) {
        fetchAnime(animeName);
    } else {
        alert("Please enter an anime name.");
    }
});
