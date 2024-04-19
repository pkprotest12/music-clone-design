
// function pp(){
//     let playMusic = document.querySelector('.play-music-card');
//     playMusic.style.backgroundColor='blue';


// }

function mcard_showHide() {
    playMusic.classList.toggle('opacity');

}
function removeBox() {
    playMusic.style.right = '-10%'
    playMusic.style.display='none';
}

let mBtn = document.querySelectorAll('.music-button');
let playMusic = document.querySelector('.play-music-card');
let d = 0;
for(let i = 0; i < mBtn.length; i++){
mBtn[i].addEventListener('click', function () {
    playMusic.classList.add('opacity')
    playMusic.style.display='block';

    // playMusic.style.display='block';
    playMusic.style.right = '60px';
    pause.style.display = 'block';
    play.style.display = 'none';

});
}
//style ='opacity: 1 !important;'
//   playMusic.classList.toggle('opacity')

// if(d==0){
//     playMusic.classList.add('opacity');
//     // playMusic.style ='opacity: 1 !important;'
//     d = 1;
// }
// else{
//     playMusic.classList.toggle('opacity');
//     // playMusic.style ='opacity: 0 !important;'
//   d = 0
// }

//   current play music card   start

let play = document.querySelector('.m-playbtn');
let pause = document.querySelector('.m-pausebtn');
let next = document.querySelector('.m-nextbtn');
let pre = document.querySelector('.m-prebtn');
let close = document.querySelector('.m-card-close');
let mImg = document.querySelector('.music-img');
let p = 0;


mImg.addEventListener('mouseover', function () {
    close.style.opacity = '1'
    close.style.right = '10px'
    close.style.zIndex = '10'
})
//     mImg.addEventListener('mouseleave',function(){
// close.style.opacity ='0'
// close.style.right ='0'
// close.style.zIndex ='-1'
//     })
play.addEventListener('click', function () {
    if (p == 0) {
        play.style.display = 'none'
        pause.style.display = 'block'
        p = 1;
    }
    else {
        p = 0;
    }

})
pause.addEventListener('click', function () {
    if (p == 0) {
        play.style.display = 'block'
        pause.style.display = 'none'

        p = 1;
    }
    else {
        play.style.display = 'block'
        pause.style.display = 'none'
        p = 0;
    }

})
// close m-playing card
close.addEventListener('click', mcard_showHide);
close.addEventListener('click', removeBox);

close.addEventListener('click', mdown)
close.addEventListener('click', function () {
    this.style.opacity = '0'
    this.style.right = '0'
    this.style.zIndex = '-1'
})


//   current play music card event  start
function mdown() {
    this.style.color = 'red';
    this.style.background = 'white'
}
function mup() {
    this.style.color = 'aquamarine';
    this.style.background = 'none'

}

next.addEventListener('mousedown', mdown);
next.addEventListener('mouseup', mup);
pre.addEventListener('mousedown', mdown);
pre.addEventListener('mouseup', mup);
pause.addEventListener('mousedown', mdown);
pause.addEventListener('mouseup', mup);
play.addEventListener('mousedown', mdown);
play.addEventListener('mouseup', mup);

//   current play music card event  end

// document.mBtn.forEach(e => {
//     mBtn.style='background-color:red !important;'
// });
let a = 2;
let b = 3;
let c = a + b;
console.log(c)



// play music all song js 
let musicPlay = document.querySelectorAll('.playbtn');
let musicPause = document.querySelector('.m-pausebtn');
let musicSong = document.querySelectorAll('.music-item');
let musicTimeStart = document.querySelector('.mt-start')
let musicTimeEnd = document.querySelector('.mt-end')
let musicDuration = musicSong[0,1,2,3,4].duration / 60 ;
let musicDurationC = musicDuration.toFixed(2);

// function getVal(){
//     musicSong.on("loadedmetadata", function(){
//         var val = musicSong.duration;
//         console.log(">>>" + val);
//         return val;
//     })};

// // console.log(val)

next.addEventListener('click',function(){
    let ns = 0;
    if(ns==0 && musicSong[0].paused){
        musicSong[0].play();
        musicSong[2].pause();
        musicSong[3].pause();
        musicSong[4].pause();
        musicSong[1].pause();
        musicSong[1].currentTime=0;
        ns = 1;
    }
    else if(ns==1 && musicSong[0].played){
        musicSong[1].play();
        musicSong[2].pause();
        musicSong[3].pause();
        musicSong[4].pause();
        musicSong[0].pause();
        ns = 2;

    }
    else if(ns==2 && musicSong[2].paused){
        musicSong[2].play();
        musicSong[1].pause();
        musicSong[3].pause();
        musicSong[4].pause();
        musicSong[0].pause();
        ns = 3;

    }
    else{
        musicSong[1].play();
        musicSong[2].pause();
        musicSong[3].pause();
        musicSong[4].pause();
        musicSong[0].currentTime=0;
        musicSong[0].pause();
    }
    console.log(ns)

})

    
for(let m =0;m<musicPlay.length; m++){

    musicPlay[m].addEventListener('click',function(){
        console.log(musicDurationC)
    
        if(musicSong[0].paused){
            musicSong[0].play();
            musicTimeEnd.innerHTML= musicDurationC;
    
        }
        else{
            musicSong[0].currentTime=0;
        }
    })
}

musicPause.addEventListener('click',function(){
    console.log(musicDuration)

    if(musicSong[0].played){
       musicSong[0].pause();

    }
    else{
        musicSong[0].currentTime=0;
    }
})
musicPause.addEventListener('click',function(){
    console.log(musicDuration)

    if(musicSong[1].played){
       musicSong[1].pause();

    }
    else{
        musicSong[1].currentTime=0;
    }
})
