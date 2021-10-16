/*import PropTypes from 'prop-types'*/
import { useState } from 'react';
import Button from './Button';
const AddForm = ({}) => {
  const [text, setText] = useState('');
  const onAdd = (e) => {
    //onClick({text})
    e.preventDefault();
    console.log(text);
  };
  return (
    <form className="add-form">
      <div className="form-control" />
      <label />
      Location:
      <input
        type="text"
        placeholder="Enter location"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={onAdd} />
    </form>
  );
};

export default AddForm;
