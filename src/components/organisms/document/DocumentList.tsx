import React from 'react';
import { ListItem } from '@material-ui/core';
import { Description } from '@material-ui/icons';
import { useAuth } from '../../../contexts/AuthContext';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../common/List.style';
import { Pages } from '../../../pages';
import InternalLink from '../../molecules/InternalLink';
import LoadableItems from '../common/LoadableItems';
import { getUserDocumentList } from '../../../api/api';
import WithHeaderList from '../common/WithHeaderList';

const DocumentList = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  return (
    <WithHeaderList
      title="資料一覧"
      listClassName={classes.list}
    >
      <LoadableItems<string[]>
        items={auth.user?.documentList}
        load={() => {
          getUserDocumentList().then((response) => auth.setUser({ ...auth.user, documentList: response.data.document }));
        }}
        onComplete={(items) => (
          items.map(
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
        )}
      />
    </WithHeaderList>
  );
};

export default DocumentList;
