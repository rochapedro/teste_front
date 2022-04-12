import P from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Input } from './input';

export default function InputForm({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Input ref={inputRef} {...rest} />
    </>
  );
}

InputForm.propTypes = {
  name: P.string.isRequired,
};
