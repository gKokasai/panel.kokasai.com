import React from 'react';
import { useParams } from 'react-router-dom';
import Checkbox from '../../atoms/Checkbox';
import Typography from '../../atoms/Typography';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import { useAuth } from '../../../contexts/AuthContext';
import { getGroupForm } from '../../../api/api';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import LoadableItem from '../../molecules/LoadableItem';
import { GetGroupFormResponse } from '../../../api/dataType';
import LinearLoading from '../../molecules/LinearLoading';

const GroupNameFormName = (): JSX.Element => {
  const auth = useAuth();
  const params: {groupName: string, formName: string} = useParams();
  return (
    <ControlPanelTemplate page={Pages.groupNameFormName}>
      <Typography variant="h5">
        {auth.user?.formList && auth.user.formList[params.formName].name}
      </Typography>
      <LoadableItem<GetGroupFormResponse>
        item={auth.user?.form?.[params.formName]}
        load={() => {
          getGroupForm(params.groupName, params.formName).then((response) => {
            auth.setUser({
              ...auth.user,
              form: {
                ...auth.user?.form,
                [params.formName]: response.data,
              },
            });
          });
        }}
        LoadComponent={<LinearLoading />}
        onComplete={(item) => (
          <>
            <p>
              <Typography variant="subtitle1">{item.description}</Typography>
            </p>
            <p>
              <Typography variant="caption">
                最終期限
                {item.limit}
              </Typography>
            </p>
            <p>
              <Typography variant="caption">
                最終更新日時
                {item.update}
              </Typography>
            </p>
            {Object.keys(item.values).map(
              (name) => {
                const formDataValue = item.values[name];
                const formDataValueType = formDataValue.type;
                return (
                  <>
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
                  </>
                );
              },
            )}
            <Typography variant="h6">コメント</Typography>
            <Typography variant="body1">{item.comment}</Typography>
            <Button variant="contained" color="secondary">
              元に戻す
            </Button>
            <Button variant="contained" color="primary">
              保存する
            </Button>
          </>
        )}
      />
    </ControlPanelTemplate>
  );
};

export default GroupNameFormName;
