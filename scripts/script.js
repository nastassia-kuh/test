window.onload = function () {
    let fullName = document.getElementById('fullName')
    let popup = document.getElementById('popup')
    let password = document.getElementById('password')
    let yourUsername = document.getElementById('yourUsername')
    console.log('hello')
    console.log('hello my task')
    console.log('hello your task')


    // В поле "Full Name" запретите вводить цифры
    fullName.oninput = function () {
        let numbers = /[0-9]/g;
        this.value = this.value.replace(numbers, '')
    }

    // В поле "Your username" запретите вводить точки и запятые.

    yourUsername.onkeydown = (e) => {
        let key = e.key;
        if (key === '.' || key === ',') {
            e.preventDefault()
        }
    }

    // При изменении значения чекбокса выводите в консоль соответствующее сообщение: “Согласен” или “Не согласен”.
    let check = document.getElementById('agree')
    check.onchange = changeCheckbox;

    function changeCheckbox() {
        check.checked ? console.log('согласен') : console.log('не согласен')
    }

    // цвет импутов
    function handleInputChange (event) {
        const input = event.target;
        if (input.value !== '') {
            input.style.borderColor = 'greenyellow';
        } else {
            input.style.borderColor = '#C6C6C4';
        }
    }
    const formInputs = document.querySelectorAll('form input');
    formInputs.forEach(input => {
        input.addEventListener('input', handleInputChange)
    });



// пункт 5.1
    const form = document.querySelector('form');
    function registration(event) {
        event.preventDefault();
        if (!form[0].value) {
            alert('Enter Full Name');
        } else if (!form[1].value) {
            alert('Enter Your username');
        } else if (!form[2].value) {
            alert('Enter E-mail');
        } else if (!form[3].value) {
            alert('Enter Password');
        } else if (form[3].value.length < 8) {
            alert('Your password must be at least 8 characters long!');
        } else if (form[3].value !== form[4].value) {
            alert('The passwords are different!');
        } else if (!check.checked) {
            alert('To register you must agree!');
        } else {
            form.reset();
            popup.classList.add('open');
        }
    }
    form.addEventListener('submit', registration);

    function authorization(event) {
        event.preventDefault()
        if (!form[0].value) {
            alert('Enter Username');
        } else if (!form[1].value) {
            alert('Enter Password');
        } else if (form[1].value.length < 8) {
            alert('Your password must be at least 8 characters long!');
        } else {
            alert('Hello, ' + form[0].value)
            window.location.reload()
        }
    }


    document.getElementById('okButton').onclick = function (e) {
        popup.classList.remove('open')
        moveToLoginPage()
        yourUsername.value = ''
        password.value = ''
    }
    document.getElementById('have-account').onclick = function (e) {
        moveToLoginPage()

    }

    function moveToLoginPage() {
        document.getElementById('title').innerText = 'Log in to the system'
        document.getElementById('agreeBlock').style.display = 'none';
        document.getElementById('signUp').innerHTML = 'Sign In'
        document.getElementById('have-account').style.display = 'none';

        let child = document.getElementsByClassName('child')
        for (let i = 0; i < child.length; i++) {
            if (!(i === 1 && 1 === 3)) {
                child[i].remove();
            }
        }

        form.removeEventListener('submit', registration)
        form.addEventListener('submit', authorization)
    }
}


