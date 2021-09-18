import React from 'react';
import { Form } from 'antd';
import isEmpty from 'lodash/isEmpty';
import isBoolean from 'lodash/isBoolean';
import isNumber from 'lodash/isNumber'

const FormItem = Form.Item;
const ChartFilter = (props) => {
  const {
    formItem,
    onFieldChange,
    ...restFormOptions
  } = props;

  const [form] = Form.useForm();

  const onFieldsChangeHandle = (fields, allFields) => {
    if (onFieldChange) {
        if (
            Object.values(allFields).every((o) => {
                if (isNumber(o) || isBoolean(o)) {
                    return true;
                }
                return !isEmpty(o);
            })
        ) {
        onFieldChange(allFields);
        }
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form
        layout="inline"
        {...restFormOptions}
        onValuesChange={onFieldsChangeHandle}
        form={form}
      >
        {formItem.map((option) => {
          const {
            component: Component,
            name,
            formItemOptions = {},
            ...restComponentOptions
          } = option;
          return (
            <FormItem name={name} {...formItemOptions}>
              <Component {...restComponentOptions} />
            </FormItem>
          );
        })}
      </Form>
    </>
  );
};

export default ChartFilter;
