import React, { useState } from 'react';

// Tipo de validação no formulário
const types = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    msg: 'E-mail inválido',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  // função que o formulario utiliza para mudar seu estado
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  // função para validar os campos do formulário
  function validate(value) {
    // se useForm(false) então não haverá validação. caso contrário validar pelo menos se está preenchido
    if (type === false) return true;
    if (value.length === 0) {
      setError('Campo obrigatório');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].msg);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
