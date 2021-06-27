import React, { SetStateAction, useState } from "react";
import { ClassNameMap } from "@material-ui/styles";
import WithCaptionItem from "../../WithCaptionItem";
import Typography from "../../../atoms/Typography";
import FormElement from "./FormElement";
import Button from "../../../atoms/Button";
import {
  FormDefineType,
  FormSaveType,
  GetGroupFormResponse,
  PostGroupFormSubmitRequest,
} from "../../../../api/dataType";

export type FormContentProps = {
  item: GetGroupFormResponse;
  editedForm?: PostGroupFormSubmitRequest | undefined;
  setEditedForm: React.Dispatch<
    SetStateAction<PostGroupFormSubmitRequest | undefined>
  >;
  onClickSubmitButton: () => void;
  classes: ClassNameMap;
  isEnableButton: boolean;
};

// eslint-disable-next-line consistent-return
const defaultFormSaveType = (define: FormDefineType): FormSaveType => {
  // eslint-disable-next-line default-case
  switch (define[0]) {
    case "string":
      return ["string", { content: "" }];
    case "check":
      return ["check", { select: [] }];
  }
};

const FormContent = (props: FormContentProps): JSX.Element => {
  const {
    item,
    editedForm,
    setEditedForm,
    onClickSubmitButton,
    classes,
    isEnableButton,
  } = props;
  const formValue = item.values;
  const initialValue: PostGroupFormSubmitRequest = {
    values: Object.keys(formValue).reduce((map, key) => {
      // eslint-disable-next-line no-param-reassign
      map[Number(key)] =
        formValue[key].value?.value || defaultFormSaveType(formValue[key].type);
      return map;
    }, {} as { [id: number]: FormSaveType }),
  };
  if (!editedForm) {
    setEditedForm(initialValue);
  }

  return (
    <div className={classes.form}>
      <div className={classes.formHeader}>
        <WithCaptionItem captionVariant="h5" caption={item.description}>
          <div className={classes.paddingTop1}>
            <WithCaptionItem caption="最終期限">
              <Typography variant="body1">{item.limit}</Typography>
            </WithCaptionItem>
          </div>
          <div className={classes.paddingTop1}>
            <WithCaptionItem caption="最終更新日時">
              <Typography variant="body1">{item.update}</Typography>
            </WithCaptionItem>
          </div>
        </WithCaptionItem>
      </div>
      {Object.keys(item.values).map((name) => {
        const formDataValue = item.values[name];
        const formDataValueType = formDataValue.type;
        const formDataValueValue = formDataValue.value;
        return (
          <div key={name} className={classes.formElement}>
            <WithCaptionItem captionVariant="h6" caption={formDataValue.name}>
              <div className={classes.paddingTop1}>
                <WithCaptionItem caption="説明">
                  <Typography variant="body1">
                    {formDataValue.description}
                  </Typography>
                </WithCaptionItem>
              </div>
              <div className={classes.paddingTop1}>
                <WithCaptionItem caption="内容">
                  <FormElement
                    type={formDataValueType}
                    value={formDataValueValue?.value}
                    itemId={name}
                    editedForm={editedForm}
                    setEditedForm={setEditedForm}
                  />
                </WithCaptionItem>
              </div>
              <div className={classes.paddingTop1}>
                <WithCaptionItem caption="コメント">
                  <Typography variant="body1">
                    {formDataValueValue?.comment}
                  </Typography>
                </WithCaptionItem>
              </div>
            </WithCaptionItem>
          </div>
        );
      })}
      <div>
        <Typography variant="h6">コメント</Typography>
        <Typography variant="body1">{item.comment}</Typography>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onClickSubmitButton}
          disabled={!isEnableButton}
        >
          保存する
        </Button>
      </div>
    </div>
  );
};

export default FormContent;
