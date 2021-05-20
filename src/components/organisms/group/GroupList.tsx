import React, { FC } from 'react';
import { ListItem } from '@material-ui/core';
import { PeopleOutline } from '@material-ui/icons';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../common/List.style';
import { Pages } from '../../../pages';
import InternalLink from '../../molecules/InternalLink';
import LoadableItems from '../common/LoadableItems';
import WithHeaderList from '../common/WithHeaderList';

export type GroupListProps = {
  items?: string[],
  load: () => void,
}

const GroupList: FC<GroupListProps> = (props): JSX.Element => {
  const { items, load } = props;
  const classes = ListStyle();
  return (
    <WithHeaderList
      title="グループ一覧"
      listClassName={classes.list}
    >
      <LoadableItems<string[]>
        items={items}
        load={load}
        onComplete={(_items) => (
          _items.map(
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
    </WithHeaderList>
  );
};

export default GroupList;
