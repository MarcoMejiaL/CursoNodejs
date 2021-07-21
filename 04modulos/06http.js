const http = require('http');
//se solicita de node

http.createServer(router).listen(3000);
//nombre variable - funcion (nombre de la funcion).elnumero(delpuerto)
function router(req,res){
    //2 parametros require y response
    console.log('nueva peticion');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('hola');
            res.end()
            break;

        default:
        res.write('error 404');
        res.end();
    }
    
    
    /* res.writeHead(201,{'Content-Type': 'text/plain'}) */

    /* respues a usuario */
    /* res.write('hola, esto es un servidor nodejs')

    res.end(); */
}

console.log('escuchando htpp en el puerto 3000')