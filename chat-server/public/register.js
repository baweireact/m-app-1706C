const userNameInput = document.getElementById('username');
const userPwdInput = document.getElementById('userpwd');
const registerBtn = document.getElementById('registerbtn');

registerBtn.addEventListener('click', () => {
    let userName = userNameInput.value;
    let userPwd = userPwdInput.value;
    axios.post('/user/register', {userName, userPwd}).then(response => {
        console.log(response);
    })
}, false);