document.querySelectorAll('#delay').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        const targetId = link.getAttribute('href'); // Get the target section ID
        setTimeout(() => {
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }, 100); // 1000ms delay (1 second)
    });
});
