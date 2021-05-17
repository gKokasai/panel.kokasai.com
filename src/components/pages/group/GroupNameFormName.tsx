import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '../../atoms/Typography';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import { useAuth } from '../../../contexts/AuthContext';
import { getGroupForm } from '../../../api/api';
import ListLoading from '../../organisms/common/ListLoading';

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
      <Typography variant="h6">
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
              <Typography variant="subtitle1">{formData?.description}</Typography>
              <Typography variant="caption">
                最終期限
                {formData?.limit}
              </Typography>
              <br />
              <Typography variant="caption">
                最終更新日時
                {formData?.update}
                <br />
              </Typography>
              {Object.keys(formData.values).map(
                (id) => (
                  <>
                    {formData?.values[id]?.name}
                    {formData?.values[id]?.description}
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
