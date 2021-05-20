import React, { FC } from 'react';
import DialogTitle from '../../atoms/DialogTitle';
import DialogContent from '../../atoms/DialogContent';
import DialogContentText from '../../atoms/DialogContentText';
import DialogActions from '../../atoms/DialogActions';
import Button from '../../atoms/Button';
import Dialog from '../../atoms/Dialog';

export type PasswordRequestConfirmDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
  onConfirm: () => void;
};

const PasswordRequestConfirmDialog: FC<PasswordRequestConfirmDialogProps> = (props) => {
  const {
    open, setOpen, id, onConfirm,
  } = props;
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        確認
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`${id}@gunma.kosen-ac.jp にメールを送信しますがよろしいですか？`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>
          キャンセルする
        </Button>
        <Button onClick={onConfirm}>
          送信する
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PasswordRequestConfirmDialog;
