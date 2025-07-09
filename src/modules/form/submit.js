import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//Data atual para formatar o input date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e difine a data mínima do input date para a data atual
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  //Previne o comportoamento padrão do formulário
  event.preventDefault();
  console.log("Enviado");
};
