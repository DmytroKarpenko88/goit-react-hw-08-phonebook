import { nanoid } from '@reduxjs/toolkit';
import {
  //  Button,
  Form,
  Label,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';

import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const ariaLabel = { 'aria-label': 'description' };

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid(5);
  const numberInputId = nanoid(5);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = form.elements.name.value;
    const formNumber = form.elements.number.value;

    const existingName = contacts.find(({ name }) => name === formName);
    const existingNumber = contacts.find(({ number }) => number === formNumber);

    if (existingName) {
      alert(`${formName} is already in contacts`);
      return;
    } else if (existingNumber) {
      alert(`${formNumber} is already in contacts`);
      return;
    }

    const contact = {
      name: formName,
      number: formNumber,
    };

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        <p>Name</p>
        <Input
          type="text"
          name="name"
          inputProps={ariaLabel}
          placeholder="Rosie Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>

      <Label htmlFor={numberInputId}>
        <p>Number</p>
        <Input
          type="tel"
          name="number"
          placeholder="111-22-33"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </Label>

      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
