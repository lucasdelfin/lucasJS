let alumnos = [];



while (alumnos.length < 5) {
    let alumnoIngreso = prompt('Bienvenidos a la clase, Ingresa tu nombre');
    alumnos.push(alumnoIngreso);
};

alert('Bienvenido/a ' + alumnos[0] + '\nBienvenido/a ' + alumnos[1] + '\nBienvenido/a ' + alumnos[2] + '\nBienvenido/a ' + alumnos[3] + '\nBienvenido/a ' + alumnos[4]);

/// objetos con arays//
function clases(elegido, auto, precio, clases) {
    this.elegido = elegido;
    this.auto = auto;
    this.precio = precio;
    this.clases = clases;
};


let clases2 = new clases("curso intermedio", "Volskwagen Up", "15,000$", "15 clases");
console.log(clases2);
let clases3 = new clases("curso avanzado", "Gold trend", "10.000$", "5 clases")
console.log(clases3);
let clases4 = new clases("alquiler de auto para examen", "gold trend/Up", "3.000$");
eligeClase();
function eligeClase() {
    let curso = parseInt(prompt(" selecciona el curso que desea tomar\n 1 para curso basico\n 2 para curso intermedio\n 3 para curso avanzado\n 4\n para alquiler de auto examen "));
    switch (curso) {
    
        case 1:
            let clase = new clases("curso basico", "gold trend", "25.000$", "20 clases");
            alert("Tu elegiste el: " + clase.elegido + "\nvas a contar con un auto: " + clase.auto + "\n vas a contar con :" + clase.clases + "\n el precio es de:" + clase.precio);
            break;
        case 2:
            let claseIntermedia = new clases("curso intermedio", "Volskwagen Up", "20,000$", "15 clases");
            alert("Tu elegiste el: " + claseIntermedia.elegido + "\nvas a contar con un auto: " + claseIntermedia.auto + "\n vas a contar con :" + claseIntermedia.clases + "\n el precio es de:" + claseIntermedia.precio);
            break;
            case 3:
                let claseAvanzada = new clases("curso avanzado", "Volskwagen Up", "15,000$", "5 clases");
            alert("Tu elegiste el: " + claseAvanzada.elegido + "\nvas a contar con un auto: " + claseAvanzada.auto + "\n vas a contar con :" + claseAvanzada.clases + "\n el precio es de:" + claseAvanzada.precio);
            break;
        

    
    }
}



function Cotizar() {
    //se crea una variable que guarde el valor ingresado por el usuario (cantidad de clases requeridas por el usuario) //
    let num_clases = prompt("Cuantas clases de manejo tomara : ");

    //revisa si el checkbox esta selecionado retorna true si esta seleccionado//
    let estado_alquiler = prompt("Querra alquilar un vehiculo (escriba 1 para si y 0 para no) : ");

    //aqui se esta verificando si el usuario quiere mas de 5 clases para hacerle un descuento del 10% del costo total //
    if (num_clases >= 5) {
        let costo_clase = (2000 * num_clases) - ((2000 * num_clases) / 10);
        console.log("Precio total por la clases de manejo : " + costo_clase)
    }
    else {
        let costo_clase = 2000 * num_clases;
        console.log("Precio total por la clases de manejo :" + costo_clase);
    }


    //verifica si esta selecionado el checkbox y lo suma al costo final //
    if (estado_alquiler) {
        console.log("Precio por alquiler del vehiculo: " + 2500);
        console.log("Precio total : " + (costo_clase + 2500));
    }
    else {
        console.log("Precio total : " + costo_clase);
    }
}

// arrays //
const arrayVacio = [];
const carrito = [];

const cursoManejo = ['Curso basico', 'Curso intermedio', 'Curso avanzado', 'Alquiler auto de rendir']
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];//
/*const mix=[ 'hola' , 12,true,3.14,[1,2,3]]
const hermione =['castaño' , 'gato',17,'granger',true] */
console.log(cursoManejo[3]);



//forEach 

let aunEstudiante = ["Daniel", "Camila", "Lucas", "Nicolas", "Demian", "Maria Luz", "Otto", "Milo"]
let yaGraduado = []

function estudianteGraduado(estudiante, indice) {
    let objeto = { nombre: estudiante, posicion: indice + 1 }
    yaGraduado[indice] = objeto
}

aunEstudiante.forEach((nombre, indice) => estudianteGraduado(nombre, indice));

console.log(yaGraduado);











