fetch('http://economia.awesomeapi.com.br/json/last/USD-BRL').then(response=>{
    return response.json()
}).then(bd => {

    const dol = (bd.USDBRL.bid);
    const real = document.getElementById('real');
    const btn = document.getElementsByTagName('button')[0]
    
    function converter(m1){
        return m1 * dol
    }
    
    btn.addEventListener('click', () => {
    
        const res = document.getElementsByTagName('p')[0];
        let con =  converter(Number(real.value));
        
        res.innerHTML = '$ ' + con.toFixed(2);

    })

})

