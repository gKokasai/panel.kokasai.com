import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { PeopleOutline } from '@material-ui/icons';
import { useAuth } from '../../../contexts/AuthContext';
import Typography from '../../atoms/Typography';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import List from '../../molecules/List';
import ListStyle from '../common/List.style';
import { Pages } from '../../../pages';

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
          (name) => (
            <Link to={Pages.groupName.href(name)}>
              <ListItem className={classes.listItem} key={name}>
                <ListItemIcon>
                  <PeopleOutline />
                </ListItemIcon>
                <ListItemText>
                  {name}
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
