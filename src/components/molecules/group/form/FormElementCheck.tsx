import React from 'react';
import Checkbox from '../../../atoms/Checkbox';
import { FormDefineTypeCheck } from '../../../../api/dataType';

export type FormElementCheckProps = FormDefineTypeCheck;

const FormElementCheck = (props: FormElementCheckProps): JSX.Element => {
  const { element } = props;
  return (
    <>
      {
        Object.keys(element)
          .map(
            (id) => (
              <p>
                {element[id as keyof string]}
                <Checkbox />
              </p>
            ),
          )
      }
    </>
  );
};

export default FormElementCheck;
