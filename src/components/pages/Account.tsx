import React, { useEffect } from 'react';
import * as api from '../../api';

const Account = (): JSX.Element => {
  useEffect(
    () => {
      const result = api.getAccessibleDocumentList();
      console.log(result);
    }, [],
  );

  return (
    <>
      Account Page
    </>
  );
};

export default Account;
