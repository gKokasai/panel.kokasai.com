import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import LinearProgress from "../atoms/LinerProgress";
import Typography from "../atoms/Typography";

export const LinearLoadingStyle = makeStyles(() =>
  createStyles({
    loading: {
      textAlign: "center",
    },
  })
);

const LinearLoading: FC = (): JSX.Element => {
  const classes = LinearLoadingStyle();
  return (
    <div className={classes.loading}>
      <LinearProgress />
      <Typography variant="caption">ロード中です</Typography>
    </div>
  );
};

export default LinearLoading;
