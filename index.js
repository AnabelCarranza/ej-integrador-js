
const agregarMesa = () => {
    const numeroDeMesa = document.querySelector('input').value
    const mesa = new Mesa(numeroDeMesa);
    manejadorDeMesas.agregar(mesa);

    const tr = document.createElement('tr');
    const tdNumero = document.createElement('td');
    tdNumero.innerText = numeroDeMesa;

    const cuenta = document.createElement('td');
    const totalCuenta = '$0';
    cuenta.innerText = totalCuenta;
    tr.classList.add('fila', 'th', 'td');
    tdNumero.classList.add('text-left');
    cuenta.classList.add('text-left');

    const cerrarBoton = document.createElement('button');
    cerrarBoton.innerText = 'Cerrar';
    cerrarBoton.classList.add('bt-cerrar');
    const tdCerrar = document.createElement('td');
    tdCerrar.appendChild(cerrarBoton);
    cerrarBoton.addEventListener("click", (event) => {
        const boton = event.currentTarget;
        boton.parentElement.parentElement.remove();
        manejadorDeMesas.eliminar(mesa);
    });




    tr.appendChild(tdNumero);
    tr.appendChild(cuenta);
    tr.appendChild(tdCerrar);


    document.querySelector('#tabla-mesas').appendChild(tr);
    document.querySelector('input').value = ''
}



const load = () => {
    const button = document.querySelector('#boton-agregar');
    button.addEventListener('click', agregarMesa);

}

const agregarProducto = () => {
    const producto = document.querySelector('input').value
    
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    tdId.innerText = id;

    const  = document.createElement('td');
    const totalCuenta = '$0';
    cuenta.innerText = totalCuenta;
    tr.classList.add('fila', 'th', 'td');
    tdNumero.classList.add('text-left');
    cuenta.classList.add('text-left');



}


// /////////////////////////////

// poner clases!!!!!
