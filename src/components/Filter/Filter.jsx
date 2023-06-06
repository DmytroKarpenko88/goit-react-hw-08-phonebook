import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, Button } from './Filter.styled';

import { FcSearch, FcLock, FcUnlock } from 'react-icons/fc';

const Filter = ({ onChange, value, onClick, isActive }) => {
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
          <Input type="text" name="filter" value={value} onChange={onChange} />
          <Button type="button" onClick={onClick}>
            {isActive ? <FcLock /> : <FcUnlock />}
          </Button>
        </div>
      </Label>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
