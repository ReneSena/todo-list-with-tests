import { FC } from 'react';

interface ITodoListItem {
    id: string;
    value: string;
}

interface ITodoList {
    list: {
        id: string;
        value: string;
    }[];
}

const TodoListItem: FC<ITodoListItem> = ({ id, value }) => {
    return <li key={id}>{value}</li>;
};

export const TodoList: FC<ITodoList> = ({ list }) => {
    return (
        <ul>
            {!list.length && (
                <TodoListItem id="empty-space" value="You have no tasks registered." />
            )}
        </ul>
    );
};

