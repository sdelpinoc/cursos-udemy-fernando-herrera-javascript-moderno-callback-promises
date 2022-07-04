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

export const searchHero = (id, callback) => {
    const hero = heros[id];

    if (hero) {
        callback(null, hero);
    } else {
        // Error
        callback(`There is no hero with the id: ${id}`);
    }

    // callback(hero);
};