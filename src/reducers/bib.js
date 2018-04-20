function range(to, from = 1) {
  return new Array(to)
    .fill(1)
    .map((n, i) => i + 1)
    .slice(from - 1);
}

export default (state = { awailable: [], used: [] }, action) => {
  switch (action.type) {
    case 'EXCLUDE':
      if (!state.awailable.includes(action.bib)) {
        return state;
      }
      return Object.assign({}, state, {
        awailable: state.awailable.filter((bib, index) => bib !== action.bib),
        used: state.used.concat(action.bib)
      });
    case 'INCLUDE':
      if (!state.used.includes(action.bib)) {
        return state;
      }
      return Object.assign({}, state, {
        awailable: state.awailable.concat(action.bib),
        used: state.used.filter((bib, index) => bib !== action.bib)
      });
    case 'NEXT':
      if (!state.awailable.length) {
        return state;
      }
      return Object.assign({}, state, {
        awailable: state.awailable.filter((bib, index) => index !== action.index),
        used: state.used.concat(state.awailable[action.index])
      });
    case 'CREATE':
      return {
        awailable: range(action.to, action.from),
        used: [],
        from: action.from,
        to: action.to,
        title: action.title,
        id: action.id
      };
    case 'RESET':
      return Object.assign({}, state, {
        awailable: range(state.to, state.from),
        used: [],
        current: undefined
      });
    default:
      return state;
  }
}
