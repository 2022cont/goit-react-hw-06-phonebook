import React from 'react';
import { useDispatch } from 'react-redux';

import { todoDeleted } from '../../redux/todosSlice';

import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id} >{name}:
                    <span className={css.textNumber}>
                        {number}
                    </span>
                    <button
                        type='button'
                        onClick={() => dispatch(todoDeleted({ id }))}
                        className={css.btnDel}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )

};


