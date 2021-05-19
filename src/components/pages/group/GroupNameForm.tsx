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
import ListLoading from '../../organisms/common/ListLoading';
import MLink from '../../atoms/Link';

const GroupNameForm = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  const params: { groupName: string } = useParams();
  useEffect(() => {
    if (!auth.user?.formList) {
      getGroupFormList(params.groupName).then((result) => auth.setUser({ ...auth.user, formList: result.data.form }));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <ControlPanelTemplate page={Pages.groupNameForm}>
      <List className={classes.list}>
        <Typography variant="h6">
          フォーム一覧
        </Typography>
        { (() => {
          if (!auth.user?.formList || (Object.keys(auth.user.formList).length === 0)) {
            return <ListLoading />;
          }
          const formList = auth.user?.formList;
          const keys = Object.keys(formList);
          return (
            keys.map(
              (formName) => (
                <Link to={Pages.groupNameFormName.href(params.groupName, formName)}>
                  <MLink>
                    <ListItem>
                      <ListItemIcon>
                        <FormatAlignRight />
                      </ListItemIcon>
                      <ListItemText>
                        {formList[formName].name}
                      </ListItemText>
                    </ListItem>
                  </MLink>
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
