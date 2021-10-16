/*import PropTypes from 'prop-types'*/
import { useState } from 'react';
const AddForm = ({}) => {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState('');
  const onAdd = (e) => {
    //onClick({text})
    e.preventDefault();
    console.log(text);

    setShowText(
      `There are ${
        Math.floor(Math.random() * 400) + 1
      },000 people living in ${text}.`
    );
  };
  return (
    <div>
      <form className="add-form">
        <div className="form-control" />

        <input
          className="pa3"
          type="text"
          placeholder="Enter location"
          style={{ width: 300 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          style={{ width: 150 }}
          className="pa3"
          type="submit"
          onClick={onAdd}
        >
          Switch Mode
        </button>
      </form>

      {/*Temp*/}
      <div className="mv4 f4 lh-copy">{showText}</div>
    </div>
  );
};

export default AddForm;
