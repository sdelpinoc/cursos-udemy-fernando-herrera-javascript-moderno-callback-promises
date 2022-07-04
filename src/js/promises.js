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

export const searchHero = id => {
    const hero = heros[id];

    return new Promise((resolve, reject) => {
        if (hero) {
            resolve(hero);
        } else {
            reject(`There is no hero with the id: ${id}`);
        }
    });
};

// console.log('End of the script');