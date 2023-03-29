//MOCK
const userDb = {
    isCorrect: (email, password) => true,
    createNewUser: (email, password) => true
};

export function loginOrCreate(email: string, password: string) {
    const isPasswordCorrect = userDb.isCorrect(email, password);

    if(isPasswordCorrect) {
        // Se o usuario existe, leva ele para tela principal
        window.location.replace('/home');
        return;
    }

    // Se o usuario não existe, cria um usuario e leva ele pra tela principal
    userDb.createNewUser(email, password);
    window.location.replace('/home');
    return;
}

