import questions from "./questions.json";

export default class QuestionRepository {
    static getQuestions(amount) {
        const q = [];
        while (amount--) {
            q.push(questions[randomInt(0, questions.length - 1)]);
        }

        return q;
    }
}

function randomInt(min, max) {
    return (Math.random() * (++max - min) + min) | 0;
}