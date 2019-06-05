
document.getElementById('chapeau').addEventListener('click', function(){
    let les_maisons = ['400', '401', '403', '404'];

    let maison = les_maisons[Math.floor(Math.random()*les_maisons.length)];

    document.getElementById('msg').innerHTML = `Ta maison sera : ${maison}`;
})