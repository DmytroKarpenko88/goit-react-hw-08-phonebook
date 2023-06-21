import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import {
  AddContainer,
  ContactsContainer,
  FlexContainer,
  Title,
} from './Contacts.styled';

const Contacts = () => {
  return (
    <FlexContainer>
      <AddContainer>
        <Title>Add contact</Title>

        <ContactForm />
      </AddContainer>
      <ContactsContainer>
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </ContactsContainer>
    </FlexContainer>
  );
};

export default Contacts;
