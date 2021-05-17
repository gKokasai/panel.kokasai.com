import React, { FC } from 'react';
import LinearProgress from '../../atoms/LinerProgress';
import Typography from '../../atoms/Typography';
import ListStyle from './List.style';

const ListLoading: FC = (): JSX.Element => {
  const classes = ListStyle();
  return (
    <div className={classes.loading}>
      <LinearProgress />
      <Typography variant="caption">
        ロード中です
      </Typography>
    </div>
  );
};

export default ListLoading;
