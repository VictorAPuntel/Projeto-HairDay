import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    //Recupera somente as horas
    const [schedulesHour] = hour.split(":");

    //Adiciona a hora na data e verifica se é válida
    const isHourPast = dayjs(date).add(schedulesHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });

  //Renderizar os horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    hours.append(li);
  });
}
