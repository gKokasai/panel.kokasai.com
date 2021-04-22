import React /* { useEffect } */　from 'react';
/* import { useAuth } from '../../contexts/UserContext';
import * as api from '../../api'; */

const Account = (): JSX.Element =>
/*  const auth = useAuth();
  useEffect(
    () => {
      const asyncGet = async () => {
        const result = await api.getAccessibleDocumentList();
        console.log(result);
        auth.setUser({ ...auth.user, documentList: result.data.document });
      };
      asyncGet().then().catch();
    }, [],
  ); */
  (
    <div className="gomi">
      これ以降のページは未実装です。
      来週から企画案の提出開始予定ですので、それまでに開発します！！！！！！！
    </div>
  /*
      <div>
      {auth.user?.documentList?.map(
        (name) => (
          <li><a href={`${api.URL}/document/${name}`}>{name}</a></li>
        ),
      )}
    </div>
*/
  );
export default Account;
