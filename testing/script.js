// Add smooth scrolling animation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.container section');
    const scrollPosition = window.scrollY;
  
    sections.forEach((section, index) => {
      const offset = section.offsetTop;
      const height = section.offsetHeight;
      const triggerPoint = offset + height / 3; // Start animation at 1/3 of section
  
      if (scrollPosition > triggerPoint) {
  