// let ans = new Promise((res, rej)=>{
//     if(true){
//         return res();
//     }else{
//         return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("resolved");
// })
// .catch(function(){
//     console.log("rejected");
// })

// let ans = new Promise((res, rej)=>{
//     let n = Math.floor(Math.random()*10);

//     if(n<5){
//         return res();
//     }else{
//         return rej();
//     }
// })
// ans
// .then(function(){
//     console.log("above 5");
// })
// .catch(function(){
//     console.log("below 5");
// })

// let p1 = new Promise(function(res, rej){
//     return res("first async task is completed");
// })

// let p2 = p1.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("second async task is completed");
//     })
// })
// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("third asyn task is completed");
//     })
// })
// p3.then(function(data){
//     console.log(data);
// })



// Write a function that performs two asynchronous operations concurrently,
// and the function should return the result of the operation that finishes first.


// async function whoFinishesFirst() {
//     const p1 = new Promise((res, rej) => {
//         setTimeout(() => res('p1 finishes first'), 2000);
//     });

//     const p2 = new Promise((res, rej) => {
//         setTimeout(() => res('p2 finishes first'), 3000);
//     });

//     try {
//         const winnerIs = await Promise.race([p1, p2]);
//         return winnerIs;
//     } catch (error) {
//         console.error('Error:', error);
//         throw error;
//     }
// }

// whoFinishesFirst()
//     .then((result) => {
//         console.log('And ..........:', result);
//     })
//     .catch((error) => {
//         console.error('Error occurred:', error);
//     });



// async function sequentialAsyncTasks() {
//     try {
//         const result1 = await new Promise((resolve, reject) => {
//             resolve("first async task");
//         });
//         console.log(result1);

//         const result2 = await new Promise((resolve, reject) => {
//             resolve("second async task");
//         });
//         console.log(result2);

//         const result3 = await new Promise((resolve, reject) => {
//             resolve("third async task");
//         });
//         console.log(result3);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// sequentialAsyncTasks();



// function abx(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     });
// }

// async function abc(){
//    let raw =  await fetch(`https://randomuser.me/api/`)
//    let data = await raw.json();
//    console.log(data);
// }
// abc();


// async function performAll() {
//     try {
//         const [first, second, third] = await Promise.all([
//             firstOperation(),
//             secondOperation(),
//             thirdOperation()
//         ]);
//         console.log("First :", first);
//         console.log("Second :", second);
//         console.log("Third :", third);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// async function firstOperation() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("First operation resolved in 1s"), 1000);
//     });
// }

// async function secondOperation() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Second operation resolved in 3s"), 3000);
//     });
// }

// async function thirdOperation() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Third operation resolved in 5s"), 5000);
//     });
// }
// performAll();


















// let stocks = {
//     fruits: ["apple", "banana","mango"],
//     liquid: ["water","juice"],
//     holder: ["cup","cone","stick"],
//     topping: ["choco","peanut"]
// };


// let order = (time,work)=>{
//     return new Promise((resolve, reject)=>{
//         if(true){
//             resolve();
//         }else{
//             reject()
//         }
//     })
// }




// order(0,production);