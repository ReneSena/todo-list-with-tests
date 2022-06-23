import React, { FC } from 'react';

interface ITextField {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const TextField: FC<ITextField> = ({ value, onChange, onSubmit }) => {
    return (
        <form name="form-field" onSubmit={onSubmit}>
            <input
                type="text"
                name="input-field"
                placeholder="Add a new task"
                onChange={onChange}
                value={value}
            />
            <button type="submit">Add</button>
        </form>
    );
};
