import React, { FC } from 'react';
import { FormatAlignRight, Person } from '@material-ui/icons';
import { ListItem } from '@material-ui/core';
import InternalLink from '../../molecules/InternalLink';
import { Pages } from '../../../pages';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import WithHeaderList from '../../molecules/WithHeaderList';
import ListStyle from '../common/List.style';

export type GroupNameListProps = {
  groupName: string
}

const GroupNameList: FC<GroupNameListProps> = (props): JSX.Element => {
  const { groupName } = props;
  const classes = ListStyle();
  return (
    <WithHeaderList
      title="項目一覧"
      listClassName={classes.list}
    >
      <InternalLink to={Pages.groupNameForm.href(groupName)}>
        <ListItem className={classes.listItem}>
          <ListItemIcon>
            <FormatAlignRight />
          </ListItemIcon>
          <ListItemText>
            form
          </ListItemText>
        </ListItem>
      </InternalLink>
      <InternalLink to={Pages.groupNameMember.href(groupName)}>
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
  );
};

export default GroupNameList;
