import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

describe('<TodoList />', () => {
    it('should render TodoList Component with empty list', () => {
        render(<TodoList list={[]} />);

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('You have no tasks registered.')).toBeInTheDocument();
    });
});

