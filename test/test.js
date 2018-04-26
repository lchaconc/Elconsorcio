
var arrayTest =[
	{"marca" : "marca1" , "modelo" : "modelo1"},
	{"marca" : "marca2" , "modelo" : "modelo2"},
	{"marca" : "marca3" , "modelo" : "modelo3"},
	{"marca" : "marca4" , "modelo" : "modelo4"},
	{"marca" : "marca5" , "modelo" : "modelo5"}
];

QUnit.test( "test Módulo autocompletar", function( assert ) {
	console.log(arrayTest);
	assert.ok( true == cargarAutocompletar(arrayTest) );
});


QUnit.test( "test Módulo cosnluta por clave", function( assert ) {
	assert.ok( "" != hacerConsulta(arrayTest, "marca1", "marca") );
});



