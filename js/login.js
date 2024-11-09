/* ESTE CODIGO FUE REALIZADO CON LAS CLASES DE CODER Y TUTORIALES EN YT */


/* alterno entre el formulario de inicio de sesion y de registro */
function toggleForm() {
    document.getElementById("loginForm").classList.toggle("hidden");
    document.getElementById("registerForm").classList.toggle("hidden");
    // Limpiar mensajes
    document.getElementById("loginMessage").innerText = "";
    document.getElementById("registerMessage").innerText = "";
}

/* funcion para registrar */

function register() {
    const user = document.getElementById("registerUser").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const registerMessage = document.getElementById("registerMessage");

    // Validar que todos los campos estén llenos
    if (user === "" || email === "" || password === "") {
        registerMessage.innerText = "Por favor, completa todos los campos.";
        return;
    }

    // Guardar datos en localStorage
    const userData = {
        user: user,
        email: email,
        password: password
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    registerMessage.innerText = "Registro exitoso. Ahora inicia sesión.";
    registerMessage.style.color = "green";

    // Limpiar campos y cambiar a formulario de inicio de sesión
    setTimeout(() => {
        toggleForm();
    }, 1500);
}



/* Funcion para el inico de sesion */
// Función para iniciar sesión
function login() {
    const user = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPassword").value;
    const loginMessage = document.getElementById("loginMessage");

    // Obtener datos del usuario desde localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedUserData) {
        loginMessage.innerText = "No tienes cuenta. Por favor, regístrate.";
        return;
    }

    // Validar usuario y contraseña
    if (user === storedUserData.user && password === storedUserData.password) {
        loginMessage.innerText = "Inicio de sesión exitoso. Redirigiendo...";
        loginMessage.style.color = "green";
        

        // Redirigir después de un breve retraso
        setTimeout(() => {
            window.location.href = "./pages/todosLosProductos.html"; // Redirige a la página principal
        }, 1500);
    } else {
        loginMessage.innerText = "Usuario o contraseña incorrectos.";
    }
}
