export const addProduct = (ids, product) => {
  const jasonSave = localStorage.getItem('keyLocalStorage') || '[]';
  const save = JSON.parse(jasonSave);
  const verificId = save.some(({ id }) => ids === id);
  if (!verificId) {
    save.push({ ...product, qty: 1 });
    localStorage.setItem('keyLocalStorage', JSON.stringify(save));
    return null;
  }
  const newSave = save.map((item) => {
    if (item.id === ids && item.qty < item.availableQty) {
      item.qty += 1;
    }
    return item;
  });
  localStorage.setItem('keyLocalStorage', JSON.stringify(newSave));
};

export default addProduct;
