var title = ["Favorite Food", "Thrill of the Hunt", "Transgender Dysphoria Blues", "Where I'm From"];
var output = document.getElementById('header');
var songs = document.getElementsByClassName('fa');

function changeNowPlaying(songName) {
    output.innerHTML = "Now playing: " + songName.italics();
};

function pauseSong() {
    for (var i = 0; i < songs.length; i++) {
        songs[i].firstChild.pause();
        songs[i].className = 'fa fa-play';
    };
};
songs[0].addEventListener('click', function() {
    if (songs[0].className === 'fa fa-stop') {
        pauseSong();
    } else {
        pauseSong()
        songs[0].firstChild.play();
        songs[0].className = 'fa fa-stop';
        changeNowPlaying(title[0]);

    };
});

// songs[1].addEventListener('click', function() {
//     if (songs[1].className === 'fa fa-play') {
//         pauseSong();
//         songs[1].firstChild.play();
//         songs[1].className = 'fa fa-stop';
//         changeNowPlaying(title[1]);
//     } else {
//         pauseSong()
//     };
// });
// songs[2].addEventListener('click', function() {
//     if (songs[2].className === 'fa fa-play') {
//         pauseSong();
//         songs[2].firstChild.play();
//         songs[2].className = 'fa fa-stop';
//         changeNowPlaying(title[2]);
//     } else {
//         pauseSong()
//     };
// });
//
// songs[3].addEventListener('click', function() {
//     if (songs[3].className === 'fa fa-play') {
//         pauseSong();
//         songs[3].firstChild.play();
//         songs[3].className = 'fa fa-stop';
//         changeNowPlaying(title[3]);
//     } else {
//         pauseSong()
//     };
// });
