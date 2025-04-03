// Dynamic Anime Web Application SBA

// Create the main container
document.body.innerHTML += 
    <div id="app">
        <h1>Anime Search</h1>
        <form id="anime-form">
            <input type="text" id="anime-input" placeholder="Enter anime name" required>
            <button type="submit">Search</button>
        </form>
        <div id="anime-results"></div>
    </div>