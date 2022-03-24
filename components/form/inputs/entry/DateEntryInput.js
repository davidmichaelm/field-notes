import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  endOfWeek, isSameDay, isWithinInterval, startOfWeek,
} from 'date-fns';
import { styled, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker, PickersDay } from '@mui/lab';
import PropTypes from 'prop-types';
import { useFormContext, useController } from 'react-hook-form';
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
  const { control } = useFormContext();
  const {
    field: {
      onChange, onBlur, name, value, ref,
    },
  } = useController({
    name: input.id,
    control,
    rules: { required: true },
    defaultValue: new Date(),
  });

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
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          renderDay={renderWeekPickerDay}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="'Week of' MMMM d"
          inputRef={ref}
        />
      </BaseEntryInput>
    </LocalizationProvider>
  );
}

DateEntryInput.propTypes = {
  input: PropTypes.object,
};

export default DateEntryInput;
