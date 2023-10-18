class cliente {
    constructor (nombre, apellido, telefono, email) {
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
        this.email = email

    }
}
const listaUsuarios = []
listaUsuarios.push (new cliente(prompt("Ingrese su nombre"),prompt("Ingrese su Apellido"), prompt("Ingrese su teléfono"), prompt("Ingrese su email") ))
console.log(listaUsuarios)

const entrada = [
    {id: 1 , nombre: "Empanadas", precio: 300, cat: "entrada" },
    {id: 2, nombre: "Brusquetas", precio: 350, cat: "entrada" },
    {id: 3, nombre: "Falafel", precio: 320, cat: "entrada" },
   
]
const plato = [
    {id: 1 , nombre: "Pad thai", precio: 550, cat: "platoprincipal" },
    {id: 2, nombre: "Tacos", precio: 500, cat: "platoprincipal" },
    {id: 3, nombre: "Goulash", precio: 600, cat: "platoprincipal" },
   
]
const postre = [
    {id: 1 , nombre: "Tiramisu", precio: 150, cat: "postre" },
    {id: 2, nombre: "Chocotorta", precio: 100, cat: "postre" },
    {id: 3, nombre: "Helado", precio: 120, cat: "postre" },
   
]

const menuElegido = []

const entradaElegida = entrada.find((i) => i.id === parseInt(prompt("Ingrese la entrada: 1- Empanadas / 2- Brusquetas / 3 - Falafel")))  
menuElegido.push(entradaElegida)

const platoelegido = plato.find((i) => i.id === parseInt(prompt("Ingrese el plato principal: 1- Pad Thai / 2- Tacos / 3 - Goulash")))
menuElegido.push(platoelegido)

const postreElegido = postre.find((i) => i.id === parseInt(prompt("Ingrese el postre: 1- Tiramisu / 2- Chocotorta / 3 - Helado")))
menuElegido.push(postreElegido)


console.log(menuElegido)

let invitados = prompt("Ingrese la cantidad de personas que irán al evento")
let presupuesto = menuElegido.reduce((accum,p) => accum + p.precio, 0)
let total = presupuesto*invitados
alert("El presupuesto total es de $" + total)