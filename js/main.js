'use strict';

class Contactos {

    constructor(nombre, numero, correo) {
        this.nombre = nombre;
        this.numero = numero;
        this.correo = correo;
    }

}

class UI {
    addContact(contacto) {
        const listaContactos = document.getElementById("lista-contactos");
        const element = document.createElement("div");

        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Nombre</strong>: ${contacto.nombre} -
                <strong>Numero</strong>: ${contacto.numero} - 
                <strong>Correo</strong>: ${contacto.correo}
                <a href="#" class="btn btn-outline-danger" name="delete">Delete</a>
            </div>
        </div>
    `;

    listaContactos.appendChild(element);
    }

    resetForm(){
        document.getElementById("contactos").reset();
    }

    eliminarContacto(element) {
        if (element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    showMessage(message, cssClass ) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-3`;
        div.appendChild(document.createTextNode(message));
    
        // Mostrar en el DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
    
        // Insertar mensaje en la interfaz de usuario
        container.insertBefore(div, app);
    
        // Eliminar el mensaje después de 5 segundos
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 5000);
    }

}

// dom eventos agregar contatos
document.getElementById("contactos").addEventListener('submit', function(e){
   const nombre = document.getElementById("nombre").value;
   const numero = document.getElementById("numero").value;
   const correo = document.getElementById("correo").value;

   const contactos = new Contactos(nombre, numero, correo);
   const ui = new UI();

   if (nombre === '' || numero === '' || correo === ''){
       return ui.showMessage('Complete los campos por favor', 'danger');
   }
   
   ui.addContact(contactos);
   ui.resetForm();
   ui.showMessage('Contacto agregado correctamente', 'success');

   e.preventDefault();
});

//eliminar contacto
document.getElementById("lista-contactos").addEventListener('click', function(e){
    const ui = new UI();
    ui.eliminarContacto(e.target);
    ui.showMessage('Contacto eliminado correctamente', 'danger');
});



		
		




