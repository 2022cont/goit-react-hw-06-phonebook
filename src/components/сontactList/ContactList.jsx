import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { todoDeleted } from '../../redux/todosSlice';

export const ContactList = ({contactsFilters}) => {
    const contacts = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();

    if (contactsFilters !== null) {
        return (
        <ul>
            {contactsFilters.map(({ id, name, number }) => (
                <li key={id} >{name}:
                    <span className={css.textNumber}>
                        {number}
                    </span>
                    <button
                        type='button'
                        onClick={() => dispatch(todoDeleted(id))}
                        className={css.btnDel}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
    } else {
            return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id} >{name}:
                    <span className={css.textNumber}>
                        {number}
                    </span>
                    <button
                        type='button'
                        onClick={() => dispatch(todoDeleted(id))}
                        className={css.btnDel}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
    }


};