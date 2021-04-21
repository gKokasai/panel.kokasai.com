import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/UserContext';
import * as api from '../../api';

const Account = (): JSX.Element => {
  const auth = useAuth();
  useEffect(
    () => {
      const asyncGet = async () => {
        const result = await api.getAccessibleDocumentList();
        console.log(result);
        auth.setUser({ ...auth.user, documentList: result.data.document });
      };
      asyncGet().then().catch();
    }, [auth],
  );

  return (
    <div>
      {auth.user?.documentList?.map(
        (d) => (
          <li>
            {d}
          </li>
        ),
      )}
    </div>
  );
};

export default Account;
