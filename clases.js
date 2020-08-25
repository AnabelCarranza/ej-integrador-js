
//// Manejador de Mesas

class ManejadorDeMesas {
	lista = []

	agregar(mesa) {
		if (!(mesa instanceof Mesa))
			throw new Error('La mesa debe ser de tipo Mesa')
		if (this.buscar(mesa.numero)) throw new Error('La mesa ya esta cargada')
		this.lista.push(mesa)
	}

	buscar(numeroDeMesa) {
		return this.lista.find((mesa) => mesa.numero === numeroDeMesa)
	}

	eliminar(mesa) {
		this.lista = this.lista.filter((m) => m.numero !== mesa.numero)
	}
}

const manejadorDeMesas = new ManejadorDeMesas()

class Mesa {
	lista = []

	constructor(numeroMesa) {
		this.numero = Number(numeroMesa)
	}
}

//// Manejador de Productos

class ManejadorDeProductos {
	lista = []

	agregar(producto) {
		if (!(producto instanceof Producto))
			throw new Error('El producto debe ser de tipo Producto')
		if (this.buscar(producto.id)) throw new Error('El producto ya esta cargado')
		this.lista.push(producto)
	}

	buscar(id) {
		return this.lista.find((producto) => producto.id === id)
	}

	eliminar(producto) {
		this.lista = this.lista.filter((p) => p.id !== producto.id)
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

