

var usuarios = [

    {usuario: "Admin", contraseña: "123"},
    {usuario: "Fabio", contraseña: "123"},
    {usuario: "Eve", contraseña: "123"}

];

function validar ()
{
var userT = document.getElementById("txt-user").value;
var PassT = document.getElementById("txt-contraseña").value;
if (userT!="" && PassT!=""){

 for (let i= 0; i< usuarios.length; i++) {
     
     if (userT == usuarios[i].usuario && PassT == usuarios[i].contraseña){
        var a="Correcto"
        alert(a);
     }
   }

   if (a!="Correcto"){
       alert("Incorrecto")
   }else{
    location.href="../Pagina Centro medico/html/inicio.html"
   
    document.getElementById('respuesta').innerHTML="Hola "+userT

   }
}else{
    alert("Campos Vacios")
   
}
}

function registrar(){
    
    var UsuarioRegistado=document.getElementById("txt-userr").value;
    
    var Contraseñaregistrada=document.getElementById("txt-contraseñar").value;
    
    if(UsuarioRegistado!=""&&Contraseñaregistrada!=""){
    var nuevoU ={  usuario : UsuarioRegistado , contraseña : Contraseñaregistrada };
    usuarios.push(nuevoU);
    alert("Registro Exitoso")
    }else{
        alert("LLene todos los compos")
    }


    	

}

function nobackbutton(){
    	
    window.location.hash="no-back-button";
     
    window.location.hash="Again-No-back-button" //chrome
     
    window.onhashchange=function(){
    window.location.hash="no-back-button";
}
     
 }
window.onload = function(){
    window.location.hash="no-next-button";  
    window.location.hash="Again-No-next-button" 
    
    window.onhashchange=function(){
        window.location.hash = "no-next-button";
    }
}







     

