const fs = require('fs')

function leer(ruta, cb){
    fs.readFile(ruta, (err, data)=>{
        //Leido
        console.log(data.toString());
    })
}
const escribir=(ruta, contenido,cd)=>{
    fs.writeFile(ruta, contenido,function(err, ){
        if(err){
            console.erro('No se ha podito'+err)
        }
        else{
            console.log('se ha escrito bien');
        }

    });
}


const borrar =(ruta,cb)=>{
    fs.unlink(ruta,cb);
}

leer(__dirname + '/archivo.txt')

escribir(__dirname+'/archivo2.txt', 'soy un archivos nuevo',console.log);
borrar(__dirname+ '/archivo2.txt',console.log);