function Persion(name, age){
    this.name = name,
    this.age = age
}

const persion1 = new Persion('alal', 20);
const persion2 = new Persion('skks', 25);

console.log(persion1.introduce());
console.log(persion2.name);