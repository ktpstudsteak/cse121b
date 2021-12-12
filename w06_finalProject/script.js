const songs = [
    "American Idiot w_Lyrics (Clean).mp3",
    "Green Day basket case lyrics.mp3",
    "Green day-boulevard of broken dreams (clean) lyrics.wmv.mp3",
    "My Chemical Romance - Welcome to the Black Parade.mp3",
    "Nine Days - Absolutely (Story Of A Girl).mp3",
    "The All-American Rejects - Gives You Hell (Full Narrative Version).mp3",
    "The All-American Rejects - Move Along.mp3"
];

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

songList.onclick = function(e) {
    const source = document.getElementById('source');
    source.src = "songs/"+ e.target.innerText;
}