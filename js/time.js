const time = () => {
  const daysBlock = document.querySelector(".timer__days"); // Получаем элементы для дней, часов, минут и секунд
  const hoursBlock = document.querySelector(".timer__hours"); // Получаем элементы для часов, минут и секунд
  const minutesBlock = document.querySelector(".timer__minutes"); // Получаем элементы для часов, минут и секунд
  const secondsBlock = document.querySelector(".timer__seconds"); // Получаем элементы для часов, минут и секунд

  let interval; // Переменная для хранения интервала

  // Функция для выбора правильного склонения слова
  const numWord = (value, words) => {
    value = Math.abs(value) % 100; // Получаем абсолютное значение и берем последние две цифры

    const lastNum = value % 10; // Получаем последнюю цифру

    // Проверяем условия для выбора правильного склонения
    if ((value > 10) & (value < 20)) return words[2]; // Если число от 11 до 19
    if (lastNum > 1 && lastNum < 5) return words[1]; // Если последняя цифра от 2 до 4
    if (lastNum == 1) return words[0]; // Если последняя цифра 1
    return words[2]; // Во всех остальных случаях
  };

  // Функция для обновления таймера
  const updateTimer = () => {
    const date = new Date(); // Текущая дата и время
    const dateDeadline = new Date("30 november 2025").getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    // Вычисляем часы, минуты и секунды
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    // Добавляем 0, если число меньше 10
    const fDays = days < 10 ? "0" + days : days;
    const fHours = hours < 10 ? "0" + hours : hours;
    const fMinutes = minutes < 10 ? "0" + minutes : minutes;
    const fSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Обновляем содержимое элементов
    daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fMinutes;
    secondsBlock.textContent = fSeconds;

    // Обновляем склонения слов
    secondsBlock.nextElementSibling.textContent = numWord(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);

    minutesBlock.nextElementSibling.textContent = numWord(minutes, [
      "минутa",
      "минуты",
      "минут",
    ]);

    hoursBlock.nextElementSibling.textContent = numWord(hours, [
      "час",
      "часа",
      "часов",
    ]);

    daysBlock.nextElementSibling.textContent = numWord(days, [
      "день",
      "дня",
      "дней",
    ]);

    // Обновляем оставшееся время
    if (timeRemaining <= 0) {
      clearInterval(interval);
      daysBlock.textContent = "00";
      hoursBlock.textContent = "00";
      minutesBlock.textContent = "00";
      secondsBlock.textContent = "00";

      // Изменяем цвет текста на красный
      daysBlock.style.color = "red";
      hoursBlock.style.color = "red";
      minutesBlock.style.color = "red";
      secondsBlock.style.color = "red";

      // Останавливаем обновление таймера
      return;
    }
  };

  updateTimer(); // Вызываем функцию сразу для инициализации
  interval = setInterval(updateTimer, 500); // Обновляем таймер каждую секунду
};

time();
