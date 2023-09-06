const loginButton = document.getElementById('login');
const closeButton = document.getElementById('close');

loginButton.addEventListener('click', () => {
    // console.log('login button clicked')
    ipcRenderer.send('login');
    ipcRenderer.send('close-login-window');
});

closeButton.addEventListener('click', () => {
    // console.log('login button clicked')
    ipcRenderer.send('close-login-window');
});