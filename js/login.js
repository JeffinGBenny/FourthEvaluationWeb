document.addEventListener('DOMContentLoaded', function (
    ) {
        const form = document.getElementById('frm')
        const nameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const nameError = document.getElementById('FullNameError');
        const passwordError = document.getElementById('passwordError')

    form.addEventListener('submit', function (event) {
        event.preventDefault();
       if (!nameInput.value.trim()) {
            nameError.textContent = 'name is required';
        }
        else {
            nameError.textContent = '';
        }
        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'password is required';
        }
        else {
            passwordError.textContent = '';
        }
        if(nameInput.value==="admin"&&passwordInput.value==="12345"){
            window.location.href ="/html/adminView.html"
        }
        else if(nameInput.value==="user"&&passwordInput.value==="12345"){
            window.location.href ="/html/RequestForm.html"
        }
    });
});