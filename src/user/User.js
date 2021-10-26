import { UserDBController as db } from "./UserDBController";

export default class User {
    #data = null;

    constructor() {
        db.connect();
    }

    logout() {
        db.logout();
        this.data = null;
    }

    async login(email, password) {
        await db.loginWithEmailAndPassword(email, password);
        this.#data = db.getUserData();
    }

    signin(email, password) {
        await db.signInWithEmailAndPassword(email, password);
        this.#data = db.getUserData();
    }

    isAuthenticated() {
        return !!this.#data;
    }

    getData() {
        return this.#data;
    }
}