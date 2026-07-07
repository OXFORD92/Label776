
function hideBillet() {
  const billet = document.getElementById("billet");
  billet.style.display = "none";
  billet.innerHTML = ""; // nettoie l'ancien widget
  document.body.classList.toggle("body_noscool");
}
