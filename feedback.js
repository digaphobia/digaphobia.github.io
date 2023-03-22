function showLinks() {
  var links = [
    "<h1>Please let us know what you think.<br />Have another category idea? Another element? A good example?<br />Let us know on your platform of choice:</h1>",
    "<a href='https://steamcommunity.com/groups/beyond0451' target='_blank'>Beyond 0451 on Steam</a>",
    "<a href='https://twitter.com/Beyond_0451' target='_blank'>Beyond 0451 on Twitter</a>",
    "<a href='https://www.reddit.com/user/Beyond_0451' target='_blank'>Beyond 0451 on Reddit</a>",
    "<h1>Thanks so much for trying out our tool!</h1>"
  ];

  // check if popup already exists
  var popup = document.getElementById("feedback-popup");
  if (popup) {
    popup.remove();
  }

  var linkList = document.createElement("ul");
  for (var i = 0; i < links.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = links[i];
    linkList.appendChild(listItem);
  }

  popup = document.createElement("div");
  popup.id = "feedback-popup";
  popup.classList.add("popup");
  popup.style.backgroundImage = "url('avatar.png')";
  popup.appendChild(linkList);

  var closeButton = document.createElement("button");
  closeButton.classList.add("headerbutton");
  closeButton.innerText = "Close this feedback window";
  closeButton.addEventListener("click", function() {
    popup.remove();
  });
  popup.appendChild(closeButton);

  document.body.appendChild(popup);
}

window.onload = function() {
  document.getElementById("header-button").addEventListener("click", showLinks);
};