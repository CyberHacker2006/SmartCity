// Example functionality for navigation interactivity
document.addEventListener("DOMContentLoaded", () => {
    console.log("SmartCity Solutions Loaded!");
});

// JS For Contact Information
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    alert('Thank you, ' + name + '! Your message has been sent successfully.');
    this.reset();
});