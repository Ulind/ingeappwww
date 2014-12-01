  $('#formularioM').submit(function() {
  // recolecta los valores que inserto el usuario
alert("aca tambie entro, ojo")
  var mensajeUsuario = $("#mensaje").val()
  archivoMensaje = "../services/mensaje.php?jsoncallback=?"+id

   alert (mensajeUsuario)
  $.getJSON( archivoMensaje, { mensaje:mensajeUsuario})
  .done(function(respuestaServer) {

  if(respuestaServer.validacion == "ok"){
  /// si la validacion es correcta, muestra la pantalla "home"
    alert("la")
    }else{
  /// ejecutar una conducta cuando la validacion falla
      alert(respuestaServer.mensaje + "\nTipo de consulta: " + respuestaServer.hora + "\n" +respuestaServer.generador)
  }
  })
  return false;
  })