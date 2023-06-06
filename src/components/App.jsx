import React, { useState, useEffect } from 'react';
import { Container } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addUser = user => {
    const existingName = contacts.find(({ name }) => name === user.name);
    const existingNumber = contacts.find(
      ({ number }) => number === user.number
    );

    if (existingName) {
      alert(`${user.name} is already in contacts`);
      return;
    } else if (existingNumber) {
      alert(`${user.number} is already in contacts`);
      return;
    }

    setContacts(prevState => [{ ...user }, ...prevState]);
  };

  const getVisibleItems = () => {
    return contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  const onInputChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const onStatusChange = () => {
    setIsActive(!isActive);
  };

  const handleDelete = idUser => {
    setContacts(prevState => {
      return prevState.filter(({ id }) => idUser !== id);
    });
  };

  return (
    <>
      <Container>
        <h2>Phonebook</h2>

        <ContactForm onSubmit={addUser} />
      </Container>

      <Container>
        <h2>Contacts</h2>

        <Filter
          onChange={onInputChange}
          value={filter}
          isActive={isActive}
          onClick={onStatusChange}
        />
        <ContactList
          visibleList={getVisibleItems()}
          onDeleteUser={handleDelete}
          isActive={isActive}
        />
      </Container>
    </>
  );
};

export default App;
