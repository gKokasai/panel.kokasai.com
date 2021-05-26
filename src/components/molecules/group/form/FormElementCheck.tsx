import React from 'react';
import Checkbox from '../../../atoms/Checkbox';
import { FormDefineTypeCheck, FormSaveTypeCheck } from '../../../../api/dataType';

export type FormElementCheckProps = FormDefineTypeCheck & FormSaveTypeCheck;

const FormElementCheck = (props: FormElementCheckProps): JSX.Element => {
  const { element, select } = props;
  return (
    <>
      {
        Object.keys(element)
          .map(
            (id) => (
              <p key={id}>
                {element[id as keyof string]}
                <Checkbox checked={id in select} />
              </p>
            ),
          )
      }
    </>
  );
};

export default FormElementCheck;
