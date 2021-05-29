import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Pages } from "../../../pages";
import { getDocument } from "../../../api/api";
import { useAlert } from "../../../contexts/AlertContext";

const DocumentName: FC = (): JSX.Element => {
  const alert = useAlert();
  const queryParameter = window.location.search;
  const history = useHistory();
  useEffect(() => {
    if (queryParameter) {
      getDocument(queryParameter.substring(1))
        .then((response) => {
          const url = window.URL || webkitURL;
          window.location.replace(url.createObjectURL(response.data));
        })
        .catch(() => {
          const maxCount = 30;
          let count = 1;
          const backTime = 3000;
          const { location } = history;
          alert.error("資料の取得に失敗しました", backTime);
          const intervalId = window.setInterval(() => {
            if (count === maxCount) {
              window.clearInterval(intervalId);
              history.push(Pages.document.href);
              return;
            }
            if (history.location !== location) {
              window.clearInterval(intervalId);
              alert.close();
              return;
            }
            count += 1;
          }, backTime / maxCount);
        });
    } else {
      history.replace(Pages.document.href);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <></>;
};

export default DocumentName;
