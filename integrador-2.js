let listaUsuarios = [
    ["Carla", 1545628984, "carla@gmail.com", 0],
    ["Pedro", 1545251245, "pedro@gmail.com", 1],
    ["Lucas", 1523357849, "lucas@gmail.com", 2],
    ["Ana", 15789456, "ana@gmail.com", 3],
]


let accion = ""

for(i = 0; accion != "SALIR"; i++){
accion = prompt(`Elegí una acción:
CREAR 
BUSCAR 
LISTAR 
MODIFICAR 
ELIMINAR
SALIR`)
if(accion === "CREAR"){
let confirmacion = ""
let confirmacion2 = ""
for(i=0; confirmacion != "NO" && confirmacion2 != "NO"; i++){
let nombreUsuario = prompt("Cuál es tu nombre?")
let telefonoUsuario = prompt("Cuál es tu teléfono?")
let mailUsuario = prompt("Cuál es tu mail?")
let datosIngresados = [nombreUsuario, telefonoUsuario, mailUsuario, listaUsuarios.length]
confirmacion = prompt(`Los datos ingresados son los siguientes:
Nombre: ${nombreUsuario}
Teléfono: ${telefonoUsuario}
Mail: ${mailUsuario}
Desea confirmarlos?
SI / NO`)
    if(confirmacion === "SI"){
        listaUsuarios.push(datosIngresados)
        alert("Tu usuario fue agregado con Éxito")
        confirmacion2 = prompt(`Desea volver a realizar el procedimiento? 
        SI / NO`)
        
    }
    else{
        alert("Operación cancelada");
    }
}
}
if(accion === "SALIR"){
    alert("Gracias por nada")

}
if(accion === "BUSCAR"){
    prompt(`Por qué dato desea buscar?
    ID
    NOMBRE
    CELULAR
    MAIL`) 
    let respuestaDato = prompt("Ingresalo")

    for (let i = 0; i < listaUsuarios.length; i++) {
        for (let j = 0; j < listaUsuarios[i].length; j++) {
          
          if (listaUsuarios === respuestaDato) {
            alert("hola")
            
          }
        }
     }
}
}

console.log(listaUsuarios)

