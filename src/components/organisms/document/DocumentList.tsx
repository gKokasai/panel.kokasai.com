import React, { FC } from 'react';
import { ListItem } from '@material-ui/core';
import { Description } from '@material-ui/icons';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../common/List.style';
import { Pages } from '../../../pages';
import InternalLink from '../../molecules/InternalLink';
import LoadableItems from '../common/LoadableItems';
import WithHeaderList from '../common/WithHeaderList';

export type DocumentListProps = {
  items?: string[],
  load: () => void,
};

const DocumentList: FC<DocumentListProps> = (props): JSX.Element => {
  const { items, load } = props;
  const classes = ListStyle();
  return (
    <WithHeaderList
      title="資料一覧"
      listClassName={classes.list}
    >
      <LoadableItems<string[]>
        items={items}
        load={load}
        onComplete={(_items) => (
          _items.map(
            (name) => (
              <InternalLink to={`${Pages.documentName.href}?${name}`} key={name}>
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
