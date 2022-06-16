import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GalleryComponent from './GalleryComponent';

describe('<GalleryComponent />', () => {
  test('it should mount', () => {
    render(<GalleryComponent />);
    
    const galleryComponent = screen.getByTestId('GalleryComponent');

    expect(galleryComponent).toBeInTheDocument();
  });
});