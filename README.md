# Javascript-ES6-ECMAScript6-ES2015
本项目对ES6涉及的语法知识给予介绍，并给出大量简洁易懂的示例代码。  本项目为中级难度，适合已经掌握 ES5 的开发人员，用来了解这门语言的新发展；也可当作参考手册，查寻新增的语法点。

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
- 模拟去除json中某个值
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
### 二、模板字符串
```
const name = 'FangFeiyue';
console.log(`My name is ${name}`);//My name is FangFeiyue
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
