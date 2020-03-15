const promise = new Promise(function(resolve, reject) {
  if (true) {
    resolve(value);
  } else {
    reject(error);
  }
});
// resolve函数的作用是，将Promise对象的状态从未完成变为成功 pending => resolver
// 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
// reject函数的作用时， pendig => rejected, 失败时调用

promise.then(function(value) {
  // success
}, function(error) {
  // failure
})

// then 方法可以接受两个回调函数作为参数。第一个回调函数时 Promise 对象
// 的状态变为 resolved 时调用，第二个回调函数是 Promise 对象的状态变为 
// rejected 时调用。

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
})

// Promise 新建后就会立即执行
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved');
});

console.log('Hi!');

// Promise
// Hi!
// resolved

// 下面是异步加载图片的例子
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Counld not load image at ' + url));
    };

    image.src = url;
  });
}

// 实现Ajax操作
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject) {
    const handler = function() {
      if (this.readyState !== 4) {
        returnl
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.loge('出错了', error);
})


const p1 = new Promise(function(resolve, reject) {
  // ...
});

const p2 = new Promise(function(resolve, reject) {
  // ...
  resolve(p1);
})


const p1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.los(result))
  .catch(error => console.log(error))
// Error: fail

new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1  

// 首先打印2，因为立即 resolved 的Promise 是在本轮事件循环的末尾执行，
// 总是晚于本轮循环的同步任务

new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.loe(2);
})