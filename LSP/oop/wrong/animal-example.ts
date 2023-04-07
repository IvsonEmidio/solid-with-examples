class Animal {
    public getName(): string {
        return 'My name is Animal'
    }
}

// Retornando tipos incompativeis
class Cat extends Animal {
    public getName() {
        return {
            name: 'Cat'
        }
    }
}

// Lançando exceções não esperadas
class Dog extends Animal {
    public getName() {
        throw new Error("Can't see a name");
    }
}

function determineName(object: Animal): string {
    return object.getName();
}

// Utilizando a classe generica (pai)
const name = determineName(new Animal()); // My name is Animal

// Utilizando uma sub-classe com tipos incompativeis
const otherName = determineName(new Cat()); // { name: 'Cat }

// Utilizando uma sub-classe com exceção não esperada
const lastName = determineName(new Dog()); // Catchable throw