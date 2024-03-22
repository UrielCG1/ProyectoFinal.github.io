function toggleMe() {
  var x = document.getElementById("demo");

  x.style.display = x.style.display === "none" ? "block" : "none";

  var buttonText = x.style.display === "none" ? "Mostrar!" : "ocultar!";
  document.getElementById("toggleButton").textContent = buttonText;
}
