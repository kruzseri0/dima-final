let form = document.querySelector("form");
let buttomForm = document.querySelector(".btn");
let text = document.querySelector(".message");

form.onsubmit = function(event){
  event.preventDefault();
  text.textContent = "Ваша заявка отправлена.Мы вам перезвоним!";
};
