// Basic JavaScript for interactivity (e.g., alert on sign-up button click)
document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            alert('Redirecting to sign-up page... (This is a dummy action)');
            // In a real site, this could redirect: window.location.href = 'https://grok.com/plans';


        });
    }
});