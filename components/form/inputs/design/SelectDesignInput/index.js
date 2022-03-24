import { useState } from 'react';
import PropTypes from 'prop-types';
import SelectDesignInputView from './SelectDesignInputView';
import SelectDesignInputEdit from './SelectDesignInputEdit';

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
        <SelectDesignInputEdit
          onSave={handleSave}
          onCancel={() => setEditing(false)}
          input={input}
          {...rest}
        />
      )}
      {!editing && (
        <SelectDesignInputView
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
