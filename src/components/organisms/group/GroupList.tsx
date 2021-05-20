import React from 'react';
import { ListItem } from '@material-ui/core';
import { PeopleOutline } from '@material-ui/icons';
import { useAuth } from '../../../contexts/AuthContext';
import Typography from '../../atoms/Typography';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import List from '../../atoms/List';
import ListStyle from '../common/List.style';
import { Pages } from '../../../pages';
import InternalLink from '../../molecules/InternalLink';
import LoadableItems from '../common/LoadableItems';
import { getUserGroupList } from '../../../api/api';

const GroupList = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  return (
    <List className={classes.list}>
      <Typography variant="h6">
        グループ一覧
      </Typography>
      <LoadableItems<string[]>
        items={auth.user?.groupList}
        load={() => {
          getUserGroupList().then((response) => auth.setUser({ ...auth.user, groupList: response.data.group }));
        }}
        onComplete={(items) => (
          items.map(
            (name) => (
              <InternalLink to={Pages.groupName.href(name)}>
                <ListItem className={classes.listItem} key={name}>
                  <ListItemIcon>
                    <PeopleOutline />
                  </ListItemIcon>
                  <ListItemText>
                    {name}
                  </ListItemText>
                </ListItem>
              </InternalLink>
            ),
          )
        )}
      />
    </List>
  );
};

export default GroupList;
