import { searchHero } from './js/callbacks';
import { searchHero as searchHeroPromise } from './js/promises';

import './styles.css';

const heroId1 = 'cap';
const heroId2 = 'spider';
const heroId3 = 'iron';

// Callback hell!

// searchHero(heroId1, (error, hero1) => {

//     if (error) return console.log(error);

//     searchHero(heroId2, (error, hero2) => {
//         if (error) return console.log(error);

//         // console.log(`Seding ${hero1.name} and ${hero2.name} to the mission`);

//         searchHero(heroId3, (error, hero3) => {
//             if (error) return console.log(error);
    
//             console.log(`Seding ${hero1.name}, ${hero2.name} and ${hero3.name} to the mission`);
//         });
//     });
// });

// searchHeroPromise(heroId1).then(hero1 => {
//     // console.log(`Sendig ${hero.name} to the mission`);
//     searchHeroPromise(heroId2).then(hero2 => {
//         searchHeroPromise(heroId3).then(hero3 => {
//             console.log(`Seding ${hero1.name}, ${hero2.name} and ${hero3.name} to the mission`);
//         });
//     });
// });

// searchHeroPromise(heroId1).then(hero1 => {
//     // console.log(`Sendig ${hero.name} to the mission`);
//     searchHeroPromise(heroId2).then(hero2 => {
//         searchHeroPromise(heroId3).then(hero3 => {
//             console.log(`Seding ${hero1.name}, ${hero2.name} and ${hero3.name} to the mission`);
//         });
//     });
// });

Promise.all([true, 'hello', 123]).then(array => {
    // console.log('promise.all: ', array); // true, hello, 123
});

Promise.all([searchHeroPromise(heroId1), searchHeroPromise(heroId2), searchHeroPromise(heroId3)]).then(([heros1, hero2, hero3]) => {
    // console.log({heros});
    console.log(`Seding ${heros1.name}, ${hero2.name} and ${hero3.name} to the mission`);
}).catch(error => {
    console.log({error});
}).finally(() => {
    console.info('Finally of Promsise.all');
});


// searchHeroPromise(heroId1).then(hero1 => {
//     console.log(`Sending ${hero1.name} `);
    
//     return searchHeroPromise(heroId2);
// }).then(hero2 => {
//     console.log(`and ${hero2.name} `);

//     return searchHeroPromise(heroId3);
// }).then(hero3 => {
//     console.log(`and ${hero3.name} to the mission`);
// });

console.log('End of the script');