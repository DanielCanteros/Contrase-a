const botonGenerar = document.getElementById('generador');
const botonCopiar = document.getElementById('copiador');
const contraseña = document.getElementById('contraseña-creada');

const longitudContraseña=12;

function generarContraseña(){
    let caracteres = "qwertyuiopasdfghjklzxcvbnm123456789_*/-+!#$%&()";
    let contra = "";

    for(let i=0;i<longitudContraseña;i++){
       let crearCaracteres = Math.floor(Math.random()*caracteres.length);
        contra += caracteres[crearCaracteres];
    }
    return contra;
}

botonGenerar.addEventListener('click',function(){
    let nuevaContraseña = generarContraseña();
    contraseña.innerText = nuevaContraseña;

})
