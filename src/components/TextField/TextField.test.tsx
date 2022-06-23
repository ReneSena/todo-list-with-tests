import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { TextField } from './TextField';

const mockOnChange = jest.fn();
const mockOnSubmit = jest.fn((event) => event.preventDefault());

const renderComponent = (value = '') => {
    return render(<TextField value={value} onChange={mockOnChange} onSubmit={mockOnSubmit} />);
};

describe('<TextField />', () => {
    afterAll(() => jest.resetAllMocks());
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Input to write new tasks', () => {
        it('should render TextField Component', () => {
            renderComponent();

            const form = screen.getByRole('form');
            const inputField = screen.getByPlaceholderText('Add a new task');
            const addButton = screen.getByRole('button', { name: /add/i });

            expect(form).toBeInTheDocument();
            expect(inputField).toBeInTheDocument();
            expect(addButton).toBeInTheDocument();
        });

        it('should render TextField Component with type text', () => {
            renderComponent();

            const inputField = screen.getByPlaceholderText('Add a new task');

            expect(inputField).toHaveProperty('type', 'text');
        });

        it('should render a value in TextField Component and execute The onChange function', async () => {
            renderComponent('To do coffee');

            const inputField = screen.getByPlaceholderText('Add a new task');
            await userEvent.type(inputField, 'To do coffee');

            expect(inputField).toHaveValue('To do coffee');
            expect(mockOnChange).toBeCalledTimes(12);
        });
    });

    describe('Button to add new tasks', () => {
        it('should call onSubmit clicking in [Add Button], after the user fills input', async () => {
            renderComponent('To do coffee');

            const inputField = screen.getByPlaceholderText('Add a new task');
            await userEvent.type(inputField, 'To do coffee');

            const addButton = screen.getByRole('button', { name: /add/i });
            await userEvent.click(addButton);

            expect(mockOnChange).toBeCalledTimes(12);
            expect(mockOnSubmit).toBeCalledTimes(1);
        });
    });
});
