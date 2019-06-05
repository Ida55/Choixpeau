
const chapeau = document.getElementById('chapeau');

chapeau.addEventListener('click', function(){
    let les_maisons = ['400', '401', '403', '404'];
    let msg = document.getElementById('msg');
    let maison = les_maisons[Math.floor(Math.random()*les_maisons.length)];

    msg.innerHTML = `Ta maison sera ...`;


    let scaleImg = chapeau.width / 471;

    msg.classList.add('noTransition');
    // Animation :
    msg.style.left = 280 * scaleImg + 'px';
    msg.style.top = 245 * scaleImg + 'px';


    setTimeout(function(){
        msg.classList.remove('noTransition');
        msg.style.top = 100 * scaleImg + 'px';
        msg.style.left = 350 * scaleImg + 'px';
        msg.style.opacity = '1';
        msg.style.transform = `scale(${scaleImg})`;
    }, 10);

    setTimeout(function() {
        msg.innerHTML = maison + ' !!!'; 
    }, 2000);

});


    


/* 
image : 471px 371px
x : 280px
y : 245px


*/