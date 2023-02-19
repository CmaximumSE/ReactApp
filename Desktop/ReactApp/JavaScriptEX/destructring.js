// 불변
let name=['alal', 'sksk'];

// person1 = name[0];
// person2 = name[1];

let [person1, person2] = name;

console.log(person1);
console.log(person2); 

let shapes={
    shape: '',
    width: 100,
    height: 200
}

let {shape="circle", width: w, height: h} = shapes

console.log(shape);
console.log(w);
console.log(h);