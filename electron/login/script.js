const loginButton = document.getElementById('login');
const closeButton = document.getElementById('close');
const usernameInput = document.getElementById('username');
const passwordInput  = document.getElementById('password');

let loginResponse;
let localStorageData;

function saveToLocalStorage(key, { type_id, username, email, token }) {
    localStorage.setItem(key, JSON.stringify({ type_id, username, email, token }));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to handle login
function handleLogin() {
    const credentials = {
        'usernameValue': usernameInput.value,
        'passwordValue': passwordInput.value
    };

    // Send Credentials to main.js
    ipcRenderer.send('login', credentials);

    // Retrieve response from main.js
    ipcRenderer.on('login-response', (event, response) => {
        
        const errorMessage = document.getElementById('errorMessage');
        if(response === 401) {
            console.log('error 401 entered')
            errorMessage.textContent = 'Wrong username or password.'
            setTimeout (() => {
                errorMessage.textContent = '';
            },(3000))
        } else if (response === 422) {
            console.log('error 422 entered')
            errorMessage.textContent = 'Username and password required.'
            setTimeout (() => {
                errorMessage.textContent = '';
            },(3000))
        }

        loginResponse = response;
        saveToLocalStorage('loginResponse', loginResponse);
        localStorageData = getFromLocalStorage('loginResponse');

    });
    
}

loginButton.addEventListener('click', handleLogin);

passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        handleLogin();
    }
});

closeButton.addEventListener('click', () => {
    ipcRenderer.send('close-login-window');
});

closeButton.addEventListener('click', () => {
    ipcRenderer.send('close-login-window');
});