const loginButton = document.getElementById('login');
const closeButton = document.getElementById('close');
const usernameInput = document.getElementById('username');
const passwordInput  = document.getElementById('password');

loginButton.addEventListener('click', () => {
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    const credentials = {
        'usernameValue': usernameInput.value,
        'passwordValue': passwordInput.value
    }
    console.log(credentials)

    ipcRenderer.send('login', credentials);
    // ipcRenderer.send('close-login-window');
});

closeButton.addEventListener('click', () => {
    ipcRenderer.send('close-login-window');
});