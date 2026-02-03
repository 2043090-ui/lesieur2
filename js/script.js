const btPlus = document.querySelector('.js-plus');
const conteneur = document.querySelector('.conteneur_transport');

btPlus.addEventListener('click', fouvreferme);

function fouvreferme(){
    conteneur.classList.toggle('conteneur_transport_invisible');
}