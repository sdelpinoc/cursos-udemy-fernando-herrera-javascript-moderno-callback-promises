const slowPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
});

const fastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});

export {
    slowPromise,
    mediumPromise,
    fastPromise
};