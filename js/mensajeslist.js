var mensajes;

$('#detailsPage').bind('pageinit', function(event) {
	getMensajesList();
});

function getMensajesList() {
	$.getJSON(serviceURL + 'getmensajes.php?id='+id, function(data) {
		alert("por lo menos entro a la lita de mensajes!")
		$('#mensajeList li').remove();
		mensajes = data.items;
		$.each(mensajes, function(index, employee) {
			$('#mensajeList').append('<li><a href="employeedetails.html?id=' + employee.ID + '">' +
					'<h4>' + employee.Mensaje + ' </h4>' +
					
					'<span class="ui-li-count">' + employee.IDPadre + '</span></a></li>');
		});
		$('#mensajeList').listview('refresh');
	});
}