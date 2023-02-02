
const mostrarInformacion = document.querySelector("#mostrar-datos");


mostrarInformacion.onclick = function(){
    const primerNombreUsuario = document.querySelector("#primer-nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
    const apellidosUsuario = document.querySelector("#apellidos-usuario").value;
    const edadUsuario = Number(document.querySelector("#edad-usuario").value) || "--";
    const datosUsuario = formatearDatosUsuario(primerNombreUsuario, segundoNombreUsuario, apellidosUsuario, edadUsuario);
    const saludoUsuario = `Bienvenido, ${primerNombreUsuario} !`;
    document.querySelector("#encabezado").innerText = saludoUsuario;
    document.querySelector("#datos-texto").innerText = datosUsuario;
    console.log(datosUsuario);
    return false;
   
}

function formatearDatosUsuario(primerNombreUsuario, segundoNombreUsuario, apellidosUsuario, edadUsuario){

    datosUsuarioFormateados = `Nombre: ${primerNombreUsuario} ${segundoNombreUsuario} ${apellidosUsuario} Edad: ${edadUsuario} años`;

    return datosUsuarioFormateados;
}

