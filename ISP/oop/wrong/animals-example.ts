interface IAnimal {
    walk(): string

    eat(): string

    fly(): string
}

// Gato não voa, mesmo assim implementa o metodo fly
class Cat implements IAnimal {
    public walk(): string {
        return 'Walks 20 steps';
    }

    public eat(): string {
        return 'Eats a fish';
    }

    public fly(): string {
        return '';
    }
}

// Passaro voa, logo realiza todas as implementações e adiciona um comportamento especifico
class Bird implements IAnimal {
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