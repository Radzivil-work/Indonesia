// script.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.fullscreen');
  let currentIndex = 0;

  const scrollToSection = (index) => {
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleScroll = (event) => {
    const direction = event.deltaY > 0 ? 1 : -1;
    currentIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1);
    scrollToSection(currentIndex);
  };

  document.addEventListener('wheel', handleScroll);
});
