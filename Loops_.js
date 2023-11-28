let a = [10, 20 , 30 , 40 ,50]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((vale,index,arr) => {
//     console.log(vale,index,arr);
// });

// let obj ={
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
//     }
// }

for (const iterator of a) {
    console.log(iterator)
}