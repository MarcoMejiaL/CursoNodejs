const puppeteer =require('puppeteer');

(async ()=>{

    console.log('Lanzamos Navegador');
    /* const browser = await puppeteer.launch(); */
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js')
    var titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
    })
    console.log('cerramos Navegador');

    /* browser.close();  */
    console.log('navegador cerrado');
})();