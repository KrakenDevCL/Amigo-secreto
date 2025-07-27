/* Funcionalidades:

1. Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al 
hacer clic en "Adicionar".

2. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

3. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

//Variables
//Crear un array para almacenar los nombres
let amigos = [];
let nombre = '';
let lista = '';

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    nombre = document.getElementById("amigo").value;
    //Validar la entrada
    if (nombre != '') {
        //Actualizar el array de amigos
        amigos.push(nombre);
        actualizarAmigo();
        //Limpiar el campo de entrada
        document.getElementById("amigo").value = '';
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

//Implementa una función para actualizar la lista de amigos
function actualizarAmigo() {
    //Obtener el elemento de la lista
    lista = document.querySelector('#listaAmigos');
    //Limpiar la lista existente
    lista.innerHTML = ' ';
    //Iterar sobre el arreglo
    for (var i = 0; i < amigos.length; i++) {
        //Agregar elementos a la lista
        lista.innerHTML += '<p>' + amigos[i] +'</p>';
    }
}

//Implementa una función para sortear los amigos
function sortearAmigo() {
    
}