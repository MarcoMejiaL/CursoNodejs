
process.on('beforeExit',()=>{
    console.log('El proceso va a terminar');
});


process.on('exit',()=>{
    console.log('el proceso acabo');
});

process.on('uncaughtException',(err,origen)=>{
    console.error('se ha olvidado un error');
    console.error(err)
});


functio22n();
/* process.on('uncoughtRejection') */