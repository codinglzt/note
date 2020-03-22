// instanceof 的原理是基于原型链的查询，只要处于原型链中，判断永远为true
// const Person = function() {}
// const p1 = new Person();
// p1 instanceof Person // true

// 核心：原型链的向上查找
function myInstanceof(left, right) {
  // 基本数据类型直接返回false
  if (typeof left !== 'object' || left === null) return false;
  // getPrototypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left);
  while (true) {
    // 查找到尽头，还没找到
    if (proto == null) return false;
    // 找到相同的原型对象
    if (proto == right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

myInstanceof('111', String);  // false
myInstanceof(new String('111'), String); // true
// proto = Object.getPrototypeOf(new String('111')) // String
// proto = Object.getPrototypeOf(proto);  // Object