import { Label, Input, Button } from './Filter.styled';
import { FcSearch, FcLock, FcUnlock } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { findContact } from 'redux/filterSlice';

import { toggleIsActive } from 'redux/isActiveSlice';

const Filter = () => {
  const isActive = useSelector(state => state.isActive);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(findContact(e.currentTarget.value));
  };

  return (
    <>
      <Label>
        <p>Find contac by name</p>
        <div style={{ position: 'relative' }}>
          <FcSearch
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: 10,
              zIndex: 2,
            }}
          />
          <Input type="text" name="filter" onChange={handleInputChange} />
          <Button type="button" onClick={() => dispatch(toggleIsActive())}>
            {isActive ? <FcLock /> : <FcUnlock />}
          </Button>
        </div>
      </Label>
    </>
  );
};

export default Filter;
