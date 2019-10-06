import { Character } from './char';

// export class Rooster extends Character {
//     constructor(name) {
//         super()
//         this.name = name;
//         this.hp = 40;
//         this.sound = "ko ko ko";
//         this.maxHp = 40;
//         this.recoveryTempo = 1000;
//     }
// }

import { createHashHistory } from 'history';
// import queryString from 'query-string';
// import { get } from 'lodash';

let playerInstance = null;

export default class Rooster extends Character {
   constructor(name) {
        super();
        if (Rooster.isHistoryManagerInstanceNull) {
            this.name = name;
            this.hp = 40;
            this.sound = "ko ko ko";
            this.maxHp = 40;
            this.recoveryTempo = 800;
       } else {
           throw new Error('HistoryManager is already initialized, please use static method "getInstace()".');
       }
   }

   static getInstance() {
       return playerInstance;
   }

   static get isHistoryManagerInstanceNull() {
       return playerInstance === null;
   }

//    getQueryKey = key => queryString.parse(this.history.location.search)[key];

//    goTo = (location) => {
//        let tempLocation = location;
//        if (tempLocation[0] !== '/') {
//            tempLocation = `/${tempLocation}`;
//        }

//        const pathName = get(this.history, 'location.pathname');
//        if (tempLocation !== pathName) {
//            this.history.push(tempLocation);
//        }
//    }

//    addQuery = (search) => {
//        const location = Object.assign({}, this.history.location);
//        const currentSearch = queryString.parse(location.search) || {};
//        location.search = queryString.stringify(Object.assign(currentSearch, search));

//        this.history.push(location);
//    };

//    removeQuery = (...searchNames) => {
//        const location = Object.assign({}, this.history.location);
//        const currentSearch = queryString.parse(location.search) || {};

//        searchNames.forEach(q => currentSearch[q] && delete currentSearch[q]);
//        location.search = queryString.stringify(currentSearch);
//        this.history.push(location);
//    };

//    addProjectorQuery = () => {
//        const location = Object.assign({}, this.history.location);
//        const currentSearch = queryString.parse(location.search) || {};
//        const level = parseInt(currentSearch.projector, 10) || 0;
//        this.addQuery({ projector: level + 1 });
//    };

//    subProjectorQuery = () => {
//        const location = Object.assign({}, this.history.location);
//        const currentSearch = queryString.parse(location.search) || {};
//        const level = parseInt(currentSearch.projector, 10) || 0;

//        if (level > 1) {
//            this.addQuery({ projector: level - 1 });
//        } else {
//            this.removeQuery('projector');
//        }
//    };
}
// const history = createHashHistory();
playerInstance = new Rooster();