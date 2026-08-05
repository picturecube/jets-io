usernameForm = $('#player-name-form');

usernameForm.on('submit', function(event) {
    event.preventDefault();
    console.log("Form submitted");
    const playerName = $('#player-name-input').val();
    document.cookie = "playerName=" + playerName;
    window.location.href = "https://picturecube.github.io/jets-io/game.html";
});
