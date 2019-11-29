// Excelente trabajo, chicas!
// Me da pena tener tan poquito para comentarles, pero es lo que ocurre
// cuando hacen un gran trabajo. Solo puedo felicitarlas.
// Buen uso de variables, desmuestran haber comprendido y poder utilizar todos los 
// conceptos vistos hasta ahora, el codigo es muy prolijo y claro. 
// Sigan asi!



const LISTA_USUARIOS = [
    ["Carla", 1545628984, "carla@gmail.com", 0],
    ["Pedro", 1545251245, "pedro@gmail.com", 1],
    ["Lucas", 1523357849, "lucas@gmail.com", 2],
    ["Ana", 15789456, "ana@gmail.com", 3],
]

let idUsuario = ""

let accion = ""

while (accion !== "SALIR") {
    accion = prompt(`Elegí una acción:
    [CREAR] un usuario 👤
    [BUSCAR] un usuario 🔎
    [LISTAR] un usuario 📑
    [MODIFICAR] un usuario ✏️
    [ELIMINAR] un usuario ✂️
    [SALIR] 🏃‍`);

    accion = accion.toUpperCase()

    switch (accion) {
        case "CREAR":
            let confirmacion = ""
            let confirmacion2 = ""
            for (i = 0; confirmacion != "NO" && confirmacion2 != "NO"; i++) {
                let nombreUsuario = prompt("¿Cuál es tu nombre?")
                let telefonoUsuario = prompt("¿Cuál es tu teléfono?")
                let mailUsuario = prompt("¿Cuál es tu mail?")
                let datosIngresados = [nombreUsuario, telefonoUsuario, mailUsuario, LISTA_USUARIOS.length]
                confirmacion = prompt(`Los datos ingresados son los siguientes:
                   Nombre: ${nombreUsuario}
                   Teléfono: ${telefonoUsuario}
                   Mail: ${mailUsuario}
                   ⚠️ ¿Desea confirmarlos?
                    ✔️SI / ❌NO`)
                confirmacion = confirmacion.toUpperCase()
                if (confirmacion === "SI") {
                    LISTA_USUARIOS.push(datosIngresados)
                    alert("⭐ Tu usuario fue agregado con éxito")
                    confirmacion2 = prompt(`⚠️¿Desea volver a realizar el procedimiento? 
                        ✔️SI / ❌NO`)
                    confirmacion2 = confirmacion2.toUpperCase()
                }

                else {
                    alert("🚫 Operación cancelada");
                }
            }
            break;


        case "BUSCAR":
            let datoABuscar = prompt(`¿Por qué dato desea buscar?
                🆔ID
                👤 NOMBRE
                📱 CELULAR
                📧 MAIL`)
            datoABuscar = datoABuscar.toUpperCase()
            switch (datoABuscar) {
                case 'ID':
                case 'NOMBRE':
                case 'CELULAR':
                case 'MAIL':
                    let respuestaDato = prompt("Ingresa el " + datoABuscar)
                    let datoNoExistente = true
                    for (let i = 0; i < LISTA_USUARIOS.length; i++) {
                        for (let j = 0; j < LISTA_USUARIOS[i].length; j++) {

                            if (LISTA_USUARIOS[i][j] == respuestaDato) {
                                alert(`Los datos del usuario son: 
                                        🆔 ID: ${LISTA_USUARIOS[i][3]}
                
                                        👤 Nombre:  ${LISTA_USUARIOS[i][0]}
                
                                        📱 Celular:  ${LISTA_USUARIOS[i][1]}
                
                                        📧 Mail:  ${LISTA_USUARIOS[i][2]}`
                                )
                                datoNoExistente = false

                            }

                        }
                    }
                    if (datoNoExistente == true) {
                        alert('🚫 No existe el usuario')
                    }
                    break;

                default:
                    alert('🚫 Opcion incorrecta')
                    break;
            }



            break;
        case "LISTAR":
            let lista = ""

            for (let i = 0; i < LISTA_USUARIOS.length; i++) {

                lista = lista + `
                        🆔 ID: ${LISTA_USUARIOS[i][3]}
                        👤 Nombre:  ${LISTA_USUARIOS[i][0]}
                        📱 Celular: ${LISTA_USUARIOS[i][1]}
                        📧 Mail: ${LISTA_USUARIOS[i][2]}
                        `
            }
            alert(`Lista de usuarios: 
                    ${lista}`)
            break;

        case "MODIFICAR":
            let confirmacionModificar = ""
            let confirmacionModificar2 = ""

            for (i = 0; confirmacionModificar != "NO" && confirmacionModificar2 != "NO"; i++) {
                idUsuario = prompt("🙏 Por favor ingrese el ID del usuario a modificar:")
                for (let i = 0; i < LISTA_USUARIOS.length; i++) {
                    for (let j = 0; j < LISTA_USUARIOS[i].length; j++) {
                        let nombreModificar = ""
                        let telefonoModificar = ""
                        let mailModificar = ""


                        if (LISTA_USUARIOS[i][j] == idUsuario) {
                            nombreModificar = prompt(" 👤 Ingrese el nuevo nombre de usuario")
                            telefonoModificar = prompt("📱 Ingrese el nuevo numero de celular")
                            mailModificar = prompt(" 📧 Ingrese el nuevo email")

                            let datosIngresadosModificar = [nombreModificar, telefonoModificar, mailModificar, idUsuario]
                            confirmacionModificar = prompt(`Los datos ingresados son los siguientes:
                            👤 Nombre: ${nombreModificar} 
                            📱 Teléfono: ${telefonoModificar}
                            📧 Mail: ${mailModificar}
                            ⚠️ Desea confirmarlos?
                            ✔️SI / ❌NO`)
                            confirmacionModificar = confirmacionModificar.toUpperCase()


                            if (confirmacionModificar === "SI") {
                                LISTA_USUARIOS[idUsuario] = datosIngresadosModificar
                                alert("⭐ Tu usuario fue agregado con éxito")
                                confirmacionModificar2 = prompt(`⚠️ ¿Desea volver a realizar el procedimiento? 
                                ✔️SI / ❌NO`)
                                confirmacionModificar2 = confirmacionModificar2.toUpperCase()
                            }


                            else {
                                alert("🚫 Operación cancelada");
                            }
                        }
                    }
                }
            }
            break;
        case "ELIMINAR":
            let respuestaEliminacion = ""
            let respuestaEliminacion2 = ""
            for (i = 0; respuestaEliminacion != "NO" && respuestaEliminacion2 != "NO"; i++) {
                idUsuario = prompt("🙏 Por favor ingrese el ID del usuario")

                for (let i = 0; i < LISTA_USUARIOS.length; i++) {
                    for (let j = 0; j < LISTA_USUARIOS[i].length; j++) {

                        if (LISTA_USUARIOS[i][j] == idUsuario) {
                            respuestaEliminacion = prompt(`¿Estos son los datos del usuario que Ud. desea borrar? 
                            🆔 ID: ${LISTA_USUARIOS[i][3]}
                
                            👤 Nombre:  ${LISTA_USUARIOS[i][0]}
    
                            📱 Celular:  ${LISTA_USUARIOS[i][1]}
    
                            📧 Mail:  ${LISTA_USUARIOS[i][2]}
                            ⚠️ ¿Desea confirmar? ✔️SI/❌NO`)
                            respuestaEliminacion = respuestaEliminacion.toUpperCase()
                            if (respuestaEliminacion === "SI") {
                                LISTA_USUARIOS.splice(i, 1);
                                alert("⭐ La operación fue realizada exitosamente")
                                respuestaEliminacion2 = prompt(`⚠️¿Desea volver a realizar el procedimiento? 
                            ✔️SI / ❌NO`)
                                respuestaEliminacion2 = respuestaEliminacion2.toUpperCase()
                                break;

                            }
                            else {
                                alert("🚫 Operación cancelada");
                            }

                        }

                    }
                }

            }
            break;
        case "SALIR":
            let respuestaSalida = prompt("⚠️ ¿Está seguro que desea salir del programa? ✔️SI/❌NO")
            respuestaSalida = respuestaSalida.toUpperCase()
            if (respuestaSalida === "SI") {
                alert("👋 Gracias por nada")
            }
            else {
                accion = ""
            }
            break;

        default:
            alert(`🚫 Opcion incorrecta`)
            break;
    }
}
