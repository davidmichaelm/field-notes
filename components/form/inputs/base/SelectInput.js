import PropTypes from 'prop-types';
import { SelectDesignInput } from '../design';
import { SelectEntryInput } from '../entry';

function SelectInput(props) {
  const { design = true, ...rest } = props;

  return design
    ? <SelectDesignInput {...rest} />
    : <SelectEntryInput {...rest} />;
}

export default SelectInput;

SelectInput.propTypes = {
  design: PropTypes.bool,
};
