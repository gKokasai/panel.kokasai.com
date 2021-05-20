import React from 'react';
import { useParams } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { FormatAlignRight } from '@material-ui/icons';
import { useAuth } from '../../../contexts/AuthContext';
import ListStyle from '../../organisms/common/List.style';
import { Pages } from '../../../pages';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { getGroupFormList } from '../../../api/api';
import InternalLink from '../../molecules/InternalLink';
import LoadableItems from '../../organisms/common/LoadableItems';
import { FormListType } from '../../../contexts/User';
import WithHeaderList from '../../organisms/common/WithHeaderList';

const GroupNameForm = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  const params: { groupName: string } = useParams();
  return (
    <ControlPanelTemplate page={Pages.groupNameForm}>
      <WithHeaderList
        title="フォーム一覧"
        listClassName={classes.list}
      >
        <LoadableItems<FormListType>
          items={auth.user?.formList}
          load={() => {
            getGroupFormList(params.groupName).then((result) => auth.setUser({ ...auth.user, formList: result.data.form }));
          }}
          onComplete={(items) => {
            const keys = Object.keys(items);
            return (
              keys.map(
                (formName) => (
                  <InternalLink to={Pages.groupNameFormName.href(params.groupName, formName)}>
                    <ListItem>
                      <ListItemIcon>
                        <FormatAlignRight />
                      </ListItemIcon>
                      <ListItemText>
                        {items[formName].name}
                      </ListItemText>
                    </ListItem>
                  </InternalLink>
                ),
              )
            );
          }}
        />
      </WithHeaderList>
    </ControlPanelTemplate>
  );
};

export default GroupNameForm;
