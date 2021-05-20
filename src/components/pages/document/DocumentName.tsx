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
        const maxCount = 30;
        let count = 1;
        const backTime = 3000;
        const { href } = window.location;
        alert.error('資料の取得に失敗しました', backTime);
        let intervalId: number;
        // eslint-disable-next-line prefer-const
        intervalId = window.setInterval(() => {
          const sameLocation = window.location.href === href;
          if (count === maxCount) {
            window.clearInterval(intervalId);
            window.location.href = Pages.document.href;
            return;
          }
          if (!sameLocation) {
            window.clearInterval(intervalId);
            alert.close();
            return;
          }
          count += 1;
        }, backTime / maxCount);
      });
    } else {
      window.location.replace(Pages.document.href);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <></>;
};

export default DocumentName;
