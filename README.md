# Javascript-ES6-ECMAScript6-ES2015
前端近些年发展很快，作为前端技术的核心支撑JS也从ES5过渡到了ES6，强有力的推进了前端的发展。作为一名前端从业人员学习掌握ES6是必不可少的一项技能。阮一峰老师写的[《ECMAScript 6 入门》](http://es6.ruanyifeng.com/#README)非常的棒，学习ES6看这本书基本就够了。但是这本书介绍的知识点实在太多了，就像我们中华的文字千千万，常用的也就那么些。我们没有必要把所有的文字都记住，遇到陌生的查一查就行了。

对于初学者刚学习ES6实在没必要把所有的知识点都学一遍，太耗费精力了，不在实际中运用不久也就遗忘了。本项目对自己项目中运用过的ES6语法知识给予介绍，并给出大量简洁易懂的示例代码,对于初学者来说敲过本项目中的代码，基本就入门ES6了，再在实际中运用所学知识、补充不足，相信很快就能掌握ES6的。

## let和const
### 一、块级作用域

ES5 只有全局作用域和函数作用域，没有块级作用域，这样的缺点是：1.用来计数的循环变量泄露为全局变量。2.内层变量可能会覆盖外层变量

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
### 二、let、const声明变量不存在变量提升
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
### 三、不允许重复声明
```
var a = 1;
var a = 2;
console.log(a); //2

let b = 1;
let b = 2; //Uncaught SyntaxError: Identifier 'b' has already been declared
console.log(b);
```
### 四、注意

const在声明对象的时候，const常量指向的是对象存储的指针，此时修改对象内部的属性并不会报错。
```
const k = {
    a:1
};
k.b = 2;
console.log(k); //{a:1, b:@}
```
## 结构赋值

### 一、结构赋值的分类
- 数组结构赋值
```
let a, b, rest;
[a, b] = [1, 2];
console.log(a, b);//1 2
```
- 对象结构赋值
```
let a, b;
({a, b} = {a:1, b:2});
console.log(a, b);//1  2
```
- 字符串结构赋值
- 布尔结构赋值
- 函数参数结构赋值
- 数值结构赋值

### 二、结构赋值的简单应用
- 变量交换
```
let a = 1,
b = 2;
[a, b] = [2, 1];
console.log(a, b); //2, 1
```
- 取出json中某个值
```
let metaData = {
    title: 'abc',
    test: [{
        title: 'test',
        desc: 'description'
    }]
};

let {title: esTitle, test:[{title:cnTitle}]} = metaData;

console.log(esTitle, cnTitle); //abc, test
```
## 字符串的扩展
### 一、常用方法的扩展
- includes(str)字符串中是否包含某个字符
```
let str = 'string';
console.log(str.includes('r')); //true
```
- startsWith(str)字符串是不是以某些字符开始，endsWith(str)字符串是不是以某些字符结束
```
let str = 'string';
console.log(str.startsWith('s'));// true
console.log(str.endsWith('g'));// true
```
- repeat(int)方法返回一个新字符串，表示将原字符串重复n次。
```
let str = 'string';
console.log(str.repeat(3)); //stringstringstring
```
- padStart()，padEnd() ES2017 引入了字符串补全长度的功能,如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全,这两个方法接收两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串
```
let str = '1';
console.log(str.padStart(2, '0')); //01
console.log(str.padEnd(2, '0')); //10
```
- String.raw方法，往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串。
```
console.log(String.raw`h\n23\45`);// h\n23\45
console.log('h\n23\45');
//h 
//23%
```
### 二、模板字符串

模板字符串是增强版的字符串，用反引号（`）标识
```
const name = 'FangFeiyue';
console.log(`My name is ${name}`);//My name is FangFeiyue
```

如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
```
let str = `我是
一个
终生学习者`

console.log(str);
//我是
//一个
//终生学习者
```
## 数值扩展

- 二进制、八进制的表示方法
```
//二进制
console.log(0b11111);
//八进制
console.log(0o011111);
```
- Number.isFinite()用来检查一个数值是否为有限的（finite）
```
console.log(Number.isFinite(12)); // true
console.log(Number.isFinite(NaN)); // false
```
- Number.isNaN()用来检查一个值是否为NaN
```
console.log(Number.isNaN(1)); //false
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN('1')); //false
```
- Number.isInteger()用来判断一个值是否为整数。需要注意的是，在 JavaScript 内部，整数和浮点数是同样的储存方法，所以 3 和 3.0 被视为同一个值
```
console.log(Number.isInteger(1)); //true
console.log(Number.isInteger(1.0)); //true
console.log(Number.isInteger('1')); //false
console.log(Number.isInteger(1.2)); //false
```
- Number.isSafeInteger判断一个数字是否在有效范围内
```
console.log(Number.MAX_SAFE_INTEGER);//最大数
console.log(Number.MIN_SAFE_INTEGER);//最小数
console.log(Number.isSafeInteger(10));
```
- Math.trunc方法用于去除一个数的小数部分，返回整数部分。
```
console.log(Math.trunc(4.5)); // 4
```
- Math.sign()用来判断一个值的正负，但是如果参数是-0，它会返回-0。
```
console.log(Math.sign(-5)); // -1
console.log(Math.sign(5));  // 1
console.log(Math.sign(0));  // 0
console.log(Math.sign(-0));  // -0
console.log(Math.sign("40"));  // 1
console.log(Math.sign("hello")); //NaN 
```
- Math.cbrt方法用于计算一个数的立方根,对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值。x³=a，那么x叫做a的立方根
```
console.log(Math.cbrt(8)); //2
```
## 数组对象的扩展
- Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map
```
let pArr = Array.from(document.getElementsByTagName('p'));
pArr.forEach(item => {
    console.log(item.textContent);
});
```
- Array.of方法用于将一组值，转换为数组
```
console.log(Array.of(1, 2, 3, 'sdf', [1, 2,3]));// [1, 2, 3, 'sdf', [1, 2, 3]]
console.log(Array.of()); //[]
```
- fill方法使用给定值，填充一个数组,方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
```
console.log([1, 23, NaN].fill(8));  // [8, 8, 8]
console.log([1, 3, 23, 're', undefined, NaN].fill(7, 1, 3));//[1, 7, 7, "re", undefined, NaN]
```
- keys()和values()——用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
```
for(let index of [1, 2, 3, 4, 5].keys()){
    console.log(index);// 0, 1, 2, 3, 4
}

for (let [index, value] of [1, 23, 234, 4, 5, 34].entries()){
    console.log(index, value);
    // 0 1
    // 1 23
    // 2 234
    // 3 4
    // 4 5
    // 5 34
}
```
- copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
它接受三个参数。target（必需）：从该位置开始替换数据。start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
```
console.log([17,26,53,44,25,6, 23, 84, 92].copyWithin(2, 3, 5)); //[17, 26, 44, 25, 25, 6, 23, 84, 92]
```
- find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
```
console.log([1, 23, 45, 3, 5, 56, 23].find(item => item > 20));// 23
```
- findIndex方法返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
```
console.log([1, 23, 45, 3, 5, 56, 23].findIndex(item => item > 20));// 1
```
- includes方法返回一个布尔值，表示某个数组是否包含给定的值
```
console.log([1, 2, ,3, NaN].includes(NaN)); //true
console.log([1, 2, 34].includes(2)); //true
```
## 函数扩展
### 参数默认值
```
function test(x = 'Fang'){
    console.log(x);
}
test('Feiyue');

function test2 (x = 'Fang', y){//默认值后面不能在跟没有默认值的变量,参数默认值要放在函数参数最后面
    console.log(x, y);//feiyue, undefined
}

test2('feiyue');

//作用域
let  x = 'test';

function test2(x, y=x){
    console.log(x, y);
}

test2('love'); //love, love
test2(); // undefined, undefined

let y = 'test2';
function test3(c, x = y){
    console.log(c, y);
}

test3('love'); //love, test2
test3(); //undefined, "test2"
```
### rest参数,ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中

注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
```

```
### 扩展运算符
### 箭头函数
### this绑定
### 尾调用
## 传说中的彩蛋
- 
## 说明
如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

或者您可以 "follow" 一下，我会不断开源更多的有趣的项目
## 个人简介
作者：房飞跃

博客地址：[前端网](http://www.qdfuns.com/house/31986/note)  [博客园](https://www.cnblogs.com/fangfeiyue)  [GitHub](https://github.com/fangfeiyue)

职业：web前端开发工程师

爱好：探索新事物，学习新知识

座右铭：一个终身学习者

## 联系方式
坐标：北京

QQ：294925572

微信：

![XinShiJieDeHuHuan](http://note.youdao.com/yws/public/resource/c2361265179a03449f6d52397fd50033/xmlnote/100D55934BB446839482D3EA0CDC3E8D/17820)

## 赞赏
觉得有帮助可以微信扫码支持下哦，赞赏金额不限，一分也是您对作者的鼎力支持

![微信打赏](http://note.youdao.com/yws/public/resource/c2361265179a03449f6d52397fd50033/xmlnote/D77744C8EC944CF6AA232272CBC5CF6D/17828)
