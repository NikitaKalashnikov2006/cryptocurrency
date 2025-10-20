// Функции для модального окна пароля
function showPasswordModal() {
    document.getElementById('passwordModal').style.display = 'block';
}

function closePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordError').textContent = '';
}

function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const errorElement = document.getElementById('passwordError');
    
    if (password === '111111') {
        window.location.href = 'test.html';
    } else {
        errorElement.textContent = 'Неверный пароль. Попробуйте еще раз.';
    }
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('passwordModal');
    if (event.target === modal) {
        closePasswordModal();
    }
}

// Обработка нажатия Enter в поле пароля
document.getElementById('passwordInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});