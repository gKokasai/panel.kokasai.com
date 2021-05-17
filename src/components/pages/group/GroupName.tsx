import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ListItem } from '@material-ui/core';

import { FormatAlignRight, Person } from '@material-ui/icons';
import List from '../../molecules/List';
import { Pages } from '../../../pages';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import ListItemIcon from '../../molecules/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../../organisms/common/List.style';

const GroupName = (): JSX.Element => {
  const params: {groupName: string} = useParams();
  const classes = ListStyle();
  return (
    <ControlPanelTemplate page={Pages.groupName}>
      <List className={classes.list}>
        <Link to={Pages.groupNameForm.href(params.groupName)}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <FormatAlignRight />
            </ListItemIcon>
            <ListItemText>
              form
            </ListItemText>
          </ListItem>
        </Link>
        <Link to={Pages.groupNameMember.href(params.groupName)}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>
              member
            </ListItemText>
          </ListItem>
        </Link>
      </List>
    </ControlPanelTemplate>
  );
};

export default GroupName;
