import PropTypes from 'prop-types';
import { DateDesignInput } from '../design';
import { DateEntryInput } from '../entry';

function DateInput(props) {
  const { design = true, ...rest } = props;

  return design
    ? <DateDesignInput {...rest} />
    : <DateEntryInput {...rest} />;
}

export default DateInput;

DateInput.propTypes = {
  design: PropTypes.bool,
};
