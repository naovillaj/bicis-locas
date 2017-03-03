function validateForm(){
	
  var nombre = document.getElementById('name').value;
  var apellido = document.getElementById('lastname').value;
  var correo = document.getElementById('input-email').value;
  var contrasena = document.getElementById('input-password').value;
  var opciones = document.getElementById("option").value;
  var primerNombre = nombre.charAt(0).toUpperCase() + nombre.substring(1).toLowerCase();
  var primerApellido = apellido.charAt(0).toUpperCase() + apellido.substring(1).toLowerCase();
  

  
  
  if ((nombre == "" || /^\s*$/.test(nombre) == true )&& (apellido == "" || /^\s*$/.test(apellido) == true) 
  	   && (correo == "" || /^\s*$/.test(correo == true)) && (contrasena == "" || /^\s*$/.test(contrasena) == true) && opciones == 0){
    alert("Ingresa toda la información requerida");
    return false;
  } else {document.getElementById('name').focus();}

   
  if( primerNombre != nombre || /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre) == false)  {
  	  alert("El nombre debe empezar con letra mayúscula");
  	  document.getElementById('name').focus();
      return false;
  } else {document.getElementById('lastname').focus();}


  if( primerApellido != apellido || /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(apellido) == false){
      alert("El apellido debe empezar con letra mayúscula");
  	  document.getElementById('lastname').focus();
      return false;
  } else {document.getElementById('input-email').focus();}


  if (/^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/.test(correo) == false){
    alert("El correo no está en el formato establecido (debe llevar un @ y .)");
    document.getElementById('input-email').focus();
    return false;
  } else {document.getElementById('input-password').focus();}


  if(contrasena.length<6){
    alert("El tamaño mínimo de la contraseña es de 6 caracteres");
    document.getElementById('input-password').focus();
    return false;
   
  }else if(contrasena == "password" || contrasena == "123456" || contrasena == "098754"){
    alert("Contraseña no segura");
    document.getElementById('input-password').focus();
    return false;
    
  } else {document.getElementById("option").focus();}


  if (opciones == 0){
    alert("Elegir una opción de bicicleta");
    document.getElementById("option").focus();
    return false;
    
  } else {document.getElementById("input-social").focus();}
}