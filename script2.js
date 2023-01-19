let tags = [
    {
        name: 'GREECE'
    },
    {
        name: 'ICELAND'
    },
    {
        name: 'NEW ZEALAND'
    },
    {
        name: 'SPAIN'
    }
]
const video = document.querySelector('.videoScreen')
const screen = document.querySelector('.screen-content').addEventListener('click', screenPlayPause)
const videoPlaylist1 = document.querySelector('.videoScreenPlaylist1')
const videoPlaylist2 = document.querySelector('.videoScreenPlaylist2')
const videoPlaylist3 = document.querySelector('.videoScreenPlaylist3')
const videoPlaylist4 = document.querySelector('.videoScreenPlaylist4')
const playButton = document.querySelector('.play').addEventListener('click', play)
const stopButton = document.querySelector('.stop').addEventListener('click', stop)
const nextButton = document.querySelector('.next').addEventListener('click', next)
const previousButton = document.querySelector('.previous').addEventListener('click', previous)
const muteVolume = document.querySelector('.muteButton')
const volumeSlider = document.querySelector('.sliderVolume')
const sliderTime = document.querySelector('.timeSlider')
const timeTextCurrent = document.querySelector('.pTimer1')
const timeTextDuration = document.querySelector('.pTimer2')
const loopButton = document.querySelector('.loop')
const now = document.querySelector('.now')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')
const p4 = document.querySelector('.p4')
const fullScreenButton = document.querySelector('.fullscr')
volumeSlider.addEventListener('click', volume)
sliderTime.addEventListener('click', sliderTimer)
loopButton.addEventListener('click', loopTrack)
muteVolume.addEventListener('click', mute)
fullScreenButton.addEventListener('click', fullScreen)
playlist1()
playlist2()
playlist3()
playlist4()
videoPlaylist1.addEventListener('click', clickPlaylist1)
videoPlaylist2.addEventListener('click', clickPlaylist2)
videoPlaylist3.addEventListener('click', clickPlaylist3)
videoPlaylist4.addEventListener('click', clickPlaylist4)
indexTrack = 0
video.src = `mp4File/${tags[indexTrack].name}.mp4`;
let count = 0
let count2 = 0
let count3 = 0
function fullScreen(){
    if (video.requestFullscreen){
        video.requestFullscreen();
    }
}
function nowListen(){
    now.innerHTML = `now: ${tags[indexTrack].name}`
}
function screenPlayPause(){
    if (count == 0){
        count = 1
        video.play()
    }else{
        count = 0
        video.pause()
    }
}
function play(){
    if (count == 0){
        count = 1
        video.play()
    }else{
        count = 0
        video.pause()
    }
}
function stop(){
    video.load()
}
function next(){
    if (indexTrack === 3){
        indexTrack = 0
        count = 1
        video.src = `mp4File/${tags[indexTrack].name}.mp4`;
        video.load()
        video.play()
    } else{
        indexTrack += 1
        video.src = `mp4File/${tags[indexTrack].name}.mp4`;
        count = 1
        video.load()
        video.play()
    }
}
function previous(){
    if (indexTrack === 0){
        indexTrack = 3
        video.src = `mp4File/${tags[indexTrack].name}.mp4`;
        video.load()
        video.play()
    } else{
        indexTrack -= 1
        video.src = `mp4File/${tags[indexTrack].name}.mp4`;
        video.load()
        video.play() 
    }
}
function loopTrack(){
    if(count3 == 0){
        count3 = 1
        video.loop = true
        loopButton.style.backgroundColor = 'rgb(56, 56, 56)';
    }else{
        count3 = 0
        video.loop = false
        loopButton.style.backgroundColor = 'rgb(0, 0, 0)';
    } 
}
function mute(){
    if (count2 == 0){
        count2 = 1
        video.volume = 0
        volumeSlider.value = 0
        muteVolume.style.backgroundColor = 'rgb(56, 56, 56)';
    }else{
        count2 = 0
        video.volume = 1
        volumeSlider.value = 100
        muteVolume.style.backgroundColor = 'rgb(0, 0, 0)';
    }
}
function volume(){
    video.volume = volumeSlider.value / 100
}
function sliderTimer(){
    let seekTo = video.duration * (sliderTime.value / 100)
    video.currentTime = seekTo;
}
sliderTime.max = sliderTime.max + video.duration   
    setInterval(() => {
        let minCur= Math.floor(video.currentTime / 60 % 60);
        let segCur= Math.floor(video.currentTime % 60);
        let minDur= Math.floor(video.duration / 60 % 60);
        let segDur= Math.floor(video.duration % 60);
        timeTextCurrent.innerHTML = `${minCur}:${segCur >= 10 ? segCur : '0' + segCur}`
        timeTextDuration.innerHTML = `${minDur}:${segDur >= 10 ? segDur : '0' + segDur}`
        let sliderPosition = video.currentTime * (100 / video.duration)
        sliderTime.value = sliderPosition
        if (video.currentTime == video.duration){
            if (indexTrack == 3){
                indexTrack = 0
            } else{
                indexTrack += 1
            }
            video.src = `mp4File/${tags[indexTrack].name}.mp4`;
            video.load()
            video.play()
            video.volume = volumeSlider.value / 100
        }
        nowListen()
    }, 1001);
function playlist1(){
        indexTrack = 0
        videoPlaylist1.src = `mp4File/${tags[indexTrack].name}.mp4`;
        videoPlaylist1.currentTime = Math.random()*100;
        p1.innerHTML = tags[indexTrack].name 
}
function playlist2(){
    indexTrack = 1
    videoPlaylist2.src = `mp4File/${tags[indexTrack].name}.mp4`;
    videoPlaylist2.currentTime = Math.random()*100; 
    p2.innerHTML = tags[indexTrack].name
}
function playlist3(){
    indexTrack = 2
    videoPlaylist3.src = `mp4File/${tags[indexTrack].name}.mp4`;
    videoPlaylist3.currentTime = Math.random()*100;
    p3.innerHTML = tags[indexTrack].name
}
function playlist4(){
    indexTrack = 3
    videoPlaylist4.src = `mp4File/${tags[indexTrack].name}.mp4`;
    videoPlaylist4.currentTime = 20;
    p4.innerHTML = tags[indexTrack].name
}
function clickPlaylist1(){
    count = 1
    indexTrack = 0
    video.src = `mp4File/${tags[indexTrack].name}.mp4`;
    video.load()
    video.play()
}
function clickPlaylist2(){
    count = 1
    indexTrack = 1
    video.src = `mp4File/${tags[indexTrack].name}.mp4`;
    video.load()
    video.play()
}
function clickPlaylist3(){
    count = 1
    indexTrack = 2
    video.src = `mp4File/${tags[indexTrack].name}.mp4`;
    video.load()
    video.play()
}
function clickPlaylist4(){
    count = 1
    indexTrack = 3
    video.src = `mp4File/${tags[indexTrack].name}.mp4`;
    video.load()
    video.play()
}

