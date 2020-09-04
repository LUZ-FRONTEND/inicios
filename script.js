const input = document.querySelector(".js-input");
const submit = document.querySelector(".js-submit");
const resultado = document.querySelector(".js-resultado");

const unaFuncion = (event) => {
  event.preventDefault();
  if (input.value !== "") {
    const horas = input.value;
    const minutos = horas * 60;
    const segundos = minutos * 60;
    resultado.textContent = segundos + " segundos";
    resultado.classList.add("mostrar");
  }
};

const otraFuncion = (event) => {
  if (input.value !== "") {
    const horas = input.value;
    const minutos = horas * 60;
    const segundos = minutos * 60;
    resultado.textContent = segundos + " segundos";
    resultado.classList.add("mostrar");
  } else {
    resultado.classList.remove("mostrar");
  }
};

submit.addEventListener("click", unaFuncion);
input.addEventListener("keyup", otraFuncion);
input.addEventListener("change", otraFuncion);
