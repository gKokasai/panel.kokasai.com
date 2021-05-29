import { createStyles, makeStyles, Theme } from "@material-ui/core";

const ListStyle = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper,
    },
    listItem: {
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
);

export default ListStyle;
