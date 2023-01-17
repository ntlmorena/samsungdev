//Declaración de variables
let nameAlert, nameIcon, emailAlert, emailIcon, passAlert, passIcon, verAlert, verIcon;
let contraseña;

//Función llamada en el onload del body en HTML
function creacionVariables(){
	//Asignación de variables para los distintos elementos de la web donde se mostrarán los iconos de alerta (campo correcto o erroneo)
	nameAlert = document.getElementById("nameAlert");
	nameIcon = document.getElementById("nameIcon");
	emailAlert = document.getElementById("emailAlert");
	emailIcon = document.getElementById("emailIcon");
	passAlert = document.getElementById("passAlert");
	passIcon = document.getElementById("passIcon");
	verAlert = document.getElementById("verAlert");
	verIcon = document.getElementById("verIcon");

}


//Función que envía el formulario
function enviar(){
	//Se declaran nuevas variables y se guardan los elementos input del formulario
	let nombre = document.getElementById("name");
	let email = document.getElementById("email");
	let contraseña = document.getElementById("clave");
	let verification = document.getElementById("verificacion");
	
	//Se comprueba si los datos son correctos en las funciones correspondientes (en el caso de enviar el formulario sin introducir ningún dato en el)
	nameCorrecto(nombre);
	emailCorrecto(email);
	passCorrecto(contraseña);
	verificacionCorrecta(verification);

	//Se realiza una nueva comprobación, y si todos los datos son correctos
	if (nameCorrecto(nombre) && emailCorrecto(email) && passCorrecto(contraseña) && verificacionCorrecta(verification)){
		//Si los datos son correctos se muestra una alerta en pantalla
		alert("La inscripción ha sido correcta");
		
		//En este punto se podría acceder a una base de datos para realizar el guardado del usuario
	}
	
}

//Función que comprueba el nombre 
function nameCorrecto(name){
	//Se declara un Expresión Regular que comprueba que contenga caracteres válidos. De la "a" a la "z", mayusculas, minusculas, con o sin acentos 
	let patternName = /^[a-zA-ZÀ-ÿ ]+$/;
	
	//Se realiza un test que evalua la RegExp con el valor del parámetro recibido
	if( patternName.test(name.value)){
		//Si el resultado es postivio, se muestra correcto
		bien(nameAlert, nameIcon);
		return true;
	}
	else{
		//Si no, se muestra error
		mal(nameAlert, nameIcon);
		return false;
	}
}


//Función que comprueba el correo electrónico 
function emailCorrecto(email){
	//Se declara un Expresión Regular que comprueba el email 
	let patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	//Se realiza un test que evalua la RegExp con el valor del parámetro recibido
	if( patternEmail.test(email.value)){
		//Si el resultado es postivio, se muestra correcto
		bien(emailAlert, emailIcon);
		return true;
	}
	else{
		//Si no, se muestra error
		mal(emailAlert, emailIcon);
		return false;
		
	}
}


//Función que comprueba la contraseña, el requisito es que sea mayor de 8 caracteres
function passCorrecto(pass){
	//Se declara una nueva variable con el valor del parametro recibido
	contraseña = pass.value;
	//Se comprueba la longitud de la cadena de caracteres contenidos en el valor recibido
	if(contraseña.length < 8){ 
		
		//Si es menor que 8, se muestra error	
		mal(passAlert, passIcon);
		return false;
	}
	else{
		//Si no, se muestra correcto
		bien(passAlert, passIcon);
		return true;
	}
}


//Función que comprueba la verificación de la contraseña
function verificacionCorrecta(verification){
	//Se verifica que la confirmación de la contraseña cumpla los mismos requisitos que la contraseña
	if(verification.value < 8){
		//Si no es así, se muestra error
		mal(verAlert, verIcon);
		return false;
	}else{
		//Si la contraseña no es nula (caso en el que aún no se ha escrito) y la verificación es igual que la contraseña
		if((contraseña != null) && (contraseña == verification.value)){
			//Se muestra icono de correcto
			bien(verAlert, verIcon);
			return true;
		}
		else{
			//En caso contrario, icono de error
			mal(verAlert, verIcon);
			return false;
		}
	}
}


//Función que comprueba que el campo no esta vacío
function vacio(elem) {
	//Si el campo no es nulo y no esta vacío
	if ((elem != null)||(elem !="")){	
		//Se declara la variable que alamcena su valor
		let cadena = elem.value;
		//Si la longitud de la cadena es 0 se devuelve false, si no, true
		if(cadena.length == 0) {
			return false;
		} else {
			return true;
		}
	return false;
	}
}


//Función que añade y elimina las clases css para estado de error
function mal(classAlert, classIcon){
	
	classAlert.classList.remove("noalert");
	classAlert.classList.add("alert");
	
	classIcon.classList.remove("iconSuc");
	classIcon.classList.remove("iconEmp");
	classIcon.classList.add("iconErr");
	
}


//Función que añade y elimina las clases css para estado correcto
function bien(classAlert, classIcon){
	classAlert.classList.remove("alert");
	classAlert.classList.add("noalert");
	
	classIcon.classList.remove("iconEmp");
	classIcon.classList.remove("iconErr");
	classIcon.classList.add("iconSuc");
}