# SoundCloud Player
Simple SoundCloud playlist creator using Soundcloud API.

1. I develop these simple SoundCloud player to sharpen my JavaScript knowledge.
2. In `main.js` file there are 4 main sections to resolve as you can see.
3. Those 4 sections should be developed to get the final product "Soundcloud Player".
4. In the future there could be subsections as I develop.
5. As the time of writing this blog post SoundCloud has stopped providing free API keys, so I'm gonna use a public API key that I found on the Internet. *might get broken, let's see*
5. This post is going to get updated as I develop this.

## Query Soundcloud API.

1. Even though this is the 2nd section, I want to tackle this first.
2. You can read more about the "Search" function in [Soundcloud docs.](https://developers.soundcloud.com/docs/api/guide#search) 
3. I copied the code in SoundCloud docs and refactored as I want (Removed `<script>` tags, removed license filter and put the "Client Id")
```
SC.initialize({
  client_id: 'Client Id'
});

SC.get('/tracks', {
  q: 'buskers',
}).then(function(tracks) {
  console.log(tracks);
});
```
4. Then I created `SoundCloudAPI` object and `SoundCloudAPI.init()`, `SoundCloudAPI.getTracks()` functions, so I can call those functions easily.
```
SoundCloudAPI.init = function() {
  
SC.initialize({
  client_id: 'Client Id'
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
```

## Displaying Cards.

1. Created `renderTracks()` function to print/render all the result tracks as cards, so the cards can be rendered dynamically and easily looped through.
2. Inside the function I created the card dynamically using `createElement()`, `classList` and `appendChild()` methods.
3. Finally called the API endpoints dynamically.

## Add to playlist and play.

1. Grabbed the code for embedded player from [SoundCloud docs.](https://developers.soundcloud.com/docs/api/sdks#embedding)
```
SC.oEmbed('https://soundcloud.com/forss/flickermood', {
  auto_play: true
}).then(function(embed){
  console.log('oEmbed response: ', embed);
});
```
4. Modified the code to place the "embedded player" on the left sidebar and pass the music dynamically (Music passing `clickEvent` is coded inside "Displaying Cards" section)
5. Used `insertBefore()` method to stack the music in the `.js-playlist` div.