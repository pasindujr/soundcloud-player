// 1. Search Soundcloud.

// 2. Query Soundcloud API.


SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

SC.get('/tracks', {
  q: 'buskers',
}).then(function(tracks) {
  console.log(tracks);
});



// 3. Display the cards.

// 4. Add to playlist and play.