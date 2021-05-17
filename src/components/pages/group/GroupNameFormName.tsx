import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '../../atoms/Typography';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import { useAuth } from '../../../contexts/AuthContext';
import { getGroupForm } from '../../../api/api';

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
    },
    [auth, params.formName, params.groupName],
  );
  return (
    <ControlPanelTemplate page={Pages.groupNameFormName}>
      {(
        () => {
          if (!auth.user?.form || Object.keys(auth.user?.form)) {
            return <>Loading</>;
          }
          const form = auth.user?.form[params.formName];
          const keys = Object.keys(form);
          return (
            <>
              <Typography variant="h6">{form?.name}</Typography>
              <Typography variant="subtitle1">{form?.description}</Typography>
              <Typography variant="caption">
                最終期限
                {form?.limit}
              </Typography>
              <br />
              <Typography variant="caption">
                最終更新日時
                {form?.update}
                <br />
              </Typography>
              {keys.map(
                (elem) => (
                  <>
                    {/* {form?.values[elem]?.name} */}
                    {/* {form?.values[elem]?.description} */}
                    <br />
                  </>
                ),
              )}
            </>
          );
        })()}

    </ControlPanelTemplate>
  );
};

export default GroupNameFormName;
