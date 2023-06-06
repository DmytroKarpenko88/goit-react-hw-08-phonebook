import React from 'react';
// import PropTypes from 'prop-types';
import { Label, Input, Button } from './Filter.styled';

import { FcSearch, FcLock, FcUnlock } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { findContact, toggleIsActive } from 'redux/contactsSlice';

const Filter = () =>
  // { onChange, value, onClick, isActive }
  {
    const isActive = useSelector(state => state.isActive);
    const searchcontact = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleInputChange = e => {
      console.log('searchcontact:', searchcontact);
      // dispatch(findContact(e.currentTarget.value));
      // console.log(e.currentTarget.value);
      dispatch(findContact(e.currentTarget.value));
    };

    // console.log(handleInputChange);
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
            <Input
              type="text"
              name="filter"
              // value={value}
              onChange={handleInputChange}
            />
            <Button type="button" onClick={toggleIsActive}>
              {isActive ? <FcLock /> : <FcUnlock />}
            </Button>
          </div>
        </Label>
      </>
    );
  };

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

export default Filter;
