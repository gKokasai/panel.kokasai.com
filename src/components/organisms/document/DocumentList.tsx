import React, { FC } from 'react';
import { ListItem } from '@material-ui/core';
import { Description } from '@material-ui/icons';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../common/List.style';
import { Pages } from '../../../pages';
import InternalLink from '../../molecules/InternalLink';
import LoadableItem from '../../molecules/LoadableItem';
import WithHeaderList from '../../molecules/WithHeaderList';

export type DocumentListProps = {
  item?: string[],
  load: () => void,
  LoadComponent: JSX.Element,
};

const DocumentList: FC<DocumentListProps> = (props): JSX.Element => {
  const { item, load, LoadComponent } = props;
  const classes = ListStyle();
  return (
    <WithHeaderList
      title="資料一覧"
      listClassName={classes.list}
    >
      <LoadableItem<string[]>
        item={item}
        load={load}
        LoadComponent={LoadComponent}
        onComplete={(_item) => (
          _item.map(
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
