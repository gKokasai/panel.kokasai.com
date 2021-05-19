import React from 'react';
import { ListItem } from '@material-ui/core';
import { Description } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import List from '../../molecules/List';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../common/List.style';
import Typography from '../../atoms/Typography';
import { Pages } from '../../../pages';
import MLink from '../../atoms/Link';

const DocumentList = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  return (
    <List className={classes.list}>
      <Typography variant="h6">
        資料一覧
      </Typography>
      {
        auth.user?.documentList?.map(
          (name) => (
            <Link to={`${Pages.document.href}?${name}`} key={name}>
              <MLink>
                <ListItem className={classes.listItem}>
                  <ListItemIcon>
                    <Description />
                  </ListItemIcon>
                  <ListItemText>
                    {name}
                  </ListItemText>
                </ListItem>
              </MLink>
            </Link>
          ),
        )
      }
    </List>
  );
};
export default DocumentList;
