import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';

import { nameIn, numberPhoneIn, getFormSliceName, getFormSliceNumber } from "../../redux/formSlice";
import { addTodo, getTodosSlice } from "../../redux/todosSlice";

import css from './Form.module.css';


export default function Form() {
    const dispatch = useDispatch();
    let numberPhoneUser = useSelector(getFormSliceNumber);
    let nameInSearch = useSelector(getFormSliceName);
    let contacts = useSelector(getTodosSlice);

    const handleInput = event => {

        switch (event.target.name) {
            case 'name':
                nameInSearch = event.target.value;
                dispatch(nameIn(nameInSearch));

                break;
            case 'numberPhone':
                numberPhoneUser = event.target.value;
                dispatch(numberPhoneIn(numberPhoneUser));
                break;
            default:
                return;
        };

    };

    const handleAddSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;

        if (contacts.find(element => element.name === nameInSearch)) {
            form.reset();
            return alert(nameInSearch + " is already in contacts")
        } else {
            dispatch(addTodo({ id: nanoid(4), name: nameInSearch, number: numberPhoneUser }));
            form.reset();
        }
    }

    return (
        <form className={css.form} onSubmit={handleAddSubmit}>
            <label className={css.labelForm}>Name</label>
            <input
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
                type="text"
                name="numberPhone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                className={css.inputForm}
                required

                onChange={handleInput}
            />


            <button type='submit' className={css.btnSubmit}>ADD contact</button>
        </form>)

};



