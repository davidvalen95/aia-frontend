import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginationComponent from './PaginationComponent';

describe('<PaginationComponent />', () => {
  test('it should mount', () => {
    render(<PaginationComponent />);
    
    const paginationComponent = screen.getByTestId('PaginationComponent');

    expect(paginationComponent).toBeInTheDocument();
  });
});