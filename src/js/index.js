document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.fullscreen');
  let currentIndex = 0;
  let isScrolling = false; // Флаг для предотвращения двойной прокрутки

  const scrollToSection = (index) => {
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleScroll = (event) => {
    if (isScrolling) return; // Если скролл еще выполняется — игнорируем новые события

    isScrolling = true;

    const direction = event.deltaY > 0 ? 1 : -1;
    const newIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1);

    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      scrollToSection(currentIndex);
    }

    // Сбрасываем флаг через время, равное длительности анимации (например, 600 мс)
    setTimeout(() => {
      isScrolling = false;
    }, 600);
  };

  document.addEventListener('wheel', handleScroll);
});