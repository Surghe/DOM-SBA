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