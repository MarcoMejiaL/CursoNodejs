const bcrypt = require('bcrypt');

const password = '12345Segura!';


bcrypt.hash(password, 5, function(error,hash){
    console.log(hash);
    bcrypt.compare(password,hash,function(err,result){
        /* console.log(err); */
        console.log(result);
    })
    
})
//moment es para la hora y el sharp es para reducir el tamaña de los png