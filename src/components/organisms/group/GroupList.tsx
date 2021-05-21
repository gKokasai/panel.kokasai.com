import React, { FC } from 'react';
import { ListItem } from '@material-ui/core';
import { PeopleOutline } from '@material-ui/icons';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ListStyle from '../common/List.style';
import { Pages } from '../../../pages';
import InternalLink from '../../molecules/InternalLink';
import LoadableItem from '../../molecules/LoadableItem';
import WithHeaderList from '../../molecules/WithHeaderList';

export type GroupListProps = {
  item?: string[],
  load: () => void,
  LoadComponent: JSX.Element,
}

const GroupList: FC<GroupListProps> = (props): JSX.Element => {
  const { item, load, LoadComponent } = props;
  const classes = ListStyle();
  return (
    <WithHeaderList
      title="グループ一覧"
      listClassName={classes.list}
    >
      <LoadableItem<string[]>
        item={item}
        load={load}
        LoadComponent={LoadComponent}
        onComplete={(_item) => (
          _item.map(
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
