const bcrypt = require('bcrypt');

const password = '12345Segura!';

bcrypt.hash(password, 5, function(error,hash){
    console.log(hash);
    
})