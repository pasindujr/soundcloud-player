// 1. Search Soundcloud.

var Search = {};

Search.pressEnter = function() {
	var search = document.querySelector(".input-search");
	search.addEventListener("keyup", function(e) {
		if(e.which == 13){
			SoundCloudAPI.getTracks(search.value);
		}
	});
}

Search.pressEnter();

Search.click = function() {
	var search = document.querySelector(".js-submit");
	search.addEventListener("click", function() {
		var input = document.querySelector(".input-search");
		SoundCloudAPI.getTracks(input.value);
	});
	
}

Search.click();


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
		q: inputValue
	}).then(function (tracks) {
		console.log(inputValue);
		SoundCloudAPI.renderTracks(tracks);
	});
};

// 3. Display the cards.

SoundCloudAPI.renderTracks = function (tracks) {
	tracks.forEach(function (track) {
		//card
		var card = document.createElement("div");
		card.classList.add("card");

		//image
		var imageDiv = document.createElement("div");
		imageDiv.classList.add("image");

		var image_img = document.createElement("img");
		image_img.classList.add("image_img");
		image_img.src =
			track.artwork_url ||
			"https://cdn.icon-icons.com/icons2/2592/PNG/512/soundcloud_logo_icon_154496.png";

		imageDiv.appendChild(image_img);

		//content
		var content = document.createElement("div");
		content.classList.add("content");

		var header = document.createElement("div");
		header.classList.add("header");
		header.innerHTML =
			"<a href = " +
			track.permalink_url +
			" target = _blank>" +
			track.title +
			"</a>";

		//button
		var button = document.createElement("div");
		button.classList.add("ui", "bottom", "attached", "button", "js-button");

		var icon = document.createElement("i");
		icon.classList.add("add", "icon");

		var buttonText = document.createElement("span");
		button.innerHTML = "Add to playlist ";

		//appendChild
		content.appendChild(header);

		button.appendChild(icon);
		button.appendChild(buttonText);

		button.addEventListener("click", function () {
			SoundCloudAPI.getEmbed(track.permalink_url);
		});

		card.appendChild(imageDiv);
		card.appendChild(content);
		card.appendChild(button);

		var searchResults = document.querySelector(".js-search-results");
		searchResults.appendChild(card);
	});
};

// 4. Add to playlist and play.

SoundCloudAPI.getEmbed = function (trackURL) {
	SC.oEmbed(trackURL, {
		auto_play: false,
	}).then(function (embed) {
		console.log("oEmbed response: ", embed);

		var sideBar = document.querySelector(".js-playlist");

		var box = document.createElement("div");
		box.innerHTML = embed.html;

		sideBar.insertBefore(box, sideBar.firstChild);
		localStorage.setItem("key", sideBar.innerHTML)
	});
};

var sideBar = document.querySelector(".js-playlist");
sideBar.innerHTML = localStorage.getItem("key");

// 5. Reset function
var reset = document.querySelector(".reset-button");
reset.addEventListener("click", function () {
	localStorage.clear();
});

