
//// Manejador de Mesas

class ManejadorDeMesas {
	listaDeMesas = []

	agregar(mesa) {
		if (!(mesa instanceof Mesa))
			throw new Error('La mesa debe ser de tipo Mesa')
		if (this.buscar(mesa.numero)) throw new Error('La mesa ya esta cargada')
		this.listaDeMesas.push(mesa)
	}

	buscar(numeroDeMesa) {
		return this.listaDeMesas.find((mesa) => mesa.numero === parseInt(numeroDeMesa))
	}

	eliminar(mesa) {
		this.listaDeMesas = this.listaDeMesas.filter((m) => m.numero !== mesa.numero)
	}
}

const manejadorDeMesas = new ManejadorDeMesas()

class Mesa {
	listaProductosEnMesa = []

	constructor(numeroMesa) {
		this.numero = Number(numeroMesa)
	}

	sumaTotal() {
		let total = 0;
		this.listaProductosEnMesa.forEach((item) =>{ 
			total += parseInt(item.producto.precio) * parseInt(item.cantidad)
		});
		return total;
	}
}

//// Manejador de Productos

class ManejadorDeProductos {
	listaManejadorDeProductos = []

	agregar(producto) {
		if (!(producto instanceof Producto))
			throw new Error('El producto debe ser de tipo Producto')
		if (this.buscar(producto.id)) throw new Error('El producto ya esta cargado')
		this.listaManejadorDeProductos.push(producto)
	}

	buscar(id) {
		return this.listaManejadorDeProductos.find((producto) => producto.id === parseInt(id))
	}

	eliminar(producto) {
		this.listaManejadorDeProductos = this.listaManejadorDeProductos.filter((p) => p.id !== producto.id)
	}
}

const manejadorDeProductos = new ManejadorDeProductos()

let productoSiguienteId = 1

class Producto {
	constructor(precio, nombre) {
		this.precio = precio
		this.nombre = nombre
		this.id = productoSiguienteId
		productoSiguienteId++
	}
}

