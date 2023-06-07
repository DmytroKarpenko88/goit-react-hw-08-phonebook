import { Button, List, ListItem, Text } from './ContactList.styled';

import { TiUserDelete } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getActive, getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const isActive = useSelector(getActive);
  const dispatch = useDispatch();

  const getVisibleItems = () => {
    return contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    );
  };

  const visibleList = getVisibleItems();

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

export default ContactList;
