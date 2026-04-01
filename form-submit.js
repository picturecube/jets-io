usernameForm = $('#player-name-form');

usernameForm.on('submit', function() {
    event.preventDefault();
    console.log("Form submitted");
    const playerName = $('#player-name-input').val();
    document.cookie = "playerName=" + playerName;
    window.location.href = "game.html";
});
