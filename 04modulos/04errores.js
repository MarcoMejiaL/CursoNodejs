function error(){
    return 3 + 2;
}

function erroAsin(cb){
    setTimeout(() => {
        try {
            return 3+g;            
        } catch (err) {
            console.error('error en funcion asincrona')
            cb(err)
    }
}, 1000);
}
try {
     
    erroAsin((err)=>{
        console.log(err.message);
    })
} catch (err) {
    console.error('hay un error en la primer funcion')
    console.error(err)
    
}