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
