import React, { ChangeEvent, FC } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import { GetGroupFormResponse } from "../../../api/dataType";
import LoadableItem from "../../molecules/LoadableItem";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import FormElement from "../../molecules/group/form/FormElement";
import WithCaptionItem from "../../molecules/WithCaptionItem";

const GroupNameFormContentStyle = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      margin: "0 auto",
      "@media(min-width: 820px)": {
        width: 800,
      },
    },
    formHeader: {
      paddingBottom: `${theme.spacing(2)}px`,
    },
    formElement: {
      padding: `${theme.spacing(1)}px`,
    },
    paddingTop1: {
      paddingTop: `${theme.spacing(1)}px`,
    },
  })
);

export type GroupNameFormContentProps = {
  formName?: string;
  item?: GetGroupFormResponse;
  load: () => void;
  LoadComponent: JSX.Element;
  onChangeString: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
};

const GroupNameFormContent: FC<GroupNameFormContentProps> = (
  props
): JSX.Element => {
  const {
    formName,
    load,
    item,
    LoadComponent,
    onChangeString,
    onChangeCheckbox,
  } = props;
  const classes = GroupNameFormContentStyle();
  return (
    <div>
      <Typography variant="h6">{formName}</Typography>
      <LoadableItem<GetGroupFormResponse>
        item={item}
        load={load}
        LoadComponent={LoadComponent}
        onComplete={(_item) => (
          <div className={classes.form}>
            <div className={classes.formHeader}>
              <WithCaptionItem captionVariant="h5" caption={_item.description}>
                <div className={classes.paddingTop1}>
                  <WithCaptionItem caption="最終期限">
                    <Typography variant="body1">{_item.limit}</Typography>
                  </WithCaptionItem>
                </div>
                <div className={classes.paddingTop1}>
                  <WithCaptionItem caption="最終更新日時">
                    <Typography variant="body1">{_item.update}</Typography>
                  </WithCaptionItem>
                </div>
              </WithCaptionItem>
            </div>
            {Object.keys(_item.values).map((name) => {
              const formDataValue = _item.values[name];
              const formDataValueType = formDataValue.type;
              const formDataValueValue = formDataValue.value;
              return (
                <div key={name} className={classes.formElement}>
                  <WithCaptionItem
                    captionVariant="h6"
                    caption={formDataValue.name}
                  >
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
                          onChangeString={onChangeString}
                          onChangeCheckbox={onChangeCheckbox}
                          itemId={name}
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
              <Typography variant="body1">{_item.comment}</Typography>
            </div>
            <div>
              <Button variant="contained" color="secondary">
                元に戻す
              </Button>
              <Button variant="contained" color="primary">
                保存する
              </Button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default GroupNameFormContent;
