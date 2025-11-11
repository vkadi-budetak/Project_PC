const smoothScroll = () => {
  const navbar = document.querySelector(".header__nav"); // получаем навигационную панель
  const links = navbar.querySelectorAll("a"); // получаем все ссылки внутри навигационной панели

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // отменяем стандартное поведение ссылки

      const section = document.querySelector(link.getAttribute("href")); // получаем секцию по атрибуту href ссылки

      if (section) {
        seamless.scrollIntoView(section, {
          // используем библиотеку seamless для плавной прокрутки
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });
};

smoothScroll();
