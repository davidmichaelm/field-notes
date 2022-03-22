import GroupDesignInput from './GroupEntryInput';
import singleEntryInputTypes from './singleEntryInputTypes';

const entryInputTypes = {
  group: GroupDesignInput,
  ...singleEntryInputTypes,
};

export default entryInputTypes;
