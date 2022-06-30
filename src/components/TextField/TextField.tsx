import React, { FC } from 'react';
import * as Styled from './styled';

interface ITextField {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const TextField: FC<ITextField> = ({ value, onChange, onSubmit }) => {
    return (
        <Styled.Form name="form-field" onSubmit={onSubmit}>
            <Styled.Input
                type="text"
                name="input-field"
                placeholder="Add a new task"
                onChange={onChange}
                value={value}
            />
            <Styled.Button type="submit">Add</Styled.Button>
        </Styled.Form>
    );
};

