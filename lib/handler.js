// handler.js

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Get a reference to the submitted button
    var submitButton = document.getElementById("submitted");

    // Add a click event listener to the button
    submitButton.addEventListener("click", function () {
        // Call the validateSpotifyUrl function when the button is clicked
        validateSpotifyUrl();
    });
});

function validateSpotifyUrl() {
    // Get the input value
    var spotifyTrackURL = document.getElementById("downloadInput").value;

    // Check if the URL is valid
    if (isValidSpotifyUrl(spotifyTrackURL)) {
        console.log('Valid Spotify track URL:', spotifyTrackURL);
        // Proceed with your download logic for a valid track URL
    } else {
        console.log('Invalid Spotify track URL:', spotifyTrackURL);
        // Handle the case where the URL is not a valid Spotify track
    }
}

function isValidSpotifyUrl(url) {
    // Regular expression to check if the URL is a valid Spotify track URL
    var spotifyUrlRegex = /^https:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9]+(\?si=[a-zA-Z0-9]+)?$/;
    return spotifyUrlRegex.test(url);
}
