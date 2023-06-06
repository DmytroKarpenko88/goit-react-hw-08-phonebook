import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Button, Form, Input, Label } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid(5);
  const numberInputId = nanoid(5);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      id: nanoid(5),
      name,
      number,
    };

    onSubmit(user);
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        <p>Name</p>

        <Input
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
          value={name}
          onChange={handleInputChange}
        />
      </Label>
      <Label htmlFor={numberInputId}>
        <p>Number</p>
        <Input
          type="tel"
          name="number"
          placeholder="111-22-33"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
          value={number}
          onChange={handleInputChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
// class oldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   nameInputId = nanoid(5);
//   numberInputId = nanoid(5);

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label htmlFor={this.nameInputId}>
//           <p>Name</p>

//           <Input
//             type="text"
//             name="name"
//             placeholder="Rosie Simpson"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             id={this.nameInputId}
//             value={name}
//             onChange={this.handleInputChange}
//           />
//         </Label>
//         <Label htmlFor={this.numberInputId}>
//           <p>Number</p>
//           <Input
//             type="tel"
//             name="number"
//             placeholder="111-22-33"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             id={this.numberInputId}
//             value={number}
//             onChange={this.handleInputChange}
//           />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
