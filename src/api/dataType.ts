export type FormDefineType =
  ['string', FormDefineTypeString] |
  ['check', FormDefineTypeCheck];

export type FormDefineTypeString = {
};

export type FormDefineTypeCheck = {
  element: {
    [id: string]: string,
  },
  limit: number,
};

export type FormSaveType =
  ['string', FormSaveTypeString] |
  ['check', FormSaveTypeCheck];

export type FormSaveTypeString = {
  content: string,
};

export type FormSaveTypeCheck = {
  select: number[],
};

export type FormSaveValue = {
  value : FormSaveType,
  comment: string,
};

export type GetSessionResponse = {
  count: number,
};

export type GetGroupListResponse = {
  group: string[],
};

export type GetGroupDocumentListResponse = {
  document: string[],
};

export type PostGroupDocumentListRequest = {
  document: string[],
};

export type GetGroupUserListResponse = {
  owner: string[],
  member: string[],
};

export type PostGroupUserListRequest = {
  owner: string[],
  member: string[]
};

export type GetUserDocumentListResponse = {
  document: string[],
};

export type GetUserGroupListResponse = {
  group: string[],
};

export type FormList = {
  [id: string]: {
    name: string,
    update: string,
    status: number,
  }
}

export type GetGroupFormListResponse = {
  form: FormList,
};

export type GetGroupFormResponse = {
  name: string,
  description: string,
  receive: string,
  limit: string,
  update: string,
  values: {
    [id: string]: {
      name: string,
      description: string,
      type: FormDefineType,
      value?: FormSaveValue,
    }
  },
  status: number,
  comment: string,
}

export type PostGroupFormSubmitRequest = {
  values: {
    [id: number]: FormSaveType
  },
};
