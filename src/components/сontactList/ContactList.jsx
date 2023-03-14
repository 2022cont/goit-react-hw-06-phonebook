import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact}) => {
console.log('ContactList', contacts);

    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id} >{name}:
                    <span className={css.textNumber}>
                        {number}
                    </span>
                    <button
                        type='button'
                        onClick={() => onDeleteContact(id)}
                        className={css.btnDel}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
  
};