import { useEffect } from 'react';
import {
  ButtonDelete,
  List,
  ListItem,
  NameText,
  NumberText,
  TextContainer,
} from './ContactList.styled';

import { TiUserDelete } from 'react-icons/ti';
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
      {visibleList?.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <TextContainer>
              <NameText>{name}</NameText>
              <NumberText>{number}</NumberText>
            </TextContainer>
            <ModalUpdate contactId={id} />

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
