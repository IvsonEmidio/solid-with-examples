interface IAnimal {
    walk(): string
    eat(): string
}

interface IFlyableAnimal extends IAnimal{
    fly(): string
}

// Gato não voa, logo não precisa implementar o metodo fly
class Cat implements IAnimal {
    public walk(): string {
        return 'Walks 20 steps';
    }

    public eat(): string {
        return 'Eats a fish';
    }
}

// Passaro voa, logo realiza a implementação do metodo fly
class Bird implements IFlyableAnimal {
    public walk(): string {
        return 'Walks 30 steps';
    }

    public eat(): string {
        return 'Eats a feed';
    }

    public fly(): string {
        return 'Flew 30 meters';
    }
}