import { searchHero, searchHeroAsync } from './js/async';

import './styles.css';

const heroId1 = 'cap2';
const heroId2 = 'iron2';

searchHero(heroId1)
    .then(hero => console.log(hero))
    .catch(error => console.error(error));
    
searchHeroAsync(heroId2)
    .then(hero => console.log(hero))
    .catch(error => console.error(error));