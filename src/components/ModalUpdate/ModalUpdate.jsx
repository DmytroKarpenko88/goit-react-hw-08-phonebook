import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonEdit } from 'components/ContactList/ContactList.styled';
import { TiEdit } from 'react-icons/ti';
import UpdateForm from 'components/UpdateForm/UpdateForm';
import { Container } from './ModalUpdate.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 5,
};

export default function ModalUpdate({ contactId }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <ButtonEdit type="button" onClick={handleOpen}>
        <TiEdit />
      </ButtonEdit>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Update contact
          </Typography>
          <UpdateForm onClose={handleClose} contactId={contactId} />
        </Box>
      </Modal>
    </Container>
  );
}
