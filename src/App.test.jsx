import React from 'react';
import { render, screen, wait, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => {
  window.history.replaceState({}, '', '/');
});

describe('App navigation experience', () => {
  test('shows the home subtitle by default', () => {
    render(<App />);

    const header = screen.getByRole('banner');
    expect(within(header).getByRole('heading', { level: 1, name: /NT Greek/i })).toBeInTheDocument();
    expect(within(header).getByText('Home')).toBeInTheDocument();
  });

  test('menu toggle opens the sidebar and navigation updates the subtitle', async () => {
    render(<App />);

    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
    const sidebar = screen.getByRole('complementary');

    expect(sidebar).not.toHaveClass('open');

    userEvent.click(toggleButton);
    await wait(() => expect(sidebar).toHaveClass('open'));
    await wait(() => expect(document.body).toHaveClass('sidebar-open-lock'));

    const alphabetLink = within(sidebar)
      .getAllByRole('link')
      .find((link) => link.getAttribute('href') === '/alphabet');

    expect(alphabetLink).toBeTruthy();
    userEvent.click(alphabetLink);

    const header = screen.getByRole('banner');
    await wait(() => expect(header).toHaveTextContent('Alphabet'));
    await wait(() => expect(sidebar).not.toHaveClass('open'));
    expect(document.body).not.toHaveClass('sidebar-open-lock');
  });

  test('navigating directly to Greek routes shows the correct subtitle and content', () => {
    window.history.replaceState({}, '', '/εἰμί');

    render(<App />);

    const header = screen.getByRole('banner');
    expect(header).toHaveTextContent('εἰμί');
    expect(screen.getByText(/takes a nominative/i)).toBeInTheDocument();
  });
});
