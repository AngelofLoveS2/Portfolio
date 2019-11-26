document.addEventListener('DOMContentLoaded',Common.init);

function move_event(move){
    document.getElementById(move).scrollIntoView({behavior: 'smooth'});
}