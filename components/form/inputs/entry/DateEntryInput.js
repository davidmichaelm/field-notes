import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  endOfWeek, isSameDay, isWithinInterval, startOfWeek,
} from 'date-fns';
import { useState } from 'react';
import { styled, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker, PickersDay } from '@mui/lab';
import PropTypes from 'prop-types';
import BaseEntryInput from './BaseEntryInput';

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({
  theme, dayIsBetween, isFirstDay, isLastDay,
}) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));

function DateEntryInput(props) {
  const { input } = props;
  const [value, setValue] = useState(new Date());

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = startOfWeek(value);
    const end = endOfWeek(value);

    const dayIsBetween = isWithinInterval(date, { start, end });
    const isFirstDay = isSameDay(date, start);
    const isLastDay = isSameDay(date, end);

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BaseEntryInput>
        {input.text}
        <MobileDatePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderDay={renderWeekPickerDay}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="'Week of' MMMM d"
        />
      </BaseEntryInput>
    </LocalizationProvider>
  );
}

DateEntryInput.propTypes = {
  input: PropTypes.object,
};

export default DateEntryInput;
