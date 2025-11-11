const modal = () => {
  const modalBtn = document.querySelector(".modal__button"); // получаем кнопку для открытия модального окна

  const modal = document.querySelector(".modal"); // получаем модальное окно

  const modalClose = document.querySelector(".modal__close"); // получаем кнопку закрытия модального окна

  // вешаем обработчик события на кнопку
  modalBtn.addEventListener("click", () => {
    // при клике на кнопку
    modal.style.display = "flex"; // показываем модальное окно
  });

  // вешаем обработчик события на кнопку закрытия
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // вешаем обработчик события на модальное окно
  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner"); // проверяем, был ли клик внутри содержимого модального окна

    if (!modalContent) {
      modal.style.display = "none"; // если клик был вне содержимого, закрываем модальное окно
    }
  });

  // вешаем обработчик события на документ для закрытия модального окна по нажатию клавиши Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
    }
  });
  // event - содержит информацию о событии
};

modal();
