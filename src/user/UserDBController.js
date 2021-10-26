export default class UserDBProvider {
    firebaseConfig = {
        apiKey: "AIzaSyA_tkdZnjSO8tV1_o_LtwQUR_26i2vKXG4",
        authDomain: "eunacom-chile.firebaseapp.com",
        projectId: "eunacom-chile",
        storageBucket: "eunacom-chile.appspot.com",
        messagingSenderId: "109229401681",
        appId: "1:109229401681:web:907628d4a3ed67eda4fa70",
        measurementId: "G-G4ZW1JC0Q0"
    };

    db = null;
    auth = null;
    userCredential = null;

    static connect() {
        firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
    }

    static async loginWithEmailAndPassword(email, password) {
        if (auth) return;

        try {
            userCredentials = await auth.signInWithEmailAndPassword(email, password);
        } catch ({ code, message }) {
            throw new Error(`${code}: ${message}`);
        }
    }

    static async signInWithEmailAndPassword(email, password) {
        try {
            userCredential = await auth.createUserWithEmailAndPassword(email, password);
        } catch ({ code, message }) {
            throw new Error(`${code}: ${message}`);
        }
    }

    static async sendEmailVerification() {
        try {
            await userCredential.sendEmailVerification();
            //do something
        } catch ({ code, message }) {
            throw new Error(`${code}: ${message}`);
        }
    }

    static async signout() {
        //todo
    }

    static getUserData() {
        return userCredential;
    }
}