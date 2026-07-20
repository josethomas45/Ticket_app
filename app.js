// Common Utility Functions

/**
 * Navigates to a specified page with a slight delay to allow any micro-animations to finish.
 * @param {string} url - The URL to navigate to.
 */
function navigateTo(url) {
    // You could add a fade-out effect here on body before navigating
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.3s ease";
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

/**
 * Utility to extract query parameters from URL
 * @param {string} param - The parameter to get
 * @returns {string|null} - Parameter value or null
 */
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fade in effect when page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    requestAnimationFrame(() => {
        document.body.style.transition = "opacity 0.4s ease";
        document.body.style.opacity = 1;
    });
});
