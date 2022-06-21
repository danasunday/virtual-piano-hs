document.addEventListener("keydown", function(event) {

    if (event.key === "a") {
        let audio = new Audio("audio/whiteKeys/A.mp3");
        audio.play();
    }

    else if (event.key === "s") {
        let audio = new Audio("audio/whiteKeys/S.mp3");
        audio.play();
    }

    else if (event.key === "d") {
        let audio = new Audio("audio/whiteKeys/D.mp3");
        audio.play();
    }

    else if (event.key === "f") {
        let audio = new Audio("audio/whiteKeys/F.mp3");
        audio.play();
    }

    else if (event.key === "g") {
        let audio = new Audio("audio/whiteKeys/G.mp3");
        audio.play();
    }

    else if (event.key === "h") {
        let audio = new Audio("audio/whiteKeys/H.mp3");
        audio.play();
    }

    else if (event.key === "j") {
        let audio = new Audio("audio/whiteKeys/J.mp3");
        audio.play();
    }

    else if (event.key === "w") {
        let audio = new Audio("audio/blackKeys/W.mp3");
        audio.play();
    }

    else if (event.key === "e") {
        let audio = new Audio("audio/blackKeys/E.mp3");
        audio.play();
    }

    else if (event.key === "t") {
        let audio = new Audio("audio/blackKeys/T.mp3");
        audio.play();
    }

    else if (event.key === "y") {
        let audio = new Audio("audio/blackKeys/Y.mp3");
        audio.play();
    }

    else if (event.key === "u") {
        let audio = new Audio("audio/blackKeys/U.mp3");
        audio.play();
    }

    else {console.log("Warning: another key is pressed!");}
});