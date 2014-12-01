$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
	$.getJSON(serviceURL + 'getmensajes.php?id='+id, displayMensajes);

});

function displayEmployee(data) {
	var employee = data.item;
	$('#employeePic').attr('src', '../../fotos/' + employee.ImgProducto);
	$('#fullName').text(employee.NombreProductoES);
	
	$('#actionList').listview('refresh');
	
}


function displayMensajes(data) {
		$('#mensajeList li').remove();
		mensajes = data.items;
		$.each(mensajes, function(index, employee) {
			$('#mensajeList').append('<li><a href="employeedetails.html?id=' + employee.ID + '">' +
					'<h4>' + employee.Mensaje + ' </h4>' +
					
					'<span class="ui-li-count">' + employee.IDPadre + '</span></a></li>');
		});
		$('#mensajeList').listview('refresh');
	
}


$('#mensajeform').submit(function() {
  alert('Handler for .submit() called.');
	var mensajeUsuario = $("#mensaje").val();
    archivoMensaje = "../services/mensaje.php?jsoncallback=?&id="+id;

    alert(mensajeUsuario);
    $.getJSON(
      archivoMensaje, {mensaje:mensajeUsuario}
      )
    .done(function(respuestaServer) {

      if(respuestaServer.validacion == "ok") {
        /// si la validacion es correcta, muestra la pantalla "home"
        alert("la");
      }else{
        /// ejecutar una conducta cuando la validacion falla
        alert(respuestaServer.mensaje + "\nTipo de consulta: " + respuestaServer.hora + "\n" +respuestaServer.generador);
      }
    });
    return false;

});


  // $('#mensajesform').submit(function() {
  //   // recolecta los valores que inserto el usuario
  //   alert("so boton");
  //   var mensajeUsuario = $("#mensaje").val();
  //   archivoMensaje = "../services/mensaje.php?jsoncallback=?&id="+id;

  //   alert(mensajeUsuario);
  //   $.getJSON(
  //     archivoMensaje, {mensaje:mensajeUsuario}
  //     )
  //   .done(function(respuestaServer) {

  //     if(respuestaServer.validacion == "ok") {
  //       /// si la validacion es correcta, muestra la pantalla "home"
  //       alert("la");
  //     }else{
  //       /// ejecutar una conducta cuando la validacion falla
  //       alert(respuestaServer.mensaje + "\nTipo de consulta: " + respuestaServer.hora + "\n" +respuestaServer.generador);
  //     }
  //   });
  //   return false;
  // });




function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


