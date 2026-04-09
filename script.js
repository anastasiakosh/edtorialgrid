document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.ed-img');
    
    // Add the starting hidden state class to all images
    images.forEach(img => img.classList.add('fade-up'));

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay based on the index of the image in the grid
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); // 150ms delay between each image appearing
                
                // Unobserve after revealing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(img => {
        observer.observe(img);
    });
});