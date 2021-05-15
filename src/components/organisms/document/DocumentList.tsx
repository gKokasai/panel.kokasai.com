import React from 'react';
import { ListItem } from '@material-ui/core';
import { Description } from '@material-ui/icons';
import { useAuth } from '../../../contexts/AuthContext';
import List from '../../molecules/List';
import Link from '../../atoms/Link';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../common/List.style';
import Typography from '../../atoms/Typography';

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
          (elem) => (
            <Link href={`https://api.kokasai.com/document/${elem}`}>
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <Description />
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
export default DocumentList;
