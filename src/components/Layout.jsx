import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, toggleActive } from 'redux/store';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contact.isActive);
  console.log(value);

  return (
    <div>
      <h1>{value}</h1>
      {value}
      <button onClick={() => dispatch(toggleActive())}>Click</button>
    </div>
  );
};
