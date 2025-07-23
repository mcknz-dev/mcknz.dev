// ==============================
// DARK / LIGHT MODE TOGGLE
// ==============================

// Get the theme toggle button element
const toggleBtn = document.getElementById('theme-toggle');

// Get the icon inside the button (moon/sun)
const icon = toggleBtn.querySelector('i');

// Add a click event listener to toggle the theme
toggleBtn.addEventListener('click', () => {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is now active
    const isDark = document.body.classList.contains('dark-mode');

    // Swap icons between moon and sun
    icon.classList.toggle('fa-moon', !isDark); // show moon icon in light mode
    icon.classList.toggle('fa-sun', isDark);   // show sun icon in dark mode
});

document.addEventListener("DOMContentLoaded", function () {
    const part1 = "MCKNZ";
    const part2 = ".DEV";
    const orangeSpan = document.querySelector("#typed-logo .orange");
    const greySpan = document.querySelector("#typed-logo .grey");
    let index = 0;

    function typeFirst() {
        if (index < part1.length) {
            orangeSpan.innerHTML += part1.charAt(index);
            index++;
            setTimeout(typeFirst, 200);
        } else {
            index = 0;
            setTimeout(typeSecond, 400);
        }
    }

    function typeSecond() {
        if (index < part2.length) {
            greySpan.innerHTML += part2.charAt(index);
            index++;
            setTimeout(typeSecond, 200);
        }
    }

    typeFirst();
});