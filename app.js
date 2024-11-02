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
