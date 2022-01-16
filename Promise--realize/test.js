const MyPromise = require("./MyPromise");

// const promise = new MyPromise((resolve, reject) => {
// resolve("sucess");
// reject("error");

// setTimeout(() => {
//   resolve("sucess");
// }, 2000);
// });

// promise.then(
//   result => {
//     console.log("resolve", result);
//   },
//   error => {
//     console.log("reject", error);
//   }
// );

// promise.then(result => {
//   console.log("1");
//   console.log("resolve", result);
// });

// promise.then(result => {
//   console.log("2");
//   console.log("resolve", result);
// });

// promise.then(result => {
//   console.log("3");
//   console.log("resolve", result);
// });
// function other() {
//   return new MyPromise((resolve, reject) => {
//     resolve("other");
//   });
// }

// promise
//   .then(result => {
//     console.log(1);
//     console.log("resolve", result);
//     return other();
//   })
//   .then(result => {
//     console.log(2);
//     console.log("resolve", result);
//   });

// const p1 = promise.then(result => {
//   console.log(1);
//   console.log("resolve", result);

//   return p1;
// });

// 运行的时候会走reject
// p1.then(
//   value => {
//     console.log(2);
//     console.log("resolve", value);
//   },
//   error => {
//     console.log(3);
//     console.log(error.message);
//   }
// );
// const promise = new MyPromise((resolve, reject) => {
//   resolve("success");
//   // throw new Error("执行器错误");
// });

// promise
//   .then(
//     value => {
//       console.log(1);
//       console.log("resolve", value);
//       throw new Error("then error");
//     },
//     reason => {
//       console.log(2);
//       console.log(reason.message);
//     }
//   )
//   .then(
//     value => {
//       console.log(3);
//       console.log(value);
//     },
//     reason => {
//       console.log(4);
//       console.log(reason.message);
//     }
//   );

// const promise = new MyPromise((resolve, reject) => {
//   resolve("succ");
// });

// promise
//   .then()
//   .then()
//   .then(value => console.log(value));

// const promise = new MyPromise((resolve, reject) => {
//   reject("err");
// });

// promise
//   .then()
//   .then()
//   .then(
//     value => console.log(value),
//     reason => console.log(reason)
//   );

MyPromise.resolve()
  .then(() => {
    console.log(0);
    return MyPromise.resolve(4);
  })
  .then(res => {
    console.log(res);
  });
