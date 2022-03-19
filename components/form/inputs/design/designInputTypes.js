import GroupDesignInput from './GroupDesignInput';
import singleDesignInputTypes from './singleDesignInputTypes';

const designInputTypes = {
  group: GroupDesignInput,
  ...singleDesignInputTypes,
};

export default designInputTypes;
