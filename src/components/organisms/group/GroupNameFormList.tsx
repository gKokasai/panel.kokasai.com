import React, { FC } from "react";
import { ListItem } from "@material-ui/core";
import { FormatAlignRight } from "@material-ui/icons";
import LoadableItem from "../../molecules/LoadableItem";
import InternalLink from "../../molecules/InternalLink";
import { Pages } from "../../../pages";
import ListItemIcon from "../../atoms/ListItemIcon";
import ListItemText from "../../atoms/ListItemText";
import WithHeaderList from "../../molecules/WithHeaderList";
import ListStyle from "../common/List.style";
import { FormList } from "../../../api/dataType";

export type GroupNameFormListProps = {
  item?: FormList;
  load: () => void;
  groupName: string;
  LoadComponent: JSX.Element;
};

const GroupNameFormList: FC<GroupNameFormListProps> = (props) => {
  const { item, load, groupName, LoadComponent } = props;
  const classes = ListStyle();
  return (
    <WithHeaderList title="フォーム一覧" listClassName={classes.list}>
      <LoadableItem<FormList>
        item={item}
        load={load}
        LoadComponent={LoadComponent}
        onComplete={(_item) => {
          const keys = Object.keys(_item);
          return keys.map((formName) => (
            <InternalLink
              to={Pages.groupNameFormName.href(groupName, formName)}
            >
              <ListItem>
                <ListItemIcon>
                  <FormatAlignRight />
                </ListItemIcon>
                <ListItemText>{_item[formName].name}</ListItemText>
              </ListItem>
            </InternalLink>
          ));
        }}
      />
    </WithHeaderList>
  );
};

export default GroupNameFormList;
