let yesButton = document.getElementById("yesBtn");
let noButton = document.getElementById("noBtn");
let popup = document.getElementById("popup");
let popupImage = document.getElementById("popupImage");
let popupMessage = document.getElementById("popupMessage");

noButton.addEventListener("click", function() {
  noButton.style.display = "none"; // Make No button disappear
  popup.style.display = "block";  // Show the popup
  popupImage.src = "images/angry.jpg";
  popupMessage.textContent = "Nganong ni NO man tahay ka?";
});

yesButton.addEventListener("click", function() {
  popup.style.display = "block";
  popupImage.src = "images/kiss.jpg";
  popupMessage.textContent = "Thank you for saying Yes! Iloveyouuu 💖";
});

function closePopup() {
  popup.style.display = "none";
}