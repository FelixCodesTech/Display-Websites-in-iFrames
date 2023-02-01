const input = document.getElementById("url-input");
const btn = document.getElementById("submit-btn");
const iframe = document.getElementById("iframe");
btn.addEventListener("click", function() {
  iframe.src = input.value;
});