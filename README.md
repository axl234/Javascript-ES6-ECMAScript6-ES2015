# Javascript-ES6-ECMAScript6-ES2015
本项目对ES6涉及的语法知识给予介绍，并给出大量简洁易懂的示例代码。  本项目为中级难度，适合已经掌握 ES5 的开发人员，用来了解这门语言的新发展；也可当作参考手册，查寻新增的语法点。

# let和const
### 块级作用域，ES5 只有全局作用域和函数作用域，没有块级作用域，这样的缺点是：1.用来计数的循环变量泄露为全局变量。2.内层变量可能会覆盖外层变量

```
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```
输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量

var声明的变量,出了{}依然可以正确输出
```
{
    for (var i = 0; i < 1; i++){}
    console.log(i); //1
}
```
let声明的变量和const声明的常量只能在{}内有效,const声明的常量不能进行修改
```
for (let i = 0; i < 1; i++){
    const a = 123;
    a = 12; //Uncaught TypeError: Assignment to constant variable.
}
console.log(i); //01let和const.html:17 Uncaught ReferenceError: i is not defined
console.log(a); //01let和const.html:17 Uncaught ReferenceError: a is not defined
```
const声明变量不能在声明之后再赋值,只能声明的时候进行赋值
```
const p; //Uncaught SyntaxError: Missing initializer in const declaration
p = 2;
```
### let、const声明变量不存在变量提升
```
a = 1;
var a;
console.log(a); //1

b = 2; //Uncaught ReferenceError: b is not defined
let b;
console.log(b);
c = 3;
const c; //Uncaught SyntaxError: Missing initializer in const declaration
console.log(c);
```
### 不允许重复声明
```
var a = 1;
var a = 2;
console.log(a); //2

let b = 1;
let b = 2; //Uncaught SyntaxError: Identifier 'b' has already been declared
console.log(b);
```
