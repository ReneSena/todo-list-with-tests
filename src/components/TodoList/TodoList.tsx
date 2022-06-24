import { FC } from 'react';

export interface ITodoListItem {
    id: string;
    value: string;
}

export interface ITodoList {
    listItems: ITodoListItem[];
}

const TodoListItem: FC<ITodoListItem> = ({ id, value }) => {
    return <li id={id}>{value}</li>;
};

export const TodoList: FC<ITodoList> = ({ listItems }) => {
    return (
        <ul>
            {!listItems.length && (
                <TodoListItem id="empty-space" value="You have no tasks registered." />
            )}
            {listItems.map((item) => (
                <TodoListItem key={item.id} id={item.id} value={item.value} />
            ))}
        </ul>
    );
};

