function hola(nombre, miCallback){
    setTimeout(() => {
    console.log(`hola mi nombre es ${nombre}`);        
    miCallback(nombre);
    }, 1500);
}
function hablar(callbackHablar){
    setTimeout(() => {
        console.log('bla bla bla....');
        callbackHablar();
    }, 1000);
}
function adios(nombre, otroCallback){
    setTimeout(() => {
       console.log(`adios ${nombre}`); 
       otroCallback();
    }, 100);
}
function conversacion(nombre, veces, callback){
    if(veces >0){
    hablar(function(){
        conversacion(nombre, --veces, callback);
    })
    }else{
        adios(nombre, callback);
    }
}

console.log('iniciando el proceso...');
hola('marco',function(nombre){
    conversacion(nombre,3, function(){
        console.log('proceso terminado');
    })
})
/* hola('marco', function(nombre){
    hablar(function(){
        adios(nombre,function(){
            console.log('Terminando Proceso');
        })
    })
    
}) */