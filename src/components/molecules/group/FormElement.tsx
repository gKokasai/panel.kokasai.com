import React, { FC } from 'react';
import TextField from '../../atoms/TextField';
import Checkbox from '../../atoms/Checkbox';
import { FormDefineType } from '../../../api/dataType';

export type Props = {
  formDataValueType: FormDefineType,
}

const FormElement: FC<Props> = (props): JSX.Element => {
  const { formDataValueType } = props;
  return (
    <>
      {
        formDataValueType[0] === 'string'
          ? <TextField variant="outlined" fullWidth />
          : Object.keys(formDataValueType[1].element)
            .map(
              (id) => (
                <p>
                  {formDataValueType[1].element[id as keyof string]}
                  <Checkbox />
                </p>
              ),
            )
      }
    </>
  );
};

export default FormElement;
