class Animal {
    public getName(): string {
        return 'My name is Animal'
    }
}

class Cat extends Animal {
    public getName(): string {
        return 'My name is Cat'
    }
}


function determineName(object: Animal): string {
    return object.getName();
}

// Utilizando a classe generica (pai)
const name = determineName(new Animal()); // My name is Animal

// Utilizando a classe especializada (filho)
const otherName = determineName(new Cat()); // My name is Cat