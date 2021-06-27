import React, { SetStateAction } from "react";
import {
  FormDefineType,
  FormSaveType,
  mergeFormType,
  PostGroupFormSubmitRequest,
} from "../../../../api/dataType";
import FormElementString from "./FormElementString";
import FormElementCheck from "./FormElementCheck";

export type FormElementProps = {
  type: FormDefineType;
  value?: FormSaveType;
  itemId?: string;
  editedForm?: PostGroupFormSubmitRequest;
  setEditedForm: React.Dispatch<
    SetStateAction<PostGroupFormSubmitRequest | undefined>
  >;
};

const FormElement = (props: FormElementProps): JSX.Element => {
  const { type, value, itemId, editedForm, setEditedForm } = props;
  const data = value ? mergeFormType(type, value) : [];
  switch (data[0]) {
    case "string":
      // eslint-disable-next-line react/jsx-props-no-spreading
      return (
        <FormElementString
          itemId={itemId}
          editedForm={editedForm}
          setEditedForm={setEditedForm}
          {...data[1]} // eslint-disable-line react/jsx-props-no-spreading
        />
      );
    case "check":
      return (
        <FormElementCheck
          itemId={itemId}
          editedForm={editedForm}
          setEditedForm={setEditedForm}
          {...data[1]} // eslint-disable-line react/jsx-props-no-spreading
        />
      );
    default:
      return <>Error</>;
  }
};

export default FormElement;
