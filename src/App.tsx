import React from 'react';
import { TextField } from './components/TextField/TextField';

function App() {
    const [inputFieldValue, setInputFieldValue] = React.useState<string>('');

    const handleOnChange = (event: React.BaseSyntheticEvent) =>
        setInputFieldValue(event.target.value);

    const handleAddNewTask = (event: React.BaseSyntheticEvent) => {
        event.preventDefault();

        setInputFieldValue('');
    };

    return (
        <TextField value={inputFieldValue} onChange={handleOnChange} onSubmit={handleAddNewTask} />
    );
}

export default App;
