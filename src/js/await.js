import { searchHeroAsync, heros } from './async';

const herosId = [
    'cap',
    'iron',
    'spider'
];

// const herosPromises = herosId.map(id => searchHeroAsync(id));
const herosPromises = herosId.map(searchHeroAsync);

export const getHeroInfo = async () => {
    const aHeros = [];

    for (const id of herosId) {
        // searchHeroAsync(id).then(hero => aHeros.push(hero));

        // const hero = await searchHeroAsync(id);
        // aHeros.push(hero);

        // const hero = await searchHeroVerySlow(id);
        // aHeros.push(hero);

        aHeros.push(searchHeroVerySlow(id)); // return a promise array
    }

    // return aHeros;
    return await Promise.all(aHeros);
};

export const getHeroInfo2 = async () => {
    return await Promise.all(herosId.map(searchHeroVerySlow));
};

const searchHeroVerySlow = id => {
    const hero = heros[id];

    return new Promise((resolve, reject) => {
        if (hero) {
            setTimeout(() => resolve(hero), 1000);
            // resolve(hero);
        } else {
            reject(`There is no hero with the id: ${id}`);
        }
    });
};

export const getHeroInfoAwait = async id => {
    try {
        const hero = await searchHeroAsync(id); // return a promise
        return hero;
    } catch (error) {
        // console.log('await-getHeroInfoAwait-catch: ', error);
        // throw error;
        return {
            name: '',
            power: ''
        };
    }
};

export const cycleHeros = async () => {
    console.time('heros');

    // const heros = await Promise.all(herosPromises);
    // heros.forEach(hero => console.log(hero));

    // herosPromises.forEach // Not he same result, work independently

    for await (const hero of herosPromises) {
        console.log(hero);
    }



    console.timeEnd('heros');
}

export const heroIfWait = async id => {
    if ((await searchHeroAsync(id)).name === 'Ironman') {
        return 'Ironman found!';
    } else {
        return 'Ironman not found!';
    }
};