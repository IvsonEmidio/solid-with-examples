//MOCK
const userDb = {
    isCorrect: (email, password) => true,
    createNewUser: (email, password) => true
};

export function login(email: string, password: string) {
    const isPasswordCorrect = userDb.isCorrect(email, password);

    if(isPasswordCorrect) {
        window.location.replace('/home');
        return;
    }

    throw new Error('Incorrect user or email');
}

export function createUser(email: string, password: string) {
    userDb.createNewUser(email, password);

    return window.location.replace('/home');
}

