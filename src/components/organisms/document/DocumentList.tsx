import React from 'react';
import { ListItem } from '@material-ui/core';
import { Description } from '@material-ui/icons';
import { useAuth } from '../../../contexts/AuthContext';
import List from '../../molecules/List';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../common/List.style';
import Typography from '../../atoms/Typography';
import { Pages } from '../../../pages';
import InternalLink from '../../molecules/InternalLink';

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
            <InternalLink to={`${Pages.document.href}?${name}`} key={name}>
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <Description />
                </ListItemIcon>
                <ListItemText>
                  {name}
                </ListItemText>
              </ListItem>
            </InternalLink>
          ),
        )
      }
    </List>
  );
};
export default DocumentList;
