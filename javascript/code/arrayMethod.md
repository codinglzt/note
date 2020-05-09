### 方法

#### 修改器方法
这些方法会改变调用它们的对象自身的值

1. Array.pop() 删除数组的最后一个元素，并返回这个元素
```javascript
const popArray = ['hello', 'word', 'test', 'array'];
console.log(popArray.pop());
// 'array'
console.log(popArray);
// ['hello', 'word', 'test']
popArray.pop();
console.log(popArray);
// ['hello', 'word']
```

2.Array.shift() 删除数组的第一个元素，并返回这个元素
```javascript
const shiftArray = ['hello', 'word', 'test', 'array'];
console.log(shiftArray.shift());
// 'hello'
console.log(shiftArray);
// ['word', 'test', 'array']
```

3.Array.push() 在数组的末尾增加一个或多个元素，并返回数组的新长度
```javascript
const pushArray = [];

const count = pushArray.push('hi');
console.log(count);
// 1
console.log(pushArray);
// ['hi']
pushArray.push('hello', 'js', 'css');
console.log(pushArray);
// ['hi', 'hello', 'js', 'css']
```

4.Array.unshift() 在数组的开头增加一个或多个元素，并返回数组的新长度
```javascript
const unshiftArray = [1, 2, 3];
console.log(unshiftArray.unshift(4, 5));
// 5
console.log(unshiftArray);
// [4, 5, 1, 2, 3]
```

5.Array.reverse() 颠倒数组中元素的排列顺序即原先的第一个变为最后一个，原先的最后一个变为第一个
```javascript
const reverseArray = [1, 2, 3];
console.log(reverseArray.reverse());
// [3, 2, 1]
console.log(reverseArray);
// [3, 2, 1]
```

6.Array.sort() 对数组元素进行排序，并返回当前数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// ['Dec', 'Feb', 'Jan', 'March']

const array1 = [1, 30, 4, 21, 1000000000];
array1.sort();
console.log(array1);
// [1, 1000000000, 21, 30, 4]
```
如果指明了 compareFunction , 那么数组会按照调用该函数的返回值排序。
```javascript
const numbers = [4, 2, 5, 1, 3];

numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 2, 3, 4, 5]
```

7.Array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) 在任意的位置给数组添加或删除任意个元素。start 指定修改的开始位置。deleteCount(可选)表示要移除的数组元素的个数。item1, item2, ...(可选)，要添加进数组的元素，从start位置开始。如果不指定，则splice()将只删除数组元素。
```javascript
// 从第2位开始删除0个元素，插入"drum"
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");
// myFish: ["angel", "clown", "drum", "mandarin", "sturgeon"]

// 从第二位开始删除所有元素
const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
const removed1 = myFish1.splice(2);
// myFish1: ["angel", "clown"]
// removed1: ["mandarin", "sturgeon"]
```

#### 访问方法
这些方法不会改变调用它们的对象的值，只返回一个新的数组或者返回一个其它的期望值

1.Array.slice() 抽取当前数组中的一段元素组合成一个新数组
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// ['camel', 'duck', 'elephant']

console.log(animals.slice(2, 4));
// ['camel', 'duck']

console.log(animals.slice(1, 5));
// ['bison', 'camel', 'duck', 'elephant']
```

2.Array.concat() 返回一个由当前数组和其它若干数组或者若干个非数组值组合而成的新数组
```javascript
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);

console.log(arr3);
// ['a', 'b', 'c', 'd', 'e', 'f']
```

3.Array.includes() 判断当前数组是否包含某指定的值，如果是返回 true, 否则返回 false
```javascript
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// true
```

4.Array.join() 连接所有数组元素组成一个字符串
```javascript
const elements = ['fire', 'air', 'water'];
console.log(elements.join());
// "fire,air,water"
console.log(elements.join(''));
// "fireairwater"
```

5.Array.toString() 返回一个由所有数组元素组合而成的字符串
```javascript
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// "1,2,a,1a"
```

6.Array.indexOf() 返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1
```javascript
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// 1
// 从索引2开始
console.log(beasts.indexOf('bison', 2));
// 4
```

7.Array.lastIndexOf() 返回数组中最后一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1
```javascript
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// 3

console.log(animals.lastIndexOf('Tiger));
// 1
```

#### 迭代方法

1.Array.forEach() 为数组中的每个元素执行一次回调函数
```javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
// 'a'
// 'b'
// 'c'
```

2.Array.entries() 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对
```javascript
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Array [0, 'a']
console.log(iterator1.next().value);
// Array [1, 'b']
```

3.Array.every() 如果数组中的每个元素都满足测试函数，则返回 true, 否则返回 false
```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// true
```

4.Array.some() 如果数组中至少有一个元素满足测试函数，则返回 true, 否则返回 false
```javascript
const array1 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 == 0;

console.log(array1.some(even));
// true
```

5.Array.filter() 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
```javascript
const words = ['spray', 'limit', 'elite', 'exfdsffdsf', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// ['exfdsffdsf', 'present']
```

6.Array.find() 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
```javascript
const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);

console.log(found);
// 12
```

7.Array.findIndex() 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
```javascript
const array = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));
// 3
```

8.Array.keys() 返回数组迭代器对象，该迭代器会包含所有数组元素的键
```javascript
const array = ['a', 'b', 'c'];
const iterator = array.keys();

for (const key of iterator) {
    console.log(key);
}

// 0
// 1
// 2
```

9.Array.map() 返回一个由回调函数的返回值组成的新数组
```javascript
const array = [1, 4, 9, 16];
const map = array.map(x => x * 2);
console.log(map);
// [2, 8 18, 32]
```

10.Array.reduce() 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
```javascript
const array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array.reduce(reducer));
// 10

// 5 + 1 + 2 + 3 + 4
console.log(array.reduce(reducer, 5));
// 15
```

11.Array.values() 返回一个新的 Array Iterator对象，该对象包含数组每个索引的值
```javascript
const array = ['a', 'b', 'c'];
const iterator = array.values();

for (const value of iterator) {
    console.log(value);
}
// 'a'
// 'b'
// 'c'
```