const ShowEmptyPanelKey = 'show-empty-panel';
const SessionIdKey = 'session-id';

export const isShowEmptyPanel = (): boolean => localStorage.getItem(ShowEmptyPanelKey) != null;

export const setShowEmptyPanel = (value: boolean): void => {
  if (value) {
    localStorage.setItem(ShowEmptyPanelKey, '');
  } else {
    localStorage.removeItem(ShowEmptyPanelKey);
  }
};

export const getSessionId = (): string | null => localStorage.getItem(SessionIdKey);

export const setSessionId = (value: string | null): void => {
  if (value) {
    localStorage.setItem(SessionIdKey, value);
  } else {
    localStorage.removeItem(SessionIdKey);
  }
};
