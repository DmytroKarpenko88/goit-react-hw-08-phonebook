import React from 'react';
// import PropTypes from 'prop-types';
import { Button, List, ListItem, Text } from './ContactList.styled';

import { TiUserDelete } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () =>
  // { visibleList, onDeleteUser, isActive }
  {
    // const getVisibleItems = () => {
    //   return contacts.filter(el =>
    //     el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    //   );
    // };

    const visibleList = useSelector(state => state.contacts.contacts);

    const isActive = useSelector(state => state.isActive);
    const dispatch = useDispatch();
    return (
      <List>
        {visibleList?.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <div>
                <Text>{name}</Text> <Text>{number}</Text>
              </div>
              <Button
                type="button"
                disabled={isActive}
                onClick={() => dispatch(deleteContact(id))}
              >
                <TiUserDelete />
              </Button>
            </ListItem>
          );
        })}
      </List>
    );
  };

// ContactList.propTypes = {
//   visibleList: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteUser: PropTypes.func.isRequired,
// };
export default ContactList;
