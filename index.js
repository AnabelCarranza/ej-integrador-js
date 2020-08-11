const agregarMesa = () => {
    const mesa = document.querySelector('input').value
    const tr = document.createElement('tr');
    const tdNumero = document.createElement('td');
    tdNumero.innerText = mesa;

    const cuenta = document.createElement('td');
    const totalCuenta = '$0';
    cuenta.innerText = totalCuenta;
    tr.classList.add('fila', 'th', 'td');


    const cerrarBoton = document.createElement('button');
    cerrarBoton.innerText = 'Cerrar';
    cerrarBoton.classList.add('bt-cerrar');
    const tdCerrar = document.createElement('td');
    tdCerrar.appendChild(cerrarBoton);

    tr.appendChild(tdNumero);
    tr.appendChild(cuenta);
    tr.appendChild(cerrarBoton);
    
    
    document.querySelector('#tabla-mesas').appendChild(tr);
    document.querySelector('input').value = ''
}



const load = () => {
    const button = document.querySelector('#boton-agregar');
    button.addEventListener('click', agregarMesa);
}


// /////////////////////////////

// poner clases!!!!!
