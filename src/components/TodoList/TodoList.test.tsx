import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

const mockTasks = [
    {
        id: '1234',
        value: 'To do coffe',
    },
    {
        id: '2345',
        value: 'Create a blog',
    },
    {
        id: '3456',
        value: 'Drink water',
    },
];

describe('<TodoList />', () => {
    afterAll(() => jest.resetAllMocks());
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render TodoList Component with empty list', () => {
        render(<TodoList listItems={[]} />);

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('You have no tasks registered.')).toBeInTheDocument();
    });

    it('should render TodoList Component with tasks', () => {
        render(<TodoList listItems={mockTasks} />);

        expect(screen.getAllByRole('list')).toMatchSnapshot();
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });
});

