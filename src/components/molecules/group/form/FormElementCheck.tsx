import React, { ChangeEvent } from "react";
import Checkbox from "../../../atoms/Checkbox";
import {
  FormDefineTypeCheck,
  FormSaveTypeCheck,
  PostGroupFormSubmitRequest,
} from "../../../../api/dataType";

export type FormElementCheckProps = FormDefineTypeCheck &
  FormSaveTypeCheck & {
    itemId?: string;
    editedForm?: PostGroupFormSubmitRequest;
    setEditedForm: React.Dispatch<
      React.SetStateAction<PostGroupFormSubmitRequest | undefined>
    >;
  };

export type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  "data-itemId": string;
  "data-checkBoxId": string;
};

const FormElementCheck = (props: FormElementCheckProps): JSX.Element => {
  const { element, select, itemId, editedForm, setEditedForm } = props;

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const targetItemId: string | undefined = event.target.dataset.itemid;
    const targetCheckBoxId: string | undefined =
      event.target.dataset.checkboxid;
    if (!targetItemId || !targetCheckBoxId) return;
    const parsedTargetItemId: number = parseInt(targetItemId, 10);
    const parsedTargetCheckBoxId: number = parseInt(targetCheckBoxId, 10);
    const castedEditedForm = editedForm?.values[parsedTargetItemId] as [
      "check",
      FormSaveTypeCheck
    ];
    if (event.target.checked) {
      // チェックをした時の処理
      setEditedForm({
        values: {
          ...editedForm?.values,
          [parsedTargetItemId]: [
            "check",
            {
              select: castedEditedForm
                ? castedEditedForm[1].select.concat([parsedTargetCheckBoxId])
                : [parsedTargetCheckBoxId],
            },
          ],
        },
      });
    } else {
      // チェックを外した時の処理
      setEditedForm({
        values: {
          ...editedForm?.values,
          [parsedTargetItemId]: [
            "check",
            {
              select: castedEditedForm
                ? castedEditedForm[1].select.filter(
                    (id) => id !== parsedTargetCheckBoxId
                  )
                : [],
            },
          ],
        },
      });
    }
  };

  return (
    <>
      {Object.keys(element).map((id) => (
        <div key={id} onChange={onChangeCheckbox}>
          {element[id]}
          <Checkbox
            defaultChecked={select.includes(parseInt(id, 10))}
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
