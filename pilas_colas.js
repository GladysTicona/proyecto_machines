var mecanicos = [];

mecanicos.push("Juan");
mecanicos.push("Jose") ; //pilas
mecanicos.push("Manuel");

var maquinas = [];

maquinas.push(308);
maquinas.push(303); //cola
maquinas.push(190);

function esVacia(arreglo)

{
	
	return (arreglo.lenght==0);
	
	
}

function asignar()
{
	
	var nroMaquina=maquinas.shift();
	var nameMecanico=mecanicos.pop();
	document.write(nroMaquina+"-"+nameMecanico);
	document.write("<br>");
}

//&& los dos tienen que ser vedaderos
while(!esVacia(maquinas) && !esVacia(mecanicos))
		
{
	asignar();
	
}




















































/*******************************************************************************
 * function esVacia(arreglo) { if (arreglo.length==0) return true;
 * 
 * else return false;
 *  }
 * 
 * 
 * esVacia(mecanicos); esVacia(maquinas);/
 ******************************************************************************/