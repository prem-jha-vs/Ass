// function uniqueElement(array){
//     const set = new Set(array);
//     const newArray = [...set];
//     return newArray;
// }
// console.log(uniqueElement([1,2,1,2,3,2,1]));

// class Cache{
//     constructor(){
//     this.weakMap  = new WeakMap();
//     }
//     set(key,value){
//         if (typeof key !== 'object' || key === null) {
//             console.log(`Invalid key ${key}. Only objects are allowed as keys in WeakMap.`);
//           }else{
//             this.weakMap.set(key, value);
//           }
        

//     }
//     get(key){
//        return this.weakMap.get(key);
//     }
//     delete(key){
//         this.weakMap.delete(key);
//     }

// }
// const myCache = new Cache();

// const key1 ={id: 1};
// const key2 ={id: 2};

// myCache.set(key1,"raushan");
// myCache.set(key2,"faizan");
// myCache.set(3,"prem"); //Invalid key 3. Only objects are allowed as keys in WeakMap.

// console.log(myCache.get(key1)); //raushan
// console.log(myCache.get(key2)); //faizan

// myCache.delete(key1)
// myCache.delete(key1)
// console.log(myCache.get(key1))  //undefined


// function reverseObject(obj) {
//     return Object.entries(obj).reduce((reversed, [key, value]) => {
//         reversed[value] = key;
//         return reversed;
//     }, {});
// }

// const originalObject = {
//     name : "Laptop",
//     cost : 2000,
//     quantity : 5,

// }
// console.log(reverseObject(originalObject));


// function swap(obj1, obj2) {
//     let {...sobj1}=obj1;
//     let {...sobj2}=obj2;
    
//     return [obj1, obj2] = [sobj2, sobj1];
// }
// const object1 = { a: 1, b: 2 };
// const object2 = { x: 10, y: 20 };

// console.log(object1, object2)
// console.log(swap(object1, object2));



// function getDaysInMonth(month, year) {
    
//     const date = new Date(year, month - 1, 1);
    
//     const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
   
//     return lastDay.getDate();
// }

// const month = 2; 
// const year = 2004;

// const daysInMonth = getDaysInMonth(month, year);

// console.log(`The number of days in ${month}/${year} is: ${daysInMonth}`);

// function getDaysInMonth(month, year) {
    
//     const firstDayOfCurrentMonth = new Date(year, month - 1, 1);
//     const firstDayOfNextMonth = new Date(year, month, 1);
   
//     const lastDayOfCurrentMonth = new Date(firstDayOfNextMonth - 1);
//     const daysInMonth = (lastDayOfCurrentMonth.getDate() - firstDayOfCurrentMonth.getDate()) + 1;
    
//     return daysInMonth;
// }
// // const month = 2; 
// // const year = 2024;

// const daysInMonth = getDaysInMonth(2, 2024);

// console.log(`The number of days in ${month}/${year} is: ${daysInMonth}`);

// const person = {
//     name: "",
//     age: 30,
//     toJSON() {
//       return { name : this.name,};
//     }
//   };
//   const jsonString = JSON.stringify(person);
//   console.log(jsonString);
  
// function customFilter(array, callback) {
//     return array.reduce((filteredArray, element) => {
//       if (callback(element)) {
//         filteredArray.push(element);
//       }
//       return filteredArray;
//     }, []);
//   }
//   const arr = [1,3,2,4,5]
//   const filteredArray = customFilter(arr,(element) => element%2)
//   console.log(filteredArray)