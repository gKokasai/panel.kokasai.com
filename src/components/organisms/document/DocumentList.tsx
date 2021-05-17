import React from 'react';
import { ListItem } from '@material-ui/core';
import { Description } from '@material-ui/icons';
import { saveAs } from 'file-saver';
import { useAuth } from '../../../contexts/AuthContext';
import List from '../../molecules/List';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../common/List.style';
import Typography from '../../atoms/Typography';
import * as api from '../../../api/api';
import Link from '../../atoms/Link';

const saveDocumentFile = (name: string) => {
  api.getDocument(name).then((response) => {
    const blob = new Blob([response.data], { type: response.data.type });
    saveAs(blob, name);
  });
};

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
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link onClick={() => saveDocumentFile(name)} key={name}>
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <Description />
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
export default DocumentList;
