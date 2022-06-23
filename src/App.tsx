import React from 'react';
import { TextField } from './components/TextField/TextField';

function App() {
    const [inputFieldValue, setInputFieldValue] = React.useState<string>('');

    const handleOnChange = (event: React.BaseSyntheticEvent) =>
        setInputFieldValue(event.target.value);

    return <TextField value={inputFieldValue} onChange={handleOnChange} onSubmit={() => {}} />;
}

export default App;
