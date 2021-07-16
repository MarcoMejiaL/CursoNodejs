function hola(nombre, miCallback){
    setTimeout(() => {
    console.log(`hola mi nombre es ${nombre}`);        
    miCallback(nombre);
    }, 1500);
}
function adios(nombre, otroCallback){
    setTimeout(() => {
       console.log(`adios ${nombre}`); 
       otroCallback();
    }, 1000);
}
console.log('iniciando el proceso...');
hola('marco', function(nombre){
    adios(nombre,function(){
        console.log('Terminando Proceso');
    })
})