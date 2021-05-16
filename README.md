# Soundcloud Player
Simple Soundcloud playlist creator using Soundcloud API.

1. I develop these simple Soundcloud player to sharpen my JavaScript knowledge.
2. In `main.js` file there are 4 main sections to resolve as you can see.
3. Those 4 sections should be developed to get the final product "Soundcloud Player".
4. In the future there could be subsections as I develop.
5. As the time of writing this blog post Soundcloud has stopped providing free API keys, so I'm gonna use a public API key that I found on the Internet. *might get broken, let's see*
5. This post is going to get updated as I develop this.

## Developing "Query Soundcloud API" section.

1. Even though this is the 2nd section, I want to tackle this first.
2. You can read more about the "Search" function in [Soundcloud docs.](https://developers.soundcloud.com/docs/api/guide#search) 
3. I copied the code in Soundcloud docs and refactored as I want (Removed `<script>` tags, removed license filter and put the "Client Id")
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
