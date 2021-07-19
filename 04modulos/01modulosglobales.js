let i =0
let interval = setInterval(() => {
    console.log('hola');
    if(i===3){
        clearInterval(interval)
    }
    i++
    
}, 2000);



setImmediate(()=>{
    console.log('paco');
})

