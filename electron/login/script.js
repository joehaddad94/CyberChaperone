const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
    // console.log('login button clicked')
    ipcRenderer.send('login');
    ipcRenderer.send('close-login-window');
});