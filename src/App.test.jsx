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

  test('sidebar items load each section with content', async () => {
    render(<App />);

    const header = screen.getByRole('banner');
    const main = screen.getByRole('main');
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
    const sidebar = screen.getByRole('complementary');

    const navigationTargets = [
      { href: '/', title: 'Home' },
      { href: '/firstdeclension', title: 'First Declension' },
      { href: '/seconddeclension', title: 'Second Declension' },
      { href: '/thirddeclension', title: 'Third Declension' },
      { href: '/accent', title: 'Accent' },
      { href: '/adjectives', title: 'Adjectives' },
      { href: '/alphabet', title: 'Alphabet' },
      { href: '/article', title: 'Article' },
      { href: '/conjunctions', title: 'Conjunctions' },
      { href: '/contractverbs', title: 'Contract Verbs' },
      { href: '/demonstrativeadjectives', title: 'Demonstrative Adjectives' },
      { href: '/εἰμί', title: 'εἰμί' },
      { href: '/futureliquidverbs', title: 'Future Liquid Verbs' },
      { href: '/genitiveabsolute', title: 'Genitive Absolute' },
      { href: '/genitiveofcomparison', title: 'Genitive of Comparison' },
      { href: '/history', title: 'History' },
      { href: '/imperativemood', title: 'Imperative Mood' },
      { href: '/interrogativeandindefinitepronouns', title: 'Interrogative/Indefinite Pronouns' },
      { href: '/nouns', title: 'Nouns' },
      { href: '/numerals', title: 'Numerals' },
      { href: '/participles', title: 'Participles' },
      { href: '/pas', title: 'πᾶς' },
      { href: '/personalpronouns', title: 'Personal Pronouns' },
      { href: '/prepositions', title: 'Prepositions' },
      { href: '/punctuation', title: 'Punctuation' },
      { href: '/reciprocalpronoun', title: 'Reciprocal Pronoun' },
      { href: '/reflexivepronouns', title: 'Reflexive Pronouns' },
      { href: '/relativepronoun', title: 'Relative Pronoun' },
      { href: '/specialwords', title: 'Special Words' },
      { href: '/verbs', title: 'Verbs' },
      { href: '/verbsinui', title: 'Verbs In μι' },
      { href: '/vowels', title: 'Vowels' }
    ];

    for (const target of navigationTargets) {
      if (!header.textContent.includes(target.title)) {
        userEvent.click(toggleButton);
        await wait(() => expect(sidebar).toHaveClass('open'));

        const link = within(sidebar)
          .getAllByRole('link')
          .find((candidate) => candidate.getAttribute('href') === target.href);

        expect(link).toBeTruthy();
        userEvent.click(link);
      }

      await wait(() => expect(header).toHaveTextContent(target.title));
      await wait(() => expect(sidebar).not.toHaveClass('open'));
      expect(main.querySelector('*')).not.toBeNull();
    }
  });
});
