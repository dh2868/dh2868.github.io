document.addEventListener("DOMContentLoaded", function() {
    // Fade in on page load
    setTimeout(function() {
        document.querySelector('.home-content').classList.add('fade-in');
    }, 50); // Small delay to ensure the CSS transition takes effect

    // Fade out on page unload (e.g., when clicking a link)
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let href = this.getAttribute('href');

            // Fade out
            document.querySelector('.home-content').classList.remove('fade-in');

            // Redirect to the link after the fade out effect is complete
            setTimeout(function() {
                window.location.href = href;
            }, 500); // This timeout should match the transition duration in the CSS
        });
    });
});