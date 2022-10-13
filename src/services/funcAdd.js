export const addCart = (ids) => {
  const jasonSave = localStorage.getItem('keyLocalStorage') || '[]';
  const save = JSON.parse(jasonSave);
  const verificId = save.some(({ id }) => ids === id);
  if (!verificId) {
    save.push(this.props);
    localStorage.setItem('keyLocalStorage', JSON.stringify(save));
  }
};
