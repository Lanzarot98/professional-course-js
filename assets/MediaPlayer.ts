
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this._initPlugins();
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
