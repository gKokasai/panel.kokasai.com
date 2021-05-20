import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Checkbox from '../../atoms/Checkbox';
import Typography from '../../atoms/Typography';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import { useAuth } from '../../../contexts/AuthContext';
import { getGroupForm } from '../../../api/api';
import ListLoading from '../../molecules/ListLoading';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';

const GroupNameFormName = (): JSX.Element => {
  const auth = useAuth();
  const params: {groupName: string, formName: string} = useParams();
  useEffect(
    () => {
      if (!auth.user?.form && !auth.user?.form) {
        getGroupForm(params.groupName, params.formName).then((response) => {
          auth.setUser({
            ...auth.user,
            form: {
              ...auth.user?.form,
              [params.formName]: response.data,
            },
          });
        });
      }
    }, [], // eslint-disable-line react-hooks/exhaustive-deps
  );
  return (
    <ControlPanelTemplate page={Pages.groupNameFormName}>
      <Typography variant="h5">
        {auth.user?.formList && auth.user.formList[params.formName].name}
      </Typography>
      {(
        () => {
          if (!auth.user?.form || !auth.user?.form[params.formName]) {
            return <ListLoading />;
          }
          const formData = auth.user?.form[params.formName];
          return (
            <>
              <p>
                <Typography variant="subtitle1">{formData?.description}</Typography>
              </p>
              <p>
                <Typography variant="caption">
                  最終期限
                  {formData?.limit}
                </Typography>
              </p>
              <p>
                <Typography variant="caption">
                  最終更新日時
                  {formData?.update}
                </Typography>
              </p>
              {Object.keys(formData.values).map(
                (name) => {
                  const formDataValue = formData?.values[name];
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
              <Typography variant="body1">{formData.comment}</Typography>
              <Button variant="contained" color="secondary">
                元に戻す
              </Button>
              <Button variant="contained" color="primary">
                保存する
              </Button>
            </>
          );
        })()}

    </ControlPanelTemplate>
  );
};

export default GroupNameFormName;
