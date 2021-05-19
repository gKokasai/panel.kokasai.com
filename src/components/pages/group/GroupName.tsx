import React from 'react';
import { useParams } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { FormatAlignRight, Person } from '@material-ui/icons';
import List from '../../molecules/List';
import { Pages } from '../../../pages';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import ListItemIcon from '../../molecules/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../../organisms/common/List.style';
import Typography from '../../atoms/Typography';
import InternalLink from '../../molecules/InternalLink';

const GroupName = (): JSX.Element => {
  const params: {groupName: string} = useParams();
  const classes = ListStyle();
  return (
    <ControlPanelTemplate page={Pages.groupName}>
      <List className={classes.list}>
        <Typography variant="h6">
          項目一覧
        </Typography>
        <InternalLink to={Pages.groupNameForm.href(params.groupName)}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <FormatAlignRight />
            </ListItemIcon>
            <ListItemText>
              form
            </ListItemText>
          </ListItem>
        </InternalLink>
        <InternalLink to={Pages.groupNameMember.href(params.groupName)}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>
              member
            </ListItemText>
          </ListItem>
        </InternalLink>
      </List>
    </ControlPanelTemplate>
  );
};

export default GroupName;
