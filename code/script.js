/* IMG SLIDER */

var counter = 2;

setInterval(function () {
    var radioValue = document.getElementById('radio' + counter);
    radioValue.checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);


var move = function(){
    location.href="index.html";
}





/* modal */



var nellBtn = function(){
    document.getElementById("nellmodal").classList.add('fadeIn');
}

var closenellmodal = function(){
    document.getElementById("nellmodal").classList.remove('fadeIn');
}


var thornappleBtn = function(){
    document.getElementById('thornapplemodal').classList.add('fadeIn');
    
}
  
var closethornapplemodal = function(){
    document.getElementById("thornapplemodal").classList.remove('fadeIn');
}
  
var hyukohBtn = function(){
    document.getElementById('hyukohmodal').classList.add('fadeIn');
}
  
var closehyukohmodal = function(){
  document.getElementById("hyukohmodal").classList.remove('fadeIn');
}

var motBtn = function(){
  document.getElementById('motmodal').classList.add('fadeIn');
}

var closemotmodal = function(){
  document.getElementById("motmodal").classList.remove('fadeIn');
}


// Youtube Api  


// hyukoh api 

const hyukohyoutubeKey = 'AIzaSyAhle-jPT4WvmycnfKxXO7G_e-bb-7wkMw';
const hyukohyoutubeVideo = 'ECMc1SB60E0';
const hyukohViewCount = document.getElementById('hyukohViewCount');
const hyukohLikeCount = document.getElementById('hyukohlikeCount');
const hyukohCommentCount = document.getElementById('hyukohCommentCount');

let gethyukohViewCount = () => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${hyukohyoutubeVideo}&key=${hyukohyoutubeKey}`)
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        hyukohViewCount.innerHTML = AddComma(data["items"][0].statistics.viewCount);
        hyukohLikeCount.innerHTML = AddComma(data["items"][0].statistics.likeCount);
        hyukohCommentCount.innerHTML = AddComma(data["items"][0].statistics.commentCount);
    })
}

setInterval(gethyukohViewCount(), 1000);


// Nell api

const nellyoutubeKey = 'AIzaSyAhle-jPT4WvmycnfKxXO7G_e-bb-7wkMw';
const nellyoutubeVideo = '83IfZhO4Pd0';
const nellViewCount = document.getElementById('nellViewCount');
const nellLikeCount = document.getElementById('nelllikeCount');
const nellCommentCount = document.getElementById('nellCommentCount');

let getnellViewCount = () => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${nellyoutubeVideo}&key=${nellyoutubeKey}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        nellViewCount.innerHTML = AddComma(data["items"][0].statistics.viewCount);
        nellLikeCount.innerHTML = AddComma(data["items"][0].statistics.likeCount);
        nellCommentCount.innerHTML = AddComma(data["items"][0].statistics.commentCount)
    })
}

setInterval(getnellViewCount(), 1000);

// thornapple api

const thornappleyoutubeKey = 'AIzaSyAhle-jPT4WvmycnfKxXO7G_e-bb-7wkMw';
const thornappleyoutubeVideo = 'mKOOH3_xXj0';
const thornappleViewCount = document.getElementById('thornappleViewCount');
const thornappleLikeCount = document.getElementById('thornapplelikeCount');
const thornappleCommentCount = document.getElementById('thornappleCommentCount');

let getthornappleViewCount = () => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${thornappleyoutubeVideo}&key=${thornappleyoutubeKey}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        thornappleViewCount.innerHTML = AddComma(data["items"][0].statistics.viewCount);
        thornappleLikeCount.innerHTML = AddComma(data["items"][0].statistics.likeCount);
        thornappleCommentCount.innerHTML = AddComma(data["items"][0].statistics.commentCount);
    })
}

setInterval(getthornappleViewCount(), 1000);

// mot api

const motyoutubeKey = 'AIzaSyAhle-jPT4WvmycnfKxXO7G_e-bb-7wkMw';
const motyoutubeVideo = 'Gd1RNbhF6A8';
const motViewCount = document.getElementById('motViewCount');
const motLikeCount = document.getElementById('motlikeCount');
const motCommentCount = document.getElementById('motCommentCount');

let getmotViewCount = () => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${motyoutubeVideo}&key=${motyoutubeKey}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        motViewCount.innerHTML = AddComma(data["items"][0].statistics.viewCount);
        motLikeCount.innerHTML = AddComma(data["items"][0].statistics.likeCount);
        motCommentCount.innerHTML = AddComma(data["items"][0].statistics.commentCount);
    })
}

setInterval(getmotViewCount(), 1000);

function AddComma(potato) {
    return Number(potato).toLocaleString('en');
}



/* counter upper */
$(document).ready(function(){
    $(nellViewCount.innerHTML).counterUp({
        delay : 10,
        time : 1200
    });
});



