"use strict";


$(document).ready(function () {
  console.log("ready");
      $.getJSON( "http://explorahorizontes.com/database/autos.php", function( dataset ) {
		addEventClic(dataset);
		cargarAutocompletar(dataset);
    });
})

function addEventClic(dataset) {
  $(".btn-primary").click(function () {
    var selector = this.id.slice(3);
    //console.log(selector);
    mostrarArray(hacerConsulta(dataset, $("#txt"+selector).val(), selector), $("#visor"+selector));
  });
  $("#btgeneral").click(function () {
    mostrarArray(dataset, $("#visorgeneral"));
  })
}


function cargarAutocompletar (array) {
	var listaMarca2 = [], listaMarca = [] , listaModelo2 = [], listaModelo = [], limite = array.length, tmpMarca;
	
	for (var i = 0; i < limite; i++) {
		listaMarca2.push(array[i].marca);
	};
	
	for (var i = 0; i < limite; i++) {
		listaModelo2.push(array[i].modelo);
	};
	
	
	//eliminar campos repetidos		
	$.each(listaMarca2, function(i, el){
		if($.inArray(el, listaMarca ) === -1) listaMarca .push(el);		
	});	
	$.each(listaModelo2, function(i, el){
		if($.inArray(el, listaModelo ) === -1) listaModelo .push(el);		
	});	
	
	$( "#txtmarca" ).autocomplete({
		source : listaMarca,
		create: function( event, ui ) {	
		}
	});	
	
	$( "#txtmodelo" ).autocomplete({
		source : listaModelo,
		create: function( event, ui ) {
		}
	});	
	
	return true;
}


function hacerConsulta(array, clave, campo) {
  var arraySeleccion = [], limite = array.length;
  for (var i = 0; i < limite; i++) {
    switch (campo) {
      case "marca":
          if (clave.toLowerCase() == array[i].marca.toLowerCase()) {
            arraySeleccion.push(array[i]);
          }
        break;
      case "modelo":
          if (clave.toLowerCase() == array[i].modelo.toLowerCase()) {
            arraySeleccion.push(array[i]);
          }
        break;
      default:
        console.log("selección fuera de rango");
    }
  }
      return  arraySeleccion;
}


function mostrarArray (array, cont) {
//limpia el objeto
  $(cont).empty();
  // Creación de objetos HTML
  var  limite = array.length, fila ="",
  tabla = $("<table> <tr>" +
  "<th>ID</th>" +
  "<th>Marca</th>" +
  "<th>Modelo</th>" +
  "<th>Color</th>" +
  "<th>País de destino</th>" +
  "<th>Fecha de envío</th>" +
  "</tr></table>");

  //Definición de las propiedades del objeto
  $(tabla).addClass("table table-striped");
  $(tabla).attr("id","tablaRegistros");

for (var i = 0; i < limite; i++) {
  //Creación de las filas de forma dinánmica
    fila = $("<tr>"+
      "<td>" + array[i].id + "</td>" +
      "<td>" + array[i].marca + "</td>" +
      "<td>" + array[i].modelo + "</td>" +
      "<td>" + array[i].color + "</td>" +
      "<td>" + array[i].destino + "</td>" +
      "<td>" + array[i].envio + "</td>" +
      "</tr>" );

     // Una vez creada la fila se agrega en la tabla
     $(tabla).append(fila);
};

  //Imprime en el HTML cada párrafo que contiene cada uno de los registros
  $(cont).append(tabla);

};
