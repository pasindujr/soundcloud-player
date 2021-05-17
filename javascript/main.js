// 1. Search Soundcloud.

// 2. Query Soundcloud API.

var SoundCloudAPI = {};

SoundCloudAPI.init = function () {
	SC.initialize({
		client_id: "cd9be64eeb32d1741c17cb39e41d254d",
	});
};

SoundCloudAPI.init();

SoundCloudAPI.getTracks = function (inputValue) {
	SC.get("/tracks", {
		q: inputValue,
	}).then(function (tracks) {
		console.log(tracks);
	});
};

SoundCloudAPI.getTracks("Sinhala songs");

SoundCloudAPI.renderTracks = function () {
	var card = document.createElement("div");
	card.classList.add("card");
	var searchResults = document.querySelector(".js-search-results");
	searchResults.appendChild(card);

	var image = document.createElement("div");
	image.classList.add("image");
	var imageAndContentSelector = document.querySelector(".card");
	imageAndContentSelector.appendChild(image);

  var img = document.createElement("img");
  img.classList.add("image_img");
  var imgSelector = document.querySelector(".image");

  var content = document.createElement("div");
  content.classList.add("content");
  imageAndContentSelector.appendChild(content);

  var ui = document.createElement("div");
  ui.classList.add = ("ui", "bottom", "attached", "button", "js-button");
  var uiSelector = document.querySelector(".card");
  uiSelector.appendChild(ui);

  var icon = document.createElement("i");
  icon.classList.add = ("add", "icon");
  var iconAndSpanSelector = document.querySelector(".ui");
  iconAndSpanSelector.appendChild(icon);

  var span = document.createElement("span");
  iconAndSpanSelector.appendChild(span);
  span.innerHTML = ("Add to playlist")


};

SoundCloudAPI.renderTracks();

// 3. Display the cards.

// 4. Add to playlist and play.
