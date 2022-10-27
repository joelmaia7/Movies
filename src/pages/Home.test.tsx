import { render, screen, waitFor } from '@testing-library/react';

import Home from './Home';
import { renderWithProviders } from '../utils/tests-utils';

describe('Testing Home Page', () => {
    it('Should render home page title', () => {
        render(renderWithProviders(<Home />));
        const pageTitle = screen.findByText('Filmes populares');
        waitFor(() => expect(pageTitle).toBeInTheDocument());
    });
});
