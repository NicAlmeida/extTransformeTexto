window.document.addEventListener("DOMContentLoaded", function () {
  window.document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.toUpperCase();
    });

  window.document
    .querySelector("#btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.toLowerCase();
    });

  window.document
    .querySelector("#btnTitulo")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      let titulo =
        inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
      document.querySelector("#result").innerHTML = titulo;
    });

  window.document
    .querySelector("#btnLimpar")
    .addEventListener("click", function () {
      document.querySelector("#input-text").value = "";
      document.querySelector("#result").innerHTML = "";
      document.querySelector("#input-text").focus();
    });

  window.document
    .querySelector("#btnInverter")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      let invertido = inputText.split("").reverse().join("");
      document.querySelector("#result").innerHTML = invertido;
    });
});
