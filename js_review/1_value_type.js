
// js 支持数据类型
// console.log(typeof 123);
// console.log(typeof '123');
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function () {});

// console.log(null == undefined);
// console.log(null + 5);
// console.log(undefined + 5);
// console.log(typeof NaN);
// console.log(1/0);

// var obj = {
//     foo: 'Hello',
//     bar: 'World',
//     p: function () {
//         console.log('current is p function');
//     }
// };
// var obj = {
//     'foo': 'Hello',
//     'bar': 'World'
// };
// console.log(obj.foo);
// console.log(obj['foo']);
// console.log(obj.p);
// obj.p();
// obj['p']();

// var obj = {a:1, b:2, c:3};
// // for (k in obj){
// //     console.log(k);
// //     console.log(obj[k]);
// // }
// console.log(Object.keys(obj));
// console.log(obj.hasOwnProperty('a'));
//
// console.log(1/3);

// function f_obj() {
//     // console.log(this); // global or f_obj 数据类型
//     // console.log(typeof this);
//     // console.log(this instanceof f_obj);
//     console.log(new.target);
// }
//
// f_obj();
// new f_obj();

// function Cat (name, color) {
//     this.name = name;
//     this.color = color;
// }
//
// console.log(Cat.prototype);
// console.log(Cat.prototype.prototype);

function Animal(name) {
    this.name = name;
}
Animal.prototype.color = 'white';

var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');

// console.log(cat1);
// console.log(cat1.color);
// console.log(cat2);
// console.log(cat2.color);
console.log(Animal.prototype);
console.log(Animal.prototype.prototype);
console.log(typeof Animal.prototype);
console.log(Animal.prototype instanceof Object);  //
// console.log(Object.getPrototypeOf(cat1));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(cat1)));























