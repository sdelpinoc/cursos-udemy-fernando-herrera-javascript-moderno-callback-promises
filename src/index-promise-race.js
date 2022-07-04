import { slowPromise, mediumPromise, fastPromise } from './js/promises-race';

import './styles.css';

// slowPromise.then(console.log);

// mediumPromise.then(console.log);

// fastPromise.then(console.log);

// Only return the fastest promise
// If a error ocurrs in the slower promises, it is ignored
Promise.race([slowPromise, mediumPromise, fastPromise])
    .then(console.log)
    .catch(console.warn);

// Example of a fetch and set a timeout in a Promise.race
// var p = Promise.race([
//     fetch('/resource-that-may-take-a-while'),
//     new Promise(function (resolve, reject) {
//          setTimeout(() => reject(new Error('request timeout')), 5000)
//     })
// ])
// p.then(response => console.log(response))
// p.catch(error => console.log(error))