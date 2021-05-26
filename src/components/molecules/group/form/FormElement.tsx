import React from 'react';
import {
  FormDefineType,
  FormSaveType,
  mergeFormType,
} from '../../../../api/dataType';
import FormElementString from './FormElementString';
import FormElementCheck from './FormElementCheck';

export type FormElementProps = {
  type: FormDefineType,
  value?: FormSaveType,
}

const FormElement = (props: FormElementProps): JSX.Element => {
  const { type, value } = props;
  const data = value ? mergeFormType(type, value) : [];
  switch (data[0]) {
    case 'string':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <FormElementString {...data[1]} />;
    case 'check':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <FormElementCheck {...data[1]} />;
    default:
      return <>Error</>;
  }
};

export default FormElement;
