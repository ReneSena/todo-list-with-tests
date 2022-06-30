import React, { FC } from 'react';
import styled from 'styled-components';

export interface ITodoListItem {
    id: string;
    value: string;
}

export interface ITodoList {
    listItems: ITodoListItem[];
}
interface IProps {
    done: boolean;
}

const ListItem = styled.li<IProps>`
    text-decoration: ${(props) => props.done && 'line-through'};
`;

const TodoListItem: FC<ITodoListItem> = ({ id, value }) => {
    const [taskDone, setTaskDone] = React.useState<boolean>(false);

    const handleCheckbox = () => setTaskDone(!taskDone);

    return (
        <>
            <ListItem id={id} done={taskDone}>
                <input type="checkbox" onClick={handleCheckbox} />
                {value}
            </ListItem>
        </>
    );
};

export const TodoList: FC<ITodoList> = ({ listItems }) => {
    return (
        <>
            {!listItems.length && <div>You have no tasks registered.</div>}
            <ul>
                {listItems.map((item) => (
                    <TodoListItem key={item.id} id={item.id} value={item.value} />
                ))}
            </ul>
        </>
    );
};

