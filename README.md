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
### 数值扩展

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

```
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
