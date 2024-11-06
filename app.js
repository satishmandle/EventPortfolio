const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Add transformation class
      } else {
        entry.target.classList.remove('active'); // Remove class when not in view
      }
    });
  }, { threshold: 0.6 });
  
  // Use your custom class to observe these elements
  document.querySelectorAll('.comman').forEach(div => observer.observe(div));


  // JavaScript for infinite scrolling effect
document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('.scroll-container');
  let scrollAmount = 0;

  function scrollImages() {
      scrollAmount -= 2; // Adjust speed by changing this value

      // Reset position when end is reached
      if (Math.abs(scrollAmount) >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
      }

      scrollContainer.style.transform = `translateX(${scrollAmount}px)`;
      requestAnimationFrame(scrollImages);
  }

  // Clone child elements to create an infinite scroll effect
  const clones = scrollContainer.cloneNode(true);
  scrollContainer.appendChild(clones);

  // Start the animation
  scrollImages();
});
