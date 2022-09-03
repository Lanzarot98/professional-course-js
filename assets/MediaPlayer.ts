
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this._initPlugins();
    }
    initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative';
        this.media.parentNode?.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }
   private  _initPlugins() {
        this.plugins.forEach((plugin) => {
            plugin.run(this);
        });
    }
    play() {
        // video.play();
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = false;
    }
    unmute() {
        this.media.muted = true;
    }
}







export default MediaPlayer;
