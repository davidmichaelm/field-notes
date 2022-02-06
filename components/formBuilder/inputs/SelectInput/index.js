import { useState } from 'react';
import PropTypes from 'prop-types';
import SelectInputView from './SelectInputView';
import SelectInputEdit from './SelectInputEdit';

export default function SelectInput(props) {
  const { input, onSave, ...rest } = props;
  const [editing, setEditing] = useState(false);

  const handleSave = (data) => {
    setEditing(false);
    onSave({
      ...input,
      ...data,
    });
  };

  return (
    <>
      {editing && (
        <SelectInputEdit
          onSave={handleSave}
          onCancel={() => setEditing(false)}
          input={input}
          {...rest}
        />
      )}
      {!editing && (
        <SelectInputView
          onClick={() => setEditing(true)}
          input={input}
          {...rest}
        />
      )}
    </>
  );
}

SelectInput.propTypes = {
  input: PropTypes.object,
  onSave: PropTypes.func,
};
