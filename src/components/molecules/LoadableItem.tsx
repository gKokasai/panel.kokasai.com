import React, { useEffect } from 'react';

export type LoadableItemProps<T> = {
  item?: T,
  load: () => void,
  onComplete: (items: T) => JSX.Element | JSX.Element[],
  LoadComponent: JSX.Element,
};

const LoadableItem = <T extends unknown>(props: LoadableItemProps<T>): JSX.Element => {
  const {
    item, load, onComplete, LoadComponent,
  } = props;
  useEffect(() => {
    if (item === undefined) {
      load();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (item === undefined) {
    return LoadComponent;
  }
  return <>{onComplete(item)}</>;
};

export default LoadableItem;
