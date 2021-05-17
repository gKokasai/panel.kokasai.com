export type FormDefineType =
  { type: 'string' } |
  {
    type: 'check',
    element: {
      [id: string]: string,
    }
    limit: number,
  };

export type FormSaveType =
  ['string', { content: string }] |
  ['check', { select: number[] }];

export type FormSaveValue = {
  value : FormSaveType,
  comment: string,
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
