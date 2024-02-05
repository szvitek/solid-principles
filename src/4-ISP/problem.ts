interface Animal {
  walk(): void;
  fly(): void;
}

class Cat implements Animal {
  walk() {
    console.log('Walking');
  }

  fly() {
    throw new Error('Cats cannot fly');
  }
}

class Goose implements Animal {
  walk() {
    console.log('Walking');
  }

  fly() {
    console.log('Flying');
  }
}
