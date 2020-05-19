### 方法

#### Object构造函数的方法

1. Object.assign() 通过复制一个或多个对象来创建一个新的对象
```javascript
const target = { a: 1, b: 2 };
const source = { c: 3, d: 4 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// { a:1, b:2, c:3, d:4 }

console.log(returnedTarget);
// { a:1, b:2, c:3, d:4 }
```

2. Object.create() 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
```javascript
const person = {
    inHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}, Am I humen?${this.isHumen}`);
    }
};
const me = Object.create(person);

me.name = "lzt";
me.isHumen = true;

me.printIntroduction();
// My name is lzt, Am I humen? true
```

3. Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
```javascript
const obj = {};

Object.definProperty(obj, 'val', {
    value: '42',
    writable: false
})

obj.val = '77';

console.log(obj.val); // '42'
```

4. Object.defineProperties() 给对象添加多个属性并分别指定它们的配置
```javascript
const obj = {};

Object.defineProperties(obj, {
    'property1': {
        value: true,
        writable: true
    },
    'property2': {
        value: 'hello',
        writable: true
    }
    // ...
})
```

5. Object.entries() 返回对象自身可枚举属性[key, value]数组,其排列与使用for...in循环遍历该对象时返回对象一致(区别在于for...in还会枚举原型链中的属性)
```javascript
const obj = {
    a: 'something',
    b: 32
}

for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}:${value}`);
}
// "a: somethig"
// "b: 32"

const obj1 = {
    foo: 'bar',
    baz: 42
};
console.log(Object.entries(obj));
// [['foo', 'bar'], ['baz', 42]]
```

6. Object.freeze() 冻结对象：其他代码不能删除或更改任何属性
```javascript
const obj = {
    prop: 42
};

Object.freeze(obj);

obj.prop = 77;
// error

console.log(obj.prop);
// 42
```

7. Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符(自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性)
```javascript
const o,d;

o = {
    get foo() {
        return 17;
    }
}
d = Object.getOwnPropertyDescriptor(o, 'foo');
// d {
//     configurable: true,
//     enumerable: true,
//     get: /*the getter function*/,
//     set: undefined
// }
```

8. Object.getOwnPropertyNames() 返回一个数组，包含了指定对象所有可枚举或不可枚举的属性
```javascript
const arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"]

// 类数组对象
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"]

// 使用Array.forEach输出属性名和属性值
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
    console.log(val + " -> " + obj[val]);
});
// 0 -> a
// 1 -> b
// 2 -> c

// 不可枚举属性
const my_obj = Object.create({}, {
    getFoo: {
        value: function() {
            return this.foo;
        },
        enumerable: false
    }
});
my_obj.foo = 1;
console.log(Object.getOwnPropertyNames(my_obj).sort());
// ["foo", "getFoo"]
```
如果你只要获取到可枚举属性，查看Object.keys或用for...in循环（还会获取到原型上的可枚举属性，不过可以使用hasOwnProperty()方法过滤掉）

只获取不可枚举的属性
```javascript
let target = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
target.foo = 1;
let enum_add_nonenum = Object.getOwnPropertyNames(target);
const enum_only = Object.keys(target);
let nonenum_only = enum_add_nonenum.filter(function(key) {
    const indexInEnum = enum_only.indexOf(key);
    return indexInEnum == -1 ? true : false;
});

console.log(nonenum_only);
// ["getFoo"]
```

9. Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有Symbol属性的数组

10. Object.getPrototypeOf(object) 返回指定对象的原型，没有则返回null
```javascript
cosnt prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// true
```

11. Object.is() 判断两个值是否是相同的值

12. Object.keys() 返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
```javascript
const arr = ["a", "b", "c"];
console.log(Object.keys(arr));
// ["0", "1", "2"]

```
```javascript
// 源码
if (!Object.keys) Object.keys = (function() {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        dontEnumsLength = dontEnums.length;

        return function(obj) {
            if (typeo obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

            let result = [];

            for (let prop in obj) {
                if (hasOwnProperty.call(obj, prop)) result.push(prop);
            }

            if (hasDontEnumBug) {
                for (let i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnum[i])) result.push(dontEnums[i]);
                }
            }
            return result;
        }
})()
```
13. Object.values() 返回一个给定对象自身的所有可枚举属性值的数组
```javascript
const obj = { foo: 'var', baz: 42 };
console.log(Object.values(obj));
// ['var', 42]
```
```javascript
// 源码
if (!Object.values) Object.values = function(obj) {
    if (obj !== Object(obj)) {
        throw new TypeError('Object.values called on a non-object;')
    }
    let val = [], key;
    for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            val.push(obj[key]);
        }
    }
    return val;
}
```