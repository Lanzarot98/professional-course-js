import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
    new AutoPlay(), new AutoPause(),
    ],
});

const playButton: HTMLElement = document.querySelector('#playButton') as HTMLElement;
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton') as HTMLElement;
muteButton.onclick = () => {
    if(player.media.muted) {
        player.mute();
    } else {
        player.unmute();
    }
};


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('/sw.js', import.meta.url)).catch(error => {
      console.log(error.message);
    });
}

// if ('serviceWorker' in navigator) {
//     // Register a service worker hosted at the root of the
//     // site using the default scope.
//     navigator.serviceWorker.register(
//       new URL('/sw.js', import.meta.url),{type: 'module'})
//         .then(function(registration) {
//             console.log('Service worker registration succeeded:', registration);
//         }).catch(function(error) {
//           console.log('Service worker registration failed:', error);
//         });
//   } else {
//     console.log('Service workers are not supported.');
//   }