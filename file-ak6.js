document.addEventListener('DOMContentLoaded', () => {

    // --- Simple Add to Cart functionality ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartIconLink = document.querySelector('.cart-icon a');

    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartIconLink.textContent = `Cart (${cartCount})`;
            
            // Provide feedback to the user
            const originalText = button.textContent;
            button.textContent = 'Added!';
            button.style.backgroundColor = 'green';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = ''; // Reset to original style from CSS
            }, 1500);
        });
    });

    // --- Simple Contact Form handling ---
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from actually submitting
        
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Clear the form fields
    });

});