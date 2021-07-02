export const StudentNumberRegex =
  /^((m\d{2}1)|(e\d{2}2)|(j\d{2}3)|(k\d{2}4)|(c\d{2}5)|(ap\d{2}8)|(ae\d{2}9))\d{2}$/;

export const isStudentNumber = (id?: string): boolean =>
  !!id?.match(StudentNumberRegex);
