import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from '../App';
import mockedCategoriesResult from '../__mocks__/categories';
import mockFetch from '../__mocks__/mockFetch';

describe(`4 - Liste as categorias de produtos disponíveis via API na página principal`, () => {
  beforeEach(() => jest.spyOn(global, 'fetch').mockImplementation(mockFetch));
  it(`Exibe as categorias retornadas pela API na página de listagem de
      produtos`, async () => {
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const categoriesElements = await screen.findAllByTestId('category')

    expect(categoriesElements.length).toEqual(
      mockedCategoriesResult.length
    );
  });
});
