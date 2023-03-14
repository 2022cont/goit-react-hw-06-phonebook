import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, getTodosSliceRemove } from "../../redux/todosSlice";

import css from './Form.module.css';


export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();

    let contacts = useSelector(getTodosSliceRemove);

   const handleInput = event => {

        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;
            case 'number':
                setNumber(event.target.value);
                break;
            default:
                return;
        };

    };

    const handleAddSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;

        if (contacts.find(element => element.name === name)) {
            form.reset();
            return alert(name + " is already in contacts")
        } else {
            dispatch(addTodo({ id: nanoid(4), name: name, number: number }));
            form.reset();
        }
    };

 

    return (
        <form className={css.form} onSubmit={handleAddSubmit}>
            <label className={css.labelForm}>Name</label>
            <input
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                className={css.inputForm}
                required

                onChange={handleInput}
            />

            <label className={css.labelForm}>Number</label>
            <input
                value={number}
                type="text"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                className={css.inputForm}
                required

                onChange={handleInput}
            />


            <button type='submit' className={css.btnSubmit}>ADD contact</button>
        </form>)

};



