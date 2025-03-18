// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1° Declarar un array para almacenar los nombres de los amigos
let amigos = [];

// 2° Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim(); // Obtener y limpiar el valor

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la función si el campo está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre); // Agregar el nombre al array

    // Limpiar el campo de entrada
    nombreInput.value = "";

    // Actualizar la lista en la página
    actualizarLista();
}

// 3° Función para mostrar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo y agregar cada nombre como un elemento <li>
    amigos.forEach((nombre) => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// 4° Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return; // Detener la función si no hay nombres
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}