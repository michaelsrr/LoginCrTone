// Función para abrir el modal de Login
function openLoginModal() {
    closeAllModals();
    document.getElementById('loginModal').style.display = 'flex';
}

// Función para abrir el modal de "Olvidé mi contraseña"
function openForgotPasswordModal() {
    closeAllModals();
    document.getElementById('forgotPasswordModal').style.display = 'flex';
}

// Función para abrir el modal de Registro
function openRegisterModal() {
    closeAllModals();
    document.getElementById('registerModal').style.display = 'flex';
}

// Función para cerrar un modal específico
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Función para cerrar todos los modales abiertos
function closeAllModals() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('forgotPasswordModal').style.display = 'none';
    document.getElementById('registerModal').style.display = 'none';
}

// Función para redirigir al Dashboard desde el botón de Registro
function goToDashboard() {
    window.location.href = 'dashboard.html'; // Cambiar a la vista del dashboard
}
