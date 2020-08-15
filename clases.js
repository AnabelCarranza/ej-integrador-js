class ManejadorDeMesas {
    lista = [];

    agregar(mesa) {
        if (!(mesa instanceof Mesa)) throw new Error("La mesa debe ser de tipo Mesa");
        if (this.buscar(mesa.numero)) throw new Error("La mesa ya esta cargada");
        this.lista.push(mesa);
    }

    buscar(numeroDeMesa) {
        return this.lista.find(mesa => mesa.numero === numeroDeMesa);
    }

    eliminar(mesa){
        this.lista = this.lista.filter(m => m.numero !== mesa.numero);

    }
}
 

const manejadorDeMesas = new ManejadorDeMesas();

class ManejadorDeProductos {
    lista = [];

    agregar(producto) {
        if (!(producto instanceof Producto)) throw new Error("La producto debe ser de tipo Producto");
        if (this.buscar(producto.id)) throw new Error("El producto ya esta cargado");
        this.lista.push(producto);
    }

    buscar(id) {
        return this.lista.find(producto => producto.id === id);
    }

    eliminar(producto){
        this.lista = this.lista.filter(p => p.id !== producto.id);

    }
}

const  manejadorDeProductos = new ManejadorDeProductos();

let productoSiguienteId = 1;
class Producto {
    constructor(precio, nombre){
        this.precio = precio;
        this.nombre = nombre;
        this.id = productoSiguienteId;
        productoSiguienteId++;
        
    }

}
class Mesa {
    constructor(numeroMesa) {
        this.numero = Number(numeroMesa);

    }

}






// **
//  * Las clases de javascript son una forma 
//  * nueva de definir objetos.
//  * Esto significa que estoy describiendo 
//  * objetos en una sintaxis distinta, pero 
//  * funciona, internamente, de la misma forma
//  * que las funciones constructoras.
//  * 
//  * Lo primero que tenemos es el constructor, 
//  * que va a ser el lugar donde vamos a 
//  * inicializar nuestras variables.
//  * 
//  * De la misma forma que en objetos, tenemos 
//  * getters y setters. Y tambien accedemos a 
//  * nuestras propiedades o metodos usando
//  * la palabra reservada "this"
//  * 
//  * La principal diferencia entre objetos y 
//  * clases se radica en como crear un objeto 
//  * nuevo.
//  */

// class Pelaje{
//     constructor(color){
//         this.color = color;
//     }
// }
// function Gato(nombre, edad, vidas = 7) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.vidas = vidas;
//     this.especie = "felino";
//     this.cosas = {
//         esObjeto: true
//     };
//     this.pelaje = new Pelaje("Amarillo");
// }

// class Gato {
//     constructor(nombre, edad, vidas = 7) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.vidas = vidas;
//         this.especie = "felino";
//         this.cosas = {
//             esObjeto: true
//         };
//         this.pelaje = new Pelaje("Amarillo");
//     }

//     get edadGatuna () {
//         return this.calcularEdadGatuna();
//     }

//     calcularEdadGatuna() {
//         return this.edad * 9;
//     }
// }

// // Para instanciar(crear) un nuevo objeto 
// // lo hacemos con la 
// // palabra reservada "new"
// const michu = new Gato("Michu", 4);

// /**
//  * Si quisieramos hacer lo mismo
//  * con objetos puros, tendriamos 
//  * que hacer lo siguiente
//  */
// const Gato = {
//     nombres: "",
//     edad: 0,
//     vidas: 7,
//     get edadGatuna () {
//         return this.calcularEdadGatuna();
//     },
//     calcularEdadGatuna: function() {
//         return this.edad * 9;
//     }
// }

// // Y de la siguiente forma, clonar el objeto
// // gato para usarlo como una "fabrica" de objetos
// // a diferencia de la clase que lo es por definicion
// const michu = Object.assign({}, Gato);// {...Gato}


// /**
//  * Los metodos estaticos son metodos
//  * a los cuales puedo acceder sin 
//  * necesidad de instanciar un objeto. 
//  * O sea, no necesito tener un objeto
//  * para poder utilizar la funcionalidad.
//  */

// class Gato {
//     static maullar(maullido = "miau!") {
//         return maullido;
//     }
// }
// console.log(Gato.maullar());




// class Gato {
//     constructor() {
//         this._nombre = "";
//         this._edad = "";
//     }
//     set nombre (nombre) {
//         this._nombre = nombre;
//     }
//     set edad (edad) {
//         this._edad = edad;
//     }
//     get edad () {
//         return this._edad;
//     }
// }
