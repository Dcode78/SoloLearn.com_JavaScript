// var person = {
//     name: "John", 
//     age: 31, 
//     favColor: "green", 
//     height: 183
//    };

function person(name, age, favColor, height){
    this.name = name;
    this.age = age;
    this.favColor = favColor;
    this.height = height;
}

var p1 = new person("John", 31, "green", 183);

//    console.log(person.name);
//    console.log(person['age']);
//    console.log(person['favColor'].length);

console.log(p1.name);
console.log(p1['age']);
console.log(p1['favColor']);
console.log(p1.height);
   
  