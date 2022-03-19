import PropTypes from 'prop-types';
import { NumberDesignInput } from '../design';
import { NumberEntryInput } from '../entry';

function NumberInput(props) {
  const { design = true, ...rest } = props;

  return design
    ? <NumberDesignInput {...rest} />
    : <NumberEntryInput {...rest} />;
}

export default NumberInput;

NumberInput.propTypes = {
  design: PropTypes.bool,
};
