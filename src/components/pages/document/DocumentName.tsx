import React, { FC, useEffect } from 'react';
import { Pages } from '../../../pages';
import { getDocument } from '../../../api/api';
import { useAlert } from '../../../contexts/AlertContext';

const DocumentName: FC = (): JSX.Element => {
  const alert = useAlert();
  const queryParameter = window.location.search;
  useEffect(() => {
    if (queryParameter) {
      getDocument(queryParameter.substring(1)).then((response) => {
        const url = window.URL || webkitURL;
        window.location.replace(url.createObjectURL(response.data));
      }).catch(() => {
        alert.error('資料の取得に失敗しました');
      });
    } else {
      window.location.replace(Pages.document.href);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <></>;
};

export default DocumentName;
