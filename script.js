
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

function stopPlayingMedia() {
    // Detiene todos los audios
    Array.from(document.querySelectorAll('audio')).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    // Detiene todos los videos excepto el que tiene sonido
    Array.from(document.querySelectorAll('video')).forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

function playAudio(item) {
    const audio = item.querySelector('audio');
    if (audio) {
        audio.play();
    }
}

function playVideo(item) {
    const video = item.querySelector('video');
    if (video && video.querySelector('source').src === 'assets/Video2.mp4') {
        video.muted = false;
        video.play();
    } else if (video) {
        video.play();
    }
}

function playMedia(item) {
    stopPlayingMedia(); // Detiene cualquier audio o video que esté reproduciéndose
    playAudio(item); // Reproduce el audio del item
    playVideo(item); // Reproduce el video del item
}

window.addEventListener('load', function() {
    let items = document.querySelectorAll('.item');
    let currentSlide = document.querySelector('.slide');
    currentSlide.insertBefore(items[items.length - 1], items[0]);
    playMedia(currentSlide.querySelector('.item'));
});

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
    playMedia(items[1]); // Reproduce el nuevo audio o video
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
    playMedia(items[0]); // Reproduce el nuevo audio o video
});

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseover', () => {
        playMedia(item); // Reproduce el nuevo audio o video
    });
});