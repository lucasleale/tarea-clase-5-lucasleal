
const mostrarInformacion = document.querySelector("#mostrar-datos");


mostrarInformacion.onclick = function(){
    const primerNombreUsuario = document.querySelector("#primer-nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
    const apellidosUsuario = document.querySelector("#apellidos-usuario").value;
    const edadUsuario = Number(document.querySelector("#edad-usuario").value);
    
    return false;
   
}


