const {exec, spawn}  =require('child_process');

/* exec('node 03consola.js',(err,stdout,sterr)=>{
    if(err){
        console.error(err);
        return false;
    }

    console.log(stdout);
}) */
let proceso = spawn('ls',['-la']);

/* console.log(proceso.listenerCount); */
proceso.stdout.on('data',function(dato){
    console.log(process.kill);
    console.log(dato.toString())
})

proceso.on('exit',()=>{
    console.log('el proceso termino');
})