export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      //removendo a classe hour-selected de todos os horários não selecionados
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });
      //Adiciona a classe na li clicada
      selected.target.classList.add("hour-selected");
    });
  });
}
