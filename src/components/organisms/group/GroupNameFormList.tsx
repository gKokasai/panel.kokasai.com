import React, { FC } from 'react';
import { ListItem } from '@material-ui/core';
import { FormatAlignRight } from '@material-ui/icons';
import LoadableItems from '../../molecules/LoadableItems';
import { FormListType } from '../../../contexts/User';
import InternalLink from '../../molecules/InternalLink';
import { Pages } from '../../../pages';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import WithHeaderList from '../../molecules/WithHeaderList';
import ListStyle from '../common/List.style';

export type GroupNameFormListProps = {
  items?: FormListType,
  load: () => void,
  groupName: string,
};

const GroupNameFormList: FC<GroupNameFormListProps> = (props) => {
  const { items, load, groupName } = props;
  const classes = ListStyle();
  return (
    <WithHeaderList
      title="フォーム一覧"
      listClassName={classes.list}
    >
      <LoadableItems<FormListType>
        items={items}
        load={load}
        onComplete={(_items) => {
          const keys = Object.keys(_items);
          return (
            keys.map(
              (formName) => (
                <InternalLink to={Pages.groupNameFormName.href(groupName, formName)}>
                  <ListItem>
                    <ListItemIcon>
                      <FormatAlignRight />
                    </ListItemIcon>
                    <ListItemText>
                      {_items[formName].name}
                    </ListItemText>
                  </ListItem>
                </InternalLink>
              ),
            )
          );
        }}
      />
    </WithHeaderList>
  );
};

export default GroupNameFormList;
