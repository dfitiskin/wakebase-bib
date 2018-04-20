import bib from './bib';

export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, bib(undefined, action)];
    case 'REMOVE':
      return state.filter(item => item.id !== action.id);
    case 'NEXT':
    case 'RESET':
    case 'EXCLUDE':
    case 'INCLUDE':
      return state.map(item => {
        if (item.id !== action.id) {
          return item;
        }
        return bib(item, action);
      });
    default:
      return state;
  }
}
