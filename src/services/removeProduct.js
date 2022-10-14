export const removeProduct = (ids) => {
  const jasonSave = localStorage.getItem('keyLocalStorage') || '[]';
  const save = JSON.parse(jasonSave);
  const newSave = save.map((item) => {
    if (item.id === ids && item.qty > 1) {
      item.qty -= 1;
    }
    return item;
  });
  localStorage.setItem('keyLocalStorage', JSON.stringify(newSave));
};

export default removeProduct;
