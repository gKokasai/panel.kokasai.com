import React from 'react';
import { ListItem } from '@material-ui/core';
import { PeopleOutline } from '@material-ui/icons';
import { useAuth } from '../../../contexts/AuthContext';
import Typography from '../../atoms/Typography';
import Link from '../../atoms/Link';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import List from '../../molecules/List';
import ListStyle from '../common/List.style';

const GroupList = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  return (
    <List className={classes.list}>
      <Typography variant="h6">
        グループ一覧
      </Typography>
      {
        auth.user?.groupList?.map(
          (elem) => (
            <Link href="https://kokasai.com">
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <PeopleOutline />
                </ListItemIcon>
                <ListItemText>
                  {elem}
                </ListItemText>
              </ListItem>
            </Link>
          ),
        )
      }
    </List>
  );
};

export default GroupList;
