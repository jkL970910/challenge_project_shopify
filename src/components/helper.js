import generatePicker from 'antd/es/date-picker/generatePicker';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import locale from 'dayjs/locale/zh-cn';

const DatePicker = generatePicker(dayjsGenerateConfig);

export function createDateRangePicker(
    name,
    componentProps,
    formItemOptions,
  ) {
    return {
      name,
      formItemOptions: {
        rules: [{ required: true, message: 'pick up the date' }],
        ...formItemOptions,
      },
      component: DatePicker.RangePicker,
      size: 'middle',
      locale,
      ...componentProps,
    };
  }