const heros = {
    cap: {
        name: 'Capitan America',
        power: 'Strenght'
    },
    iron: {
        name: 'Ironman',
        power: 'Money'
    },
    spider: {
        name: 'Spiderman',
        power: 'web, agility, etc.'
    }
};

const searchHero = id => {
    const hero = heros[id];

    return new Promise((resolve, reject) => {
        if (hero) {
            resolve(hero);
        } else {
            reject(`There is no hero with the id: ${id}`);
        }
    });
};

const searchHeroAsync = async id => {
    const hero = heros[id];
    if (hero) {
        return hero;
    } else {
        throw `There is no hero with the id: ${id}`;
    }
};

export {
    searchHeroAsync,
    searchHero,
    heros
};