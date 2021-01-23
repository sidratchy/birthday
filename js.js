var leftDoor = document.getElementById('leftDoor');
var rightDoor = document.getElementById('rightDoor');
var unlock = document.getElementById('open');
var lock = document.getElementById('close');
var doorSound = document.getElementById('doorsound');
var party = document.getElementById('party');
var bdaySong = document.getElementById('bsong');
var txtanim = document.getElementById('txt');
var imganim = document.getElementById('myimg');


function openDoor(){

    setTimeout(() => {
        bdaySong.play();
        bdaySong.loop =true;
    }, 5000);
doorSound.play();

   imganim.classList.add('myimg');
    txtanim.classList.add('tanim');
   unlock.classList.add('open');
   unlock.style.opacity='0';
   lock.classList.add('close');
   lock.style.opacity='1';

   leftDoor.classList.add('leftDoor');
   rightDoor.classList.add('rightDoor');
   party.classList.add('party');
}

function closeDoor(){
    doorSound.play();
    bdaySong.pause();
    unlock.classList.add('open');
   unlock.style.opacity='1';
    lock.classList.add('close');
    lock.style.opacity='0';

    leftDoor.classList.add('leftclose');
    rightDoor.classList.add('rightclose');
}

