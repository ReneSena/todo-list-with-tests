import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App()', () => {
    it('should render an App Component', () => {
        render(<App />);

        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('should submit the filled form, then clean up the input', async () => {
        render(<App />);

        const inputField = screen.getByPlaceholderText('Add a new task');
        await userEvent.type(inputField, 'Drink water');

        const addButton = screen.getByText('Add');
        await userEvent.click(addButton);

        expect(inputField).toHaveValue('');
    });
});

