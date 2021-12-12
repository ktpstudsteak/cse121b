const songs = [
    "Green Day basket case lyrics.mp3",
    "Green day-boulevard of broken dreams (clean) lyrics.wmv.mp3",
    "My Chemical Romance - Welcome to the Black Parade.mp3",
    "Nine Days - Absolutely (Story Of A Girl).mp3",
    "The All-American Rejects - Gives You Hell (Full Narrative Version).mp3",
    "The All-American Rejects - Move Along.mp3",
    "Through The Fire and The Flames.m4a"
];

const player = document.getElementById('player');

function createSongList(){
    const list = document.createElement("ol");
    songs.forEach(song => {
        let item = document.createElement("li");
        //document.createTextNode(song);
        item.appendChild(document.createTextNode(song));
        list.appendChild(item);

    //Can't get that to work for some reason, for loop it is I guess
    // for (let i = songs; i < songs.length; i++){
    //     const item = document.createElement('li');
    //     item.appendChild(document.createTextNode(songs[i]));
    //     list.appendChild(item);
    // };
    });
    return list;
}

const songList = document.getElementById('songList');
songList.appendChild(createSongList());

const links = document.querySelectorAll('li');
for (const link of links) {
    link.addEventListener("click", setSong);
}

function setSong(e) {
    document.querySelector('#mainPhoto').classList.remove('pulse');
    const source = document.getElementById('source');
    source.src = "songs/"+ e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

    player.load();
    player.play();
    document.querySelector('#mainPhoto').classList.add('pulse');
}

function playAudio() {
    if (player.readyState) {
        player.play();
    }
}

function pauseAudio() {
    player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.oninput = function(e) {
    const volume = e.target.value;
    player.volume = volume;
}

function updateProgress() {
    if (player.currentTime > 0 ) {
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100;
    }
    // console.log(player.duration);
    
}