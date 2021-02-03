import * as React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  const [value, setValue] = React.useState<string>('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof props.onChange === 'function') {
      props.onChange(e);
    }

    setValue(e.target.value);
  };

  return (
    <input
      {...props}
      onChange={onChangeHandler}
      value={value}
      className="input"
    />
  );
};

export default Input;
