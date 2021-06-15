import React, { ChangeEvent } from "react";
import {
  FormDefineType,
  FormSaveType,
  mergeFormType,
} from "../../../../api/dataType";
import FormElementString from "./FormElementString";
import FormElementCheck from "./FormElementCheck";

export type FormElementProps = {
  type: FormDefineType;
  value?: FormSaveType;
  itemId?: string;
  onChangeString: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormElement = (props: FormElementProps): JSX.Element => {
  const { type, value, onChangeCheckbox, onChangeString, itemId } = props;
  const data = value ? mergeFormType(type, value) : [];
  switch (data[0]) {
    case "string":
      // eslint-disable-next-line react/jsx-props-no-spreading
      return (
        <FormElementString
          onChangeString={onChangeString}
          itemId={itemId}
          {...data[1]}
        />
      );
    case "check":
      // eslint-disable-next-line react/jsx-props-no-spreading
      return (
        <FormElementCheck
          onChangeCheckbox={onChangeCheckbox}
          itemId={itemId}
          {...data[1]}
        />
      );
    default:
      return <>Error</>;
  }
};

export default FormElement;
