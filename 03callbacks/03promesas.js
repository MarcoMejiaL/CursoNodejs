function hola(nombre){
    return new Promise (function(resolve, reject){
        setTimeout(() => {
            console.log(`hola mi nombre es ${nombre}`);        
            resolve(nombre);
            }, 1500);
    })
    
}
function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('bla bla bla....');
            resolve(nombre);
        }, 1000);
    })
    
}
function adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`adios ${nombre}`); 
            resolve();
         }, 100);
    })
    
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
console.log('iniciando el proceso');
hola('marco').then(hablar).then(
    adios
).then(()=>{
    console.log('proceso Terminado');
}).catch(error =>{
    console.error('hay un erro');
    console.error (error);
})
