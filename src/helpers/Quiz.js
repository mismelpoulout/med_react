import QuestionRepository from "./QuizDB";
import Timer from "./Timer";
import EventEmitter from "./EventEmitter"

export default class Quiz {
    constructor(questionsAmount, seconds) {
        this.seconds = seconds;
        this.index = 0;
        this.questionsAmount = questionsAmount;
        this.timer = new Timer(seconds);
        this._event = new EventEmitter;

        this.timer.on("over", () => {
            this._event.emit("over")
        });

        this.current = null;
    }

    on(eventName, listener) {
        this._event.on(eventName, listener);
    }

    start() {
        this.timer.start();
    }

    stop() {
        this.timer.stop();
    }

    isCorrectCurrent(answer) {
        console.log(this.current.answer.toLocaleLowerCase(), "->", answer.toLocaleLowerCase())
        return this.current.answer.toLocaleLowerCase() === answer.toLocaleLowerCase();
    }

    next() {
        if (this.index >= this.questionsAmount) {
            this._event.emit("over");
            this.current = null;
            return null;
        };
        const q = QuestionRepository.getQuestions(1);
        this.index++;
        this.current = q[0];
        return q[0];
    }
}