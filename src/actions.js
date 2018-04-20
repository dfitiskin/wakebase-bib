export const createGen = (to, from, title) => ({
  type: 'CREATE',
  id: Date.now(),
  from,
  to,
  title
});

export const resetGen = id => ({
  type: 'RESET',
  id
});

export const removeGen = id => ({
  type: 'REMOVE',
  id
});


export const next = (id, index) => ({
  type: 'NEXT',
  id,
  index
});

export const exclude = (id, bib) => ({
  type: 'EXCLUDE',
  id,
  bib
});

export const include = (id, bib) => ({
  type: 'INCLUDE',
  id,
  bib
});
