import React from 'react';
import { useParams } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { FormatAlignRight } from '@material-ui/icons';
import Typography from '../../atoms/Typography';
import List from '../../atoms/List';
import { useAuth } from '../../../contexts/AuthContext';
import ListStyle from '../../organisms/common/List.style';
import { Pages } from '../../../pages';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { getGroupFormList } from '../../../api/api';
import InternalLink from '../../molecules/InternalLink';
import LoadableItems from '../../organisms/common/LoadableItems';
import { FormListType } from '../../../contexts/User';

const GroupNameForm = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  const params: { groupName: string } = useParams();
  return (
    <ControlPanelTemplate page={Pages.groupNameForm}>
      <List className={classes.list}>
        <Typography variant="h6">
          フォーム一覧
        </Typography>
        <LoadableItems<FormListType>
          items={auth.user?.formList}
          load={() => {
            getGroupFormList(params.groupName).then((result) => auth.setUser({ ...auth.user, formList: result.data.form }));
          }}
          onComplete={(items) => {
            const keys = Object.keys(items);
            return (
              keys.map(
                (formName) => (
                  <InternalLink to={Pages.groupNameFormName.href(params.groupName, formName)}>
                    <ListItem>
                      <ListItemIcon>
                        <FormatAlignRight />
                      </ListItemIcon>
                      <ListItemText>
                        {items[formName].name}
                      </ListItemText>
                    </ListItem>
                  </InternalLink>
                ),
              )
            );
          }}
        />
      </List>
    </ControlPanelTemplate>
  );
};

export default GroupNameForm;
