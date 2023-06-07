import { Container } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <>
      <Container>
        <h2>Phonebook</h2>

        <ContactForm />
      </Container>

      <Container>
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export default App;
