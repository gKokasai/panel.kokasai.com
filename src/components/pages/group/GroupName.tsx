import React from 'react';
import { useParams } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { FormatAlignRight, Person } from '@material-ui/icons';
import { Pages } from '../../../pages';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../../organisms/common/List.style';
import InternalLink from '../../molecules/InternalLink';
import WithHeaderList from '../../organisms/common/WithHeaderList';

const GroupName = (): JSX.Element => {
  const params: {groupName: string} = useParams();
  const classes = ListStyle();
  return (
    <ControlPanelTemplate page={Pages.groupName}>
      <WithHeaderList
        title="項目一覧"
        listClassName={classes.list}
      >
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
      </WithHeaderList>
    </ControlPanelTemplate>
  );
};

export default GroupName;
