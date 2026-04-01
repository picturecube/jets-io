usernameForm = $('#player-name-form');

usernameForm.on('submit', function(event) {
    event.preventDefault();
    const playerName = $('#player-name-input').val();
    document.cookie = "playerName=" + playerName;
    window.location.href = "game.html";
});
