const modalBtn = document.querySelector(".modal__button"); // получаем кнопку для открытия модального окна

const modal = document.querySelector(".modal"); // получаем модальное окно

// вешаем обработчик события на кнопку
modalBtn.addEventListener("click", () => {
  // при клике на кнопку
  modal.style.display = "flex"; // показываем модальное окно
});

modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner"); // проверяем, был ли клик внутри содержимого модального окна

  if (!modalContent) {
    modal.style.display = "";
  }
});
// event - содержит информацию о событии
