const sendForm = () => {
  // Функция отправки формы
  const form = document.querySelector(".modal"); // Находим форму на странице

  // Добавляем обработчик события отправки формы
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем значения полей формы
    const text = form.querySelector('input[type="text"]');
    const tel = form.querySelector('input[type="tel"]');
    const email = form.querySelector('input[type="email"]');

    // Проверяем, что все поля заполнены
    if (!text.value.trim() || !tel.value.trim() || !email.value.trim()) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    // Создаем объект с данными формы
    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    // Отправляем данные на сервер (здесь используется заглушка)
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendObj), // Преобразуем объект в JSON
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        return response.json(); // Преобразуем ответ в JSON
      })
      .then((json) => {
        console.log("Ответ сервера:", json); // Выводим ответ в консоль
        alert(
          "Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время."
        );

        // Очищаем поля формы
        form.reset();

        // Закрываем модальное окно
        form.style.display = "none";
      })
      .catch((error) => {
        // Обрабатываем ошибки
        console.error("Ошибка при отправке:", error);
        alert(
          "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже."
        );
      })
      .finally(() => {
        console.log("Форма очищена");
      });
  });
};

sendForm();
