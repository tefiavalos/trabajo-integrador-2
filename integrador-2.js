let idUsuario = ""

let listaUsuarios = [
    ["Carla", 1545628984, "carla@gmail.com", 0],
    ["Pedro", 1545251245, "pedro@gmail.com", 1],
    ["Lucas", 1523357849, "lucas@gmail.com", 2],
    ["Ana", 15789456, "ana@gmail.com", 3],
]


let accion = ""

for (i = 0; accion !== "SALIR"; i++) {
    accion = prompt(`Elegí una acción:
    [CREAR] un usuario 👤
    [BUSCAR] un usuario 🔎
    [LISTAR] un usuario 📑
    [MODIFICAR] un usuario ✏️
    [ELIMINAR] un usuario ✂️
    [SALIR] 🏃‍`)

    accion = accion.toUpperCase()

    if (accion === "CREAR") {
        let confirmacion = ""
        let confirmacion2 = ""
        for (i = 0; confirmacion != "NO" && confirmacion2 != "NO"; i++) {
            let nombreUsuario = prompt("Cuál es tu nombre?")
            let telefonoUsuario = prompt("Cuál es tu teléfono?")
            let mailUsuario = prompt("Cuál es tu mail?")
            let datosIngresados = [nombreUsuario, telefonoUsuario, mailUsuario, listaUsuarios.length]
            confirmacion = prompt(`Los datos ingresados son los siguientes:
           Nombre: ${nombreUsuario}
           Teléfono: ${telefonoUsuario}
           Mail: ${mailUsuario}
           ⚠️Desea confirmarlos?
           ✔️SI / ❌NO`)
           confirmacion = confirmacion.toUpperCase()
            if (confirmacion === "SI") {
                listaUsuarios.push(datosIngresados)
                alert("⭐Tu usuario fue agregado con éxito")
                confirmacion2 = prompt(`⚠️Desea volver a realizar el procedimiento? 
                ✔️SI / ❌NO`)
                confirmacion2 = confirmacion2.toUpperCase()
            }
            
            else {
                alert("🚫Operación cancelada");
            }
        }
    }


    if (accion === "SALIR") {
        let respuestaSalida = prompt("⚠️¿Está seguro que desea salir del programa? ✔️SI/❌NO")
        respuestaSalida = respuestaSalida.toUpperCase()
        if (respuestaSalida === "SI") {
            alert("Gracias por nada")
        }
        else {
            accion = ""
        }


    }
    if (accion === "BUSCAR") {
        let datoABuscar = prompt(`Por qué dato desea buscar?
        🆔ID
        👤 NOMBRE
        📱 CELULAR
        📧 MAIL`)
        
        let respuestaDato = prompt("Ingresa el " + datoABuscar)
       

        for (let i = 0; i < listaUsuarios.length; i++) {
            for (let j = 0; j < listaUsuarios[i].length; j++) {

                if (listaUsuarios[i][j] === respuestaDato) {
                    alert(`Los datos del usuario son: 
                        🆔 ID: ${listaUsuarios[i][3]}

                        👤 Nombre:  ${listaUsuarios[i][0]}

                        📱 Celular:  ${listaUsuarios[i][1]}

                        📧 Mail:  ${listaUsuarios[i][2]}`


                    )

                }

            }

        }

    }
    if (accion === "LISTAR") {
        let lista = ""

        for (let i = 0; i < listaUsuarios.length; i++) {

            lista = lista + `
            🆔 ID: ${listaUsuarios[i][3]}
            👤 Nombre:  ${listaUsuarios[i][0]}
            📱 Celular: ${listaUsuarios[i][1]}
            📧 Mail:${listaUsuarios[i][2]}
            ----------------------------------
            ` 
        }
        alert(`Lista de usuarios: 
        ${lista}`)

    }

    if (accion === "MODIFICAR") {
        let confirmacionModificar = ""
        let confirmacionModificar2 = ""

        for (i = 0; confirmacionModificar != "NO" && confirmacionModificar2 != "NO"; i++) {
            idUsuario = prompt("🙏Por favor ingrese el ID del usuario a modificar:")
            for (let i = 0; i < listaUsuarios.length; i++) {
                for (let j = 0; j < listaUsuarios[i].length; j++) {
                    let nombreModificar = ""
                    let telefonoModificar = ""
                    let mailModificar = ""


                    if (listaUsuarios[i][j] == idUsuario) {
                        nombreModificar = prompt(" 👤 Ingrese el nuevo nombre de usuario")
                        telefonoModificar = prompt("📱 Ingrese el nuevo numero de celular")
                        mailModificar = prompt(" 📧 Ingrese el nuevo email")

                        let datosIngresadosModificar = [nombreModificar, telefonoModificar, mailModificar, listaUsuarios.length]
                        confirmacionModificar = prompt(`Los datos ingresados son los siguientes:
                        Nombre: ${nombreModificar}
                        Teléfono: ${telefonoModificar}
                        Mail: ${mailModificar}
                        ⚠️Desea confirmarlos?
                        ✔️SI / ❌NO`)
                        confirmacionModificar = confirmacionModificar.toUpperCase()


                        if (confirmacionModificar === "SI") {
                            listaUsuarios[idUsuario] = datosIngresadosModificar
                            alert("⭐Tu usuario fue agregado con éxito")
                            confirmacionModificar2 = prompt(`⚠️Desea volver a realizar el procedimiento? 
                            ✔️SI / ❌NO`)
                            confirmacionModificar2 = confirmacionModificar2.toUpperCase()
                        }


                        else {
                            alert("🚫Operación cancelada");
                        }
                    }
                }
            }
        }
    }

    if (accion === "ELIMINAR") {
        let respuestaEliminacion = ""
        let respuestaEliminacion2 = ""
        for (i = 0; respuestaEliminacion != "NO" && respuestaEliminacion2 != "NO"; i++) {
            idUsuario = prompt("🙏Por favor ingrese el ID del usuario")

            for (let i = 0; i < listaUsuarios.length; i++) {
                for (let j = 0; j < listaUsuarios[i].length; j++) {

                    if (listaUsuarios[i][j] == idUsuario) {
                        respuestaEliminacion = prompt(`Estos son los datos del usuario que Ud. desea eliminar:  
                        🆔 ID: ${listaUsuarios[idUsuario][3]}

                        👤 Nombre:  ${listaUsuarios[idUsuario][0]}

                        📱 Celular: ${listaUsuarios[idUsuario][1]}

                        📧 Mail:  ${listaUsuarios[idUsuario][2]} 
                        
                        ⚠️¿Desea confirmar? ✔️SI/❌NO`)

                        respuestaEliminacion = respuestaEliminacion.toUpperCase()
                        if (respuestaEliminacion === "SI") {
                            listaUsuarios.splice(i, 1);
                            alert("⭐La operación fue realizada éxitosamente")
                            respuestaEliminacion2 = prompt(`⚠️Desea volver a realizar el procedimiento? 
                            ✔️SI / ❌NO`)
                            respuestaEliminacion2 = respuestaEliminacion2.toUpperCase()
                            break;

                        }
                        else {
                            alert("🚫Operación cancelada");
                        }

                    }

                }
            }

        }
    }
}

console.log(listaUsuarios)