import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListItem, Text } from './ContactList.styled';

import { TiUserDelete } from 'react-icons/ti';

const ContactList = ({ visibleList, onDeleteUser, isActive }) => {
  return (
    <List>
      {visibleList.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <div>
              <Text>{name}</Text> <Text>{number}</Text>
            </div>
            <Button
              type="button"
              disabled={isActive}
              onClick={() => onDeleteUser(id)}
            >
              <TiUserDelete />
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  visibleList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};
export default ContactList;
