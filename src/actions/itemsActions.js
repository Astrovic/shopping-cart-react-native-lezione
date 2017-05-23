import { LOAD_ITEMS } from './actionTypes';
import sampleData from '../sampleData.json';
//console.log(sampleData);

// inizialmente proviamo con dei dati fake creati in locale
// per poter testare. se funziona, proviamo a caricarli dal server
export const loadItems = () => {
  const action = {
    type: LOAD_ITEMS,
    payload: sampleData
  };
  return action;
};

// export const loadItems = () => {
//   const request = fetch('https://www.dmi.unict.it/~calanducci/LAP2/data.json');
//   return {
//     type: LOAD_ITEMS,
//     payload: request.then(response => response.json())
//   };
// };
