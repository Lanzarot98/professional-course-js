class AutoPause {
    constructor() {
        this.threshold = 0.25;
        // hacer permanente this a la instancia del objeto
        this.handleIntersection = this.handleIntersection.bind(this); 
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this); 
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });
        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    // siempre que se llame esta función this se va a referir a la instancia del plugin
    handleIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible) {
            this.player.play();
        } else {
            // quien llama la función es el IntersectionObserver y el this se define a base del objeto que esta llamando la función
            this.player.pause();
        }
    }
    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;