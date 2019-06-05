
document.getElementById('chapeau').addEventListener('click', function(){
    let les_maisons = ['400', '401', '403', '404'];
    let msg = document.getElementById('msg');
    let maison = les_maisons[Math.floor(Math.random()*les_maisons.length)];

    msg.innerHTML = `Ta maison sera : ${maison}`;

    // Animation :
    msg.style.left = '280px';
    msg.style.top = '245px';

    setTimeout(function(){
        msg.style.top = '100px';
        msg.style.left = '350px';
        msg.style.opacity = '1';
        msg.style.transform = 'scale(1)';
    }, 20)

});



/* 

image : 471px 371px
x : 280px
y : 245px

*/