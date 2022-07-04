import { getHeroInfo, getHeroInfo2, getHeroInfoAwait, cycleHeros, heroIfWait } from './js/await';

import './styles.css'

// const heros = getHeroInfo();
// console.table(heros);

// console.time('await');

// getHeroInfo().then(heros => {
//     console.table(heros);
//     console.timeEnd('await');
// });

// console.time('await2');

// getHeroInfo2().then(heros => {
//     console.table(heros);
//     console.timeEnd('await2');
// });

// console.time('await');

// getHeroInfoAwait('cap2').then(hero => {
//     console.log(hero);
//     console.timeEnd('await');
// }).catch(error => {
    //     console.warn('index-catch-error: ', error);
    //     // console.timeEnd('await');
// });

// cycleHeros();

console.time('if-await');
heroIfWait('iron').then(result => {
    console.log(result);
    console.timeEnd('if-await');
});
