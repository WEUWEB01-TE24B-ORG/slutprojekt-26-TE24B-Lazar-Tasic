const temaKnapp = document.querySelector("#temaKnapp");

temaKnapp.addEventListener("click", function () {
  document.body.classList.toggle("morkt-tema");

  if (document.body.classList.contains("morkt-tema")) {
    temaKnapp.textContent = "Byt till ljust tema";
  } else {
    temaKnapp.textContent = "Byt tema";
  }
});
