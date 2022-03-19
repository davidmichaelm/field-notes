import PropTypes from 'prop-types';
import { GroupDesignInput } from '../design';
import { GroupEntryInput } from '../entry';

function GroupInput(props) {
  const { design = true, ...rest } = props;

  return design
    ? <GroupDesignInput {...rest} />
    : <GroupEntryInput {...rest} />;
}

export default GroupInput;

GroupInput.propTypes = {
  design: PropTypes.bool,
};
