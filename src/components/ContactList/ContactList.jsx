import { useEffect } from 'react';
import {
  ButtonDelete,
  ButtonEdit,
  List,
  ListItem,
  Text,
} from './ContactList.styled';

import { TiUserDelete, TiEdit } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  getActive,
  selectContacts,
  getFilter,
  selectIsLoggedIn,
} from 'redux/selectors';
import ModalUpdate from 'components/ModalUpdate/ModalUpdate';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(getFilter);
  const isActive = useSelector(getActive);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  const getVisibleItems = () => {
    return contacts?.filter(el =>
      el.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    );
  };

  const visibleList = getVisibleItems();

  return (
    <List>
      <ModalUpdate />
      {visibleList?.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <div>
              <Text>{name}</Text> <Text>{number}</Text>
            </div>
            <ModalUpdate />
            <ButtonEdit
              type="button"
              disabled={isActive}
              onClick={() => dispatch(deleteContact(id))}
            >
              <TiEdit />
            </ButtonEdit>
            <ButtonDelete
              type="button"
              disabled={isActive}
              onClick={() => dispatch(deleteContact(id))}
            >
              <TiUserDelete />
            </ButtonDelete>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
