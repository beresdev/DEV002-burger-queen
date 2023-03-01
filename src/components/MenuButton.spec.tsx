import '@testing-library/jest-dom/extend-expect'; 
import React from 'react';
import { describe, test, expect} from 'vitest'
import { render, screen } from '@testing-library/react';
import { MenuButton } from './MenuButton';
import { MemoryRouter } from 'react-router-dom';

describe('MenuButton', () => {
  test('renders button with correct text and link', () => {
    const route = '/home';
    const text = 'Home';
    render(
      <MemoryRouter>
        <MenuButton route={route} text={text} />
      </MemoryRouter>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('href', route);
  });
});
