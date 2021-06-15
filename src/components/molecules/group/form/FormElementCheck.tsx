import React, { ChangeEvent } from "react";
import Checkbox from "../../../atoms/Checkbox";
import {
  FormDefineTypeCheck,
  FormSaveTypeCheck,
} from "../../../../api/dataType";

export type FormElementCheckProps = FormDefineTypeCheck &
  FormSaveTypeCheck & {
    onChangeCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
    itemId?: string;
  };

export type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  "data-itemId": string;
  "data-checkBoxId": string;
};

const FormElementCheck = (props: FormElementCheckProps): JSX.Element => {
  const { element, select, onChangeCheckbox, itemId } = props;
  return (
    <>
      {Object.keys(element).map((id) => (
        <div key={id} onChange={onChangeCheckbox}>
          {element[id]}
          <Checkbox
            defaultChecked={id in select}
            inputProps={
              {
                "data-itemId": itemId,
                "data-checkBoxId": id,
              } as InputProps
            }
          />
        </div>
      ))}
    </>
  );
};

export default FormElementCheck;
