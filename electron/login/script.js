document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('login');
  
    homeButton.addEventListener('click', () => {
      window.location.href = '../home/index.html'; // Redirect to the home.html page
    });
});