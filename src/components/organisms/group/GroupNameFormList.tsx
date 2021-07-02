import React, { FC } from "react";
import LoadableItem from "../../molecules/LoadableItem";
import WithHeaderList from "../../molecules/WithHeaderList";
import ListStyle from "../common/List.style";
import { FormList } from "../../../api/dataType";
import FormListItem from "../../molecules/form/FomListItem";

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
            <FormListItem
              groupName={groupName}
              formName={formName}
              formList={_item}
            />
          ));
        }}
      />
    </WithHeaderList>
  );
};

export default GroupNameFormList;
