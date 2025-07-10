import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//Data atual para formatar o input date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e difine a data mínima do input date para a data atual
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  //Previne o comportment padrão do formulário
  event.preventDefault();
  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do cliente");
    }

    //Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Selecione o horário de atendimento!");
    }

    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    //Gera um ID
    const id = new Date().getTime();
    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert(
      "Não foi possível realizar o agendamento. Tente novamente mais tarde."
    );
    console.log(error);
  }
};
