import EventEmitter from "./EventEmitter";

export default class Timer {
    constructor(seconds) {
        this.timeout = seconds;
        this.currentTime = 0;
        this.intervalRequest = null;
        this._event = new EventEmitter;
    }

    on(eventName, listener) {
        this._event.on(eventName, listener);
    }

    update() {
        this.currentTime++;
        this._event.emit("update", this.currentTime);

        if (this.currentTime >= this.timeout) {
            this._event.emit("over");
            this.stop();
        }
    }

    stop() {
        window.clearInterval(this.intervalRequest);
    }

    start() {
        this._event.emit("update", this.currentTime);
        this.intervalRequest = window.setInterval(this.update.bind(this), 1000);
    }
}