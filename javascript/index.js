function bienbenida() {
let preguntaInicial = confirm  ("Hola, estas interesado en alquilar una auto?")
if ((preguntaInicial === true) ){ alert ("FELICIDADES LLEGASTE AL LUGAR CORRECTO!!")
} else{ alert ("OH BUENO! Si algun momento necesitas sabes donde encontrarlo.")  }
}

//array con servicios de la rentadora
const carrito = [
    ]
const autosYservicios = [
    {codigo: 1 , tipo:"Chevrolet Aveo" , precio: 50.00 , },
    {codigo: 2 , tipo:"Fiat Cronos" , precio: 50.00, },
    {codigo: 3 , tipo:"Volkswagen Polo" , precio: 50.00, },
    {codigo: 4 , tipo:"Chevrolet Camaro" , precio: 250.00, },
    {codigo: 5 , tipo:"Ford Mustang" , precio: 250.00, },
    {codigo: 6 , tipo:"Porsche 911" , precio: 250.00, },
    {codigo: 7 , tipo:"Ford Bronco" , precio: 100.00, },
    {codigo: 8 , tipo:"Honda HRV" , precio: 100.00, },
    {codigo: 9 , tipo:"Toyota 4Runner" , precio: 100.00, },
    {codigo: 10 , tipo:"Chofer" , precio: 40.00, },
    {codigo: 11 , tipo:"Silla para nenes" , precio: 5.00, },
    {codigo: 12 , tipo:"Acoplado" , precio: 25.00, },
    {codigo: 13 , tipo:"Kilometraje libre" , precio: 30.00, },
    {codigo: 14 , tipo:"Porta bicicletas" , precio: 15.00, },
    {codigo: 15 , tipo:"Cadena para nieve" , precio: 15.00, },
    {codigo: 16 , tipo:"Transportador de mascotas" , precio: 10.00, },
    {codigo: 17 , tipo:"Limpieza de vehiculo post entrega" , precio: 25.00, }
]

function buscarServicio(codigo)  {
    let resultado = autosYservicios.find((autosYservicios)=> autosYservicios.codigo === codigo)
    return resultado
}

function finalizarServicio() {
    const contratar = new Compra(carrito)
    alert("El costo total por el alquiler de esos servicios serian de $" + contratar. obtenerSubtotal())
}

function contratarServicios (){
    let id = prompt("Ingresa el codigo de el vehiculo o servicio a que queres contratar:")
    let servicioContratado = buscarServicio (parseInt(id))
    if (servicioContratado !== "undefined"){
        carrito.push(servicioContratado)
        alert("Perfecto" + servicioContratado.tipo + "se sumo al carrito.")
        let respuesta = confirm ("Deseas elegir otra prenda?")
        if (respuesta === true){
            contratarServicios()
        }else{
            console.table(carrito)
            finalizarServicio()
        }
    }else{
        alert("Lo sentimos, no entendimos que estas buscando.")
        contratarServicios()
    }
}

function calcularCostoPorDias (){
let costo = parseInt (prompt("Ingresar el valor total de accesorios mas autos a rentar:"))
let dias = parseInt (prompt("Ingresar la cantidad de dias a rentar:"))
    alert("El valor total a pagar por esos dias seria:" + (costo * dias) + ("USD$")) 
}
