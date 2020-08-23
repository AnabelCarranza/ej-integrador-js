const agregarMesa = () => {
	const numeroDeMesa = document.querySelector('input').value
	const mesa = new Mesa(numeroDeMesa)
	manejadorDeMesas.agregar(mesa)

	const tr = document.createElement('tr')
	const tdNumero = document.createElement('td')
	tdNumero.innerText = numeroDeMesa

	const cuenta = document.createElement('td')
	const totalCuenta = '$0'
	cuenta.innerText = totalCuenta
	tr.classList.add('fila', 'th', 'td')
	tdNumero.classList.add('text-left')
	cuenta.classList.add('text-left', 'cuentamesa')
	cuenta.id = 'cuentaId-' + mesa.numero
	//const sumaTotal = Mesa(producto, cantidad)

	const cerrarBoton = document.createElement('button')
	cerrarBoton.innerText = 'Cerrar'
	cerrarBoton.classList.add('bt-cerrar')

	const tdCerrar = document.createElement('td')
	tdCerrar.appendChild(cerrarBoton)
	cerrarBoton.addEventListener('click', (event) => {
		const boton = event.currentTarget
		boton.parentElement.parentElement.remove()
		manejadorDeMesas.eliminar(mesa)
	})

	tr.appendChild(tdNumero)
	tr.appendChild(cuenta)
	tr.appendChild(tdCerrar)

	document.querySelector('#tabla-mesas').appendChild(tr)
	document.querySelector('input').value = ''

	selectorMesas()
}

const load = () => {
	const button = document.querySelector('#boton-agregar')
	button.addEventListener('click', agregarMesa)
	const button2 = document.querySelector('#boton-agregar-producto')
	button2.addEventListener('click', agregarProducto)
	const button3 = document.querySelector('#bt-agregar-mesa')
	button3.addEventListener('click', agregarProductoMesa)
}

// ////////// Card Productos /////////// ///

const agregarProducto = () => {
	const producto = document.querySelector('#producto').value
	const precio = document.querySelector('#precio').value
	const nuevoProducto = new Producto(precio, producto)
	manejadorDeProductos.agregar(nuevoProducto)

	const tr = document.createElement('tr')
	const tdId = document.createElement('td')
	tdId.innerText = nuevoProducto.id
	const tdNombreProducto = document.createElement('td')
	tdNombreProducto.innerText = nuevoProducto.nombre

	const tdPrecios = document.createElement('td')
	tdPrecios.innerText = nuevoProducto.precio
	tr.classList.add('fila', 'th', 'td')
	tdNombreProducto.classList.add('text-left')
	tdPrecios.classList.add('text-left')
	tdId.classList.add('text-left')

	const eliminarBoton = document.createElement('button')
	eliminarBoton.innerText = 'Eliminar'
	eliminarBoton.classList.add('bt-eliminar')
	const tdEliminar = document.createElement('td')
	tdEliminar.appendChild(eliminarBoton)
	eliminarBoton.addEventListener('click', (event) => {
		const boton = event.currentTarget
		boton.parentElement.parentElement.remove()
		manejadorDeProductos.eliminar(nuevoProducto)
	})

	tr.appendChild(tdId)
	tr.appendChild(tdNombreProducto)
	tr.appendChild(tdPrecios)
	tr.appendChild(tdEliminar)

	document.querySelector('#tabla-productos').appendChild(tr)
	document.querySelector('#precio').value = ''
	document.querySelector('#producto').value = ''

	refrescarTablaAgregarProductoAMesa()
}

const refrescarTablaAgregarProductoAMesa = () => {
	const tablaRefrescada = document.querySelector('#tabla-cargar-productos')
	tablaRefrescada.innerHTML = ''
	manejadorDeProductos.lista.forEach((producto) => {
		const tr = document.createElement('tr')
		const tdProducto = document.createElement('td')
		const tdCantidad = document.createElement('td')
		tdProducto.innerText = producto.nombre
		const input = document.createElement('input')
		input.id = 'inputProducto-' + producto.id //inputProducto-1

		tdCantidad.appendChild(input)
		tr.classList.add('fila', 'th', 'td')
		tdProducto.classList.add('text-left')
		tdCantidad.classList.add('text-left', 'fila-cantidad')
		input.classList.add('input-cantidad')

		tr.appendChild(tdProducto)
		tr.appendChild(tdCantidad)
		tablaRefrescada.appendChild(tr)
	})
}

const selectorMesas = () => {
	const selector = document.querySelector('#menu-mesas')
	selector.innerHTML = ''
	const defaultOption = document.createElement('option')
	defaultOption.innerText = 'Numero de Mesa'
	selector.appendChild(defaultOption)
	manejadorDeMesas.lista.forEach((mesa) => {
		const option = document.createElement('option')
		option.innerText = mesa.numero
		option.value = mesa.numero
		selector.appendChild(option)
	})
}

const agregarProductoMesa = () => {
	const mesaSeleccionada = document.querySelector('#menu-mesas').value
	const mesa = manejadorDeMesas.buscar(mesaSeleccionada)
	const inputs = document.querySelectorAll('.input-cantidad')
	for (let input of inputs) {
		const idProducto = input.id.split('-')[1]
		const cantidad = input.value
		const producto = manejadorDeProductos.buscar(idProducto)
		if (cantidad) {
			// valido que el input no venga sin valor o con 0
			mesa.lista.push({
				producto,
				cantidad,
			})
		}
	}

	document.querySelectorAll('.cuentamesa').forEach((td) => {
		const numeroMesa = td.id.split('-') // el id tiene el numero de mesa y en base a eso tengo que modificar
		//la cuenta del mismo. Donde tengo la mesa? en la variable "mesa"
	})
}
