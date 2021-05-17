import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { FormatAlignRight } from '@material-ui/icons';
import Typography from '../../atoms/Typography';
import List from '../../molecules/List';
import { useAuth } from '../../../contexts/AuthContext';
import ListStyle from '../../organisms/common/List.style';
import { Pages } from '../../../pages';
import ListItemIcon from '../../molecules/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { getGroupFormList } from '../../../api/api';

const GroupNameForm = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  const params: { groupName: string } = useParams();
  useEffect(() => {
    if (!auth.user?.formList) {
      getGroupFormList(params.groupName).then((result) => auth.setUser({ ...auth.user, formList: result.data.form }));
    }
  }, [auth, params.groupName]);
  return (
    <ControlPanelTemplate page={Pages.groupNameForm}>
      <List className={classes.list}>
        <Typography variant="h6">
          フォーム一覧
        </Typography>
        { (() => {
          if (!auth.user?.formList || (Object.keys(auth.user.formList).length === 0)) {
            return <>Loading</>;
          }
          const formList = auth.user?.formList;
          const keys = Object.keys(formList);
          return (
            keys.map(
              (formName) => (
                <Link to={`/group/${params.groupName}/form/${formName}`}>
                  <ListItem>
                    <ListItemIcon>
                      <FormatAlignRight />
                    </ListItemIcon>
                    <ListItemText>
                      {formList[formName].name}
                    </ListItemText>
                  </ListItem>
                </Link>
              ),
            )
          );
        })()}
      </List>
    </ControlPanelTemplate>
  );
};

export default GroupNameForm;
