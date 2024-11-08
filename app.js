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



document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.event-card');
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the card is in view
    };

    // Callback function for the observer
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add active class when in center
            } else {
                entry.target.classList.remove('active'); // Remove when out of center
            }
        });
    };

    // Initialize the IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, options);
    cards.forEach(card => observer.observe(card)); // Observe each card
});





document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.event-card');
  const options = {
      root: null, // Use viewport as root
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the card is visible
  };

  // Callback function for the observer
  const observerCallback = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add 'active' class to the centered card
              entry.target.classList.add('active');
          } else {
              // Remove 'active' class when it's no longer centered
              entry.target.classList.remove('active');
          }
      });
  };

  // Initialize IntersectionObserver
  const observer = new IntersectionObserver(observerCallback, options);
  cards.forEach(card => observer.observe(card)); // Observe each card
});
