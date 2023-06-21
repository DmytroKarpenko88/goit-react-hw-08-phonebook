import { Container } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { FlexContainer, Title } from './Contacts.styled';

const Contacts = () => {
  return (
    <FlexContainer>
      <Container>
        <Title>Add contact</Title>

        <ContactForm />
      </Container>

      <Container>
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </Container>
    </FlexContainer>
  );
};

export default Contacts;
