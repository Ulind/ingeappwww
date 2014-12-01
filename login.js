 
	$('#formulario').submit(function() {
	// recolecta los valores que inserto el usuario
	var datosUsuario = $("#nombredeusuario").val()
	var datosPassword = $("#clave").val()
	archivoValidacion = "../services/validacion_de_datos.php?jsoncallback=?"
	 
	$.getJSON( archivoValidacion, { usuario:datosUsuario, password:datosPassword})
	.done(function(respuestaServer) {

	if(respuestaServer.validacion == "ok"){
	/// si la validacion es correcta, muestra la pantalla "home"
        $("body").pagecontainer("change", "#inicio", { });	
    }else{
	/// ejecutar una conducta cuando la validacion falla
	    alert(respuestaServer.mensaje + "\nGenerado en: " + respuestaServer.hora + "\n" +respuestaServer.generador)
	}
	})
	return false;
	})
