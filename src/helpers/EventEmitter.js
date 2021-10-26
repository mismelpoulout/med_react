export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    existEvent(eventName) {
        return typeof this.events[eventName] === 'object';
    }

    on(eventName, listener) {
        if (!this.existEvent(eventName)) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
        return () => this.removeListener(eventName, listener);
    }

    removeListener(eventName, listener) {
        if (!this.existEvent(eventName)) return;

        const idx = this.events[eventName].indexOf(listener);
        if (idx > -1) {
            this.events[eventName].splice(idx, 1);
        }
    }

    emit(eventName, ...args) {
        if (!this.existEvent(eventName)) return;
        this.events[eventName].forEach(listener => listener(...args));
    }
}