// var btnPlay  = document.getElementById('#btnPlay'),
//     btnPause = document.getElementById('#btnPause'),
//     btnMute  = document.getElementById('#btnMute');
var myVideo = document.getElementById('myVideo');

myVideo.addEventListener('click', function(){
  if (myVideo.paused) {
    myVideo.play();
    document.getElementById('btnPlay').className = 'fa fa-pause fa-2x';
  }else {
    myVideo.pause();
    document.getElementById('btnPlay').className = 'fa fa-play fa-2x';
  }
});

document.getElementById('btnPlay').addEventListener('click', function(){
  if (myVideo.paused) {
    myVideo.play();
    document.getElementById('btnPlay').className = 'fa fa-pause fa-2x';
  }else {
    myVideo.pause();
    document.getElementById('btnPlay').className = 'fa fa-play fa-2x';
  }
});

myVideo.addEventListener('timeupdate', function(){
  let totalDuration = Math.floor(myVideo.duration / 60);
  let myMinutes     = Math.floor(myVideo.currentTime / 60);
  let mySeconds     = Math.floor(myVideo.currentTime - myMinutes * 60);
  let totalSecs     = Math.floor(myVideo.duration - totalDuration * 60);


  if (mySeconds < 10) {
        mySeconds = "0"+mySeconds;
    }
    if (myMinutes < 10) {
        myMinutes = "0"+myMinutes;
    }
    if (totalSecs < 10) {
          totalSecs = "0"+totalSecs;
      }


  document.getElementById('btnTimeLine').value = Math.floor((100 / myVideo.duration) * Math.floor(myVideo.currentTime));
  document.getElementById('currentTime').innerHTML = myMinutes +":" + mySeconds + " / " + Math.floor(myVideo.duration / 60) + ":" + totalSecs;
  if(myVideo.duration == myVideo.currentTime){
    document.getElementById('btnPlay').className = 'fa fa-repeat fa-2x';
  }
});


document.getElementById('btnTimeLine').addEventListener('change', function(){
  myVideo.currentTime = document.getElementById('btnTimeLine').value = Math.floor(document.getElementById('btnTimeLine').value / 100 * myVideo.duration);
});


document.getElementById('btnMute').addEventListener('click', function(){
  if (myVideo.muted) {
    myVideo.muted = false;
    document.getElementById('btnMute').className = 'fa fa-volume-off fa-2x'
  }else {
    myVideo.muted = true;
    document.getElementById('btnMute').className = 'fa fa-volume-up fa-2x'
  }
});
