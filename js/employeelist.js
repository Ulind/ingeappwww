var serviceURL = "http://ingesis.info/app/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.IDProducto + '">' +
					'<img src="../../fotos/' + employee.ImgProducto + '"/>' +
					'<h4>' + employee.NombreProductoES + ' </h4>' +
					
					'<span class="ui-li-count">' + employee.PrecioProducto + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}