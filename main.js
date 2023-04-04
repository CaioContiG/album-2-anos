lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

// Song Index
let index = 0;
//   Elements
const music = document.querySelector('#player');
const song = document.querySelector('#song');
let current = document.querySelector('.current');
//   Array Song Path
const playlist = [
  'musica/found_you.mp3',
  'musica/snowman.mp3',
  'musica/CICYTN.mp3',
];
// set src
song.src = playlist[index];
player.load();
player.play();
player.volume = 0.1;
current.innerHTML = playlist[index]

// Play Next song when song end
player.addEventListener('ended', () => {
  index += 1;
  console.log(`Next Song:${playlist[index]}`);
  // Check Playlist end
  index == playlist.length ? (index = 0) : '';
  // change src
  song.src = playlist[index];
  // Play song
  player.load();
  player.play();
  current.innerHTML = playlist[index]
});