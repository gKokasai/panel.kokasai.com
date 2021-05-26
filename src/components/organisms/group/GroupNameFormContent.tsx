import React, { FC } from 'react';
import WithHeaderList from '../../molecules/WithHeaderList';
import { GetGroupFormResponse } from '../../../api/dataType';
import LoadableItem from '../../molecules/LoadableItem';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import FormElement from '../../molecules/group/form/FormElement';

export type Props = {
  formName?: string;
  item?: GetGroupFormResponse;
  load: () => void;
  LoadComponent: JSX.Element;
}
const GroupNameFormContent: FC<Props> = (props): JSX.Element => {
  const {
    formName, load, item, LoadComponent,
  } = props;
  return (
    <WithHeaderList title={formName}>
      <LoadableItem<GetGroupFormResponse>
        item={item}
        load={load}
        LoadComponent={LoadComponent}
        onComplete={(_item) => (
          <>
            <p>
              <Typography variant="subtitle1">{_item.description}</Typography>
            </p>
            <p>
              <Typography variant="caption">
                最終期限
                {_item.limit}
              </Typography>
            </p>
            <p>
              <Typography variant="caption">
                最終更新日時
                {_item.update}
              </Typography>
            </p>
            {Object.keys(_item.values).map(
              (name) => {
                const formDataValue = _item.values[name];
                const formDataValueType = formDataValue.type;
                return (
                  <div key={name}>
                    <p>
                      <Typography>{formDataValue.name}</Typography>
                    </p>
                    <p>
                      <Typography>{formDataValue.description}</Typography>
                    </p>
                    <FormElement type={formDataValueType} />
                  </div>
                );
              },
            )}
            <Typography variant="h6">コメント</Typography>
            <Typography variant="body1">{_item.comment}</Typography>
            <Button variant="contained" color="secondary">
              元に戻す
            </Button>
            <Button variant="contained" color="primary">
              保存する
            </Button>
          </>
        )}
      />
    </WithHeaderList>
  );
};

export default GroupNameFormContent;
