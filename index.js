
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
    const button2 = document.querySelector('#boton-agregar-producto');
    button2.addEventListener('click', agregarProducto);

}

// ////////// Card Productos /////////// ///

const agregarProducto = () => {
    const producto = document.querySelector('#producto').value
    const precio = document.querySelector('#precio').value
    const nuevoProducto = new Producto(precio, producto);
    manejadorDeProductos.agregar(nuevoProducto);

    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    tdId.innerText = nuevoProducto.id;
    const tdNombreProducto = document.createElement('td');
    tdNombreProducto.innerText = nuevoProducto.nombre;

    const tdPrecios = document.createElement('td');
    tdPrecios.innerText = nuevoProducto.precio;
    tr.classList.add('fila', 'th', 'td');
    tdNombreProducto.classList.add('text-left');
    tdPrecios.classList.add('text-left');
    tdId.classList.add('text-left');

    

    const eliminarBoton = document.createElement('button');
    eliminarBoton.innerText = 'Eliminar';
    eliminarBoton.classList.add('bt-eliminar');
    const tdEliminar = document.createElement('td');
    tdEliminar.appendChild(eliminarBoton);
    eliminarBoton.addEventListener("click", (event) => {
        const boton = event.currentTarget;
        boton.parentElement.parentElement.remove();
        manejadorDeProductos.eliminar(nuevoProducto);
    });
    

    tr.appendChild(tdId);
    tr.appendChild(tdNombreProducto);
    tr.appendChild(tdPrecios);
    tr.appendChild(tdEliminar);

    document.querySelector('#tabla-productos').appendChild(tr);
    document.querySelector('#precio').value = ''
    document.querySelector('#producto').value = ''





}

const agregarProductoMesa = () => {
    const nuevaCantidad = document.querySelector('')


}


// /////////////////////////////

// poner clases!!!!!
//  


// /////////////////////////////

// poner clases!!!!!
