import React, { useEffect } from 'react';
import LinearLoading from './LinearLoading';

export type LoadableItemsProps<T> = {
  items?: T,
  load: () => void,
  onComplete: (items: T) => JSX.Element | JSX.Element[],
};

const LoadableItems = <T extends unknown>(props: LoadableItemsProps<T>): JSX.Element => {
  const { items, load, onComplete } = props;
  useEffect(() => {
    if (items === undefined) {
      load();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (items === undefined) {
    return <LinearLoading />;
  }
  return <>{onComplete(items)}</>;
};

export default LoadableItems;
