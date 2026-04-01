usernameForm = $('#player-name-form');

usernameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form submitted");
    const playerName = $('#player-name-input').val();
    document.cookie = "playerName=" + playerName;
    window.location.href = "game.html";
});
