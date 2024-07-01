document.addEventListener('DOMContentLoaded', function() {
    const videoPreviews = document.querySelectorAll('.video-preview');
    const videoFullscreen = document.getElementById('video-fullscreen');
    const fullscreenVideo = videoFullscreen.querySelector('video');

    // Masquer la vidéo initialement
    fullscreenVideo.classList.add('hidden-video');
    videoFullscreen.classList.remove('active');

    videoPreviews.forEach(preview => {
        preview.addEventListener('click', function(e) {
            e.preventDefault();
            const videoSrc = this.getAttribute('data-video-src');
            if (videoSrc) { // Vérifier si videoSrc n'est pas vide
                fullscreenVideo.querySelector('source').src = videoSrc;
                fullscreenVideo.load(); // Charger la nouvelle source vidéo
                fullscreenVideo.classList.remove('hidden-video'); // Afficher la vidéo
                videoFullscreen.classList.add('active');
                fullscreenVideo.play();
            }
        });
    });

    // Ajouter un écouteur d'événement pour fermer le lecteur avec la touche 'Escape'
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoFullscreen.classList.contains('active')) {
            closeFullscreenVideo();
        }
    });

    // Ajouter un écouteur d'événement pour fermer le lecteur lorsque l'on clique en dehors de la vidéo
    videoFullscreen.addEventListener('click', function(e) {
        if (e.target === videoFullscreen) {
            closeFullscreenVideo();
        }
    });

    function closeFullscreenVideo() {
        videoFullscreen.classList.remove('active');
        fullscreenVideo.pause();
        fullscreenVideo.currentTime = 0;
        fullscreenVideo.classList.add('hidden-video'); // Cacher la vidéo à nouveau
    }
});
