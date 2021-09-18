import React, { useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import Filter from './filter';
import { createDateRangePicker } from '../helper';

const DateRange = (props) => {
  const { defaultValue, onTimeRangeChange = () => {}, name = 'time' } = props;

  const initialValue = useMemo(() => {
    return defaultValue || [dayjs().subtract(1, 'week'), dayjs()];
  }, [defaultValue]);

  const formItem = useMemo(
    () => [
      createDateRangePicker(
        name,
        {},
        {
          initialValue: defaultValue || [dayjs().subtract(1, 'week'), dayjs()],
        },
      ),
    ],
    [name],
  );

  useEffect(() => {
    onTimeRangeChange({ [name]: initialValue });
  }, []);

  return (
    <>
        <div className={'range-filter'} style={{ marginLeft: '16px'}}>
            <Filter formItem={formItem} onFieldChange={onTimeRangeChange} />
        </div>
    </>
  );
};

export default DateRange;
