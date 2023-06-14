import { Container } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const Contacts = () => {
  return (
    <div>
      <Container>
        <h2>Phonebook</h2>

        <ContactForm />
      </Container>

      <Container>
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};

export default Contacts;
