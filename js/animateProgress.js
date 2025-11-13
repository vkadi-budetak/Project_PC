const animateProgress = () => {
  const numberElement = document.querySelector(
    ".course__progress-label .course__number"
  );
  const progressBar = document.querySelector(
    ".course__progress-element progress"
  );

  const targetValue = 400000;
  const maxValue = 1000000;
  const duration = 2000;
  const startTime = Date.now();

  numberElement.textContent = "0₽";
  progressBar.value = 0;

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const animate = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeOutQuad = (t) => t * (2 - t);
    const currentValue = Math.floor(targetValue * easeOutQuad(progress));

    numberElement.textContent = formatNumber(currentValue) + "₽";

    progressBar.value = currentValue;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      numberElement.textContent = formatNumber(targetValue) + "₽";
      progressBar.value = targetValue;
    }
  };

  animate();
};

window.addEventListener("DOMContentLoaded", animateProgress);
