import { ITodoListItem, TodoList } from './components/TodoList/TodoList';
import React from 'react';
import { TextField } from './components/TextField/TextField';
import { GlobalStyle } from './global/global';

function App() {
    const [inputFieldValue, setInputFieldValue] = React.useState<string>('');
    const [tasks, setTasks] = React.useState<ITodoListItem[]>([]);

    const handleOnChange = (event: React.BaseSyntheticEvent) =>
        setInputFieldValue(event.target.value);

    const handleAddNewTask = (event: React.BaseSyntheticEvent) => {
        event.preventDefault();

        const listItems = {
            id: Math.random().toString().replace('.', ''),
            value: inputFieldValue,
        };

        setTasks([...tasks, listItems]);
        setInputFieldValue('');
    };

    return (
        <>
            <GlobalStyle />
            <TextField
                value={inputFieldValue}
                onChange={handleOnChange}
                onSubmit={handleAddNewTask}
            />
            <TodoList listItems={tasks} />
        </>
    );
}

export default App;

