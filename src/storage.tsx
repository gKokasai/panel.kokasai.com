const SessionIdKey = 'session-id';

export const getSessionId = (): string | null => localStorage.getItem(SessionIdKey);

export const setSessionId = (value: string | null): void => {
  if (value) {
    localStorage.setItem(SessionIdKey, value);
  } else {
    localStorage.removeItem(SessionIdKey);
  }
};
