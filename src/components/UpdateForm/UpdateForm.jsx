import { nanoid } from '@reduxjs/toolkit';
import {
  // Button,
  ButtonContainer,
  Form,
  // Input,
  Label,
} from './UpdateForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { updateContact } from 'redux/contacts/operations';
import { useState } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const UpdateForm = ({ onClose, contactId }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const currentContact = contacts.find(el => el.id === contactId);

  const [newName, setNewName] = useState(currentContact.name);
  const [newNumber, setNewNumber] = useState(currentContact.number);

  const handleChangeName = e => {
    setNewName(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNewNumber(e.currentTarget.value);
  };

  const handleClose = () => onClose();

  const nameInputId = nanoid(5);
  const numberInputId = nanoid(5);

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: newName,
      number: newNumber,
    };

    dispatch(updateContact({ contact, contactId }));
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        <p>Name</p>

        <Input
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={newName}
          id={nameInputId}
          onChange={handleChangeName}
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
          value={newNumber}
          id={numberInputId}
          onChange={handleChangeNumber}
        />
      </Label>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Button variant="contained" type="submit">
          Update contact
        </Button>
        <Button variant="contained" type="button" onClick={handleClose}>
          Cancel
        </Button>
      </Stack>

      <ButtonContainer></ButtonContainer>
    </Form>
  );
};

export default UpdateForm;
