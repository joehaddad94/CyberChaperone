const loginButton = document.getElementById('login');
const closeButton = document.getElementById('close');
const usernameInput = document.getElementById('username');
const passwordInput  = document.getElementById('password');

let loginResponse;

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

loginButton.addEventListener('click', () => {
    const credentials = {
        'usernameValue': usernameInput.value,
        'passwordValue': passwordInput.value
    }
    console.log(credentials)

    //Send Credentials to main.js
    ipcRenderer.send('login', credentials);

    //Retrieve response from main.js
    ipcRenderer.on('login-response', (event, response) => {
        loginResponse = response
        saveToLocalStorage('loginResponse', loginResponse);
        console.log('loginResponse', loginResponse)
    });


    // ipcRenderer.send('close-login-window');
});

closeButton.addEventListener('click', () => {
    ipcRenderer.send('close-login-window');
});