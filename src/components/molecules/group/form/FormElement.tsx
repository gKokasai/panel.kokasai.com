import React from 'react';
import { FormDefineType } from '../../../../api/dataType';
import FormElementString from './FormElementString';
import FormElementCheck from './FormElementCheck';

export type FormElementProps = {
  type: FormDefineType,
}

const FormElement = (props: FormElementProps): JSX.Element => {
  const { type } = props;
  switch (type[0]) {
    case 'string':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <FormElementString {...type[1]} />;
    case 'check':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <FormElementCheck {...type[1]} />;
    default:
      return <>Error</>;
  }
};

export default FormElement;
