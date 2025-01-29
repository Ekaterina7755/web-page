document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Очищаем ошибки перед новой проверкой
    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    if (!name.trim() || !email.trim() || !message.trim()) {
        alert("Пожалуйста, заполните все поля.");
        event.preventDefault();
        // Добавляем класс ошибки, чтобы выделить незаполненные поля
        if (!name.trim()) document.getElementById('name').classList.add('error');
        if (!email.trim()) document.getElementById('email').classList.add('error');
        if (!message.trim()) document.getElementById('message').classList.add('error');
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Введите правильный адрес электронной почты.");
        event.preventDefault();
        document.getElementById('email').classList.add('error');
    }
});
