import React, { FC } from 'react';
import WithHeaderList from '../../molecules/WithHeaderList';
import { GetGroupFormResponse } from '../../../api/dataType';
import LoadableItem from '../../molecules/LoadableItem';
import Typography from '../../atoms/Typography';
import TextField from '../../atoms/TextField';
import Checkbox from '../../atoms/Checkbox';
import Button from '../../atoms/Button';

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
                    {
                      (() => {
                        if (formDataValueType[0] === 'string') {
                          return <TextField variant="outlined" fullWidth />;
                        }
                        return (
                          Object.keys(formDataValueType[1].element).map(
                            (id) => (
                              <p>
                                {formDataValueType[1].element[id as keyof string]}
                                <Checkbox />
                              </p>
                            ),
                          )
                        );
                      })()
                    }
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
