export const getCategories = async () => {
  const fetchCat = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseData = await fetchCat.json();
  return responseData;
};

export const getProductsFromCategoryAndQuery = async (categoryId, query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchCat = await fetch(url);
  const responseData = await fetchCat.json();
  return responseData;
};

export const getProductById = async (id) => {
  const fetchCat = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const responseData = await fetchCat.json();
  return responseData;
};
