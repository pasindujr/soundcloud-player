// 1. Search Soundcloud.

// 2. Query Soundcloud API.

var SoundCloudAPI = {};

SoundCloudAPI.init = function() {
  
SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});
}

SoundCloudAPI.init();

SoundCloudAPI.getTracks = function(inputValue) {

SC.get('/tracks', {
  q: inputValue,
}).then(function(tracks) {
  console.log(tracks);
});
}

SoundCloudAPI.getTracks("Sinhala songs");



// 3. Display the cards.

// 4. Add to playlist and play.