import React, { FC, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import { useAuth } from '../../contexts/UserContext';
import LoginFormStyle from './LoginForm.style';

type Props = {
  handleIdForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isEnableSendButton: boolean;
}
const PasswordRequestForm: FC<Props> = (props): JSX.Element => {
  const auth = useAuth();
  const { handleIdForm, isEnableSendButton } = props;
  const [isEnablePopUpWindow, setIsEnablePopUpWindow] = useState(false);
  const handleIdFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsEnablePopUpWindow(true);
  };

  const handleDialogSubmit = () => {
    auth.getToken();
  };

  const classes = LoginFormStyle();

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleIdFormSubmit}>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent>
          <TextField
            fullWidth
            type="email"
            label="学籍番号"
            placeholder="アルファベットから始まる学籍番号"
            margin="normal"
            onChange={handleIdForm}
          />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.button}
            onClick={() => { auth.setUser({ ...auth.user, postedId: true }); }}
          >
            パスワードを入力する
          </Button>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            className={classes.button}
            onClick={() => { setIsEnablePopUpWindow(true); }}
            disabled={!isEnableSendButton}
          >
            パスワードを発行する
          </Button>
          <Dialog
            open={isEnablePopUpWindow}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>
              確認
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {auth.user?.inputId}
                @gunma.kosen-ac.jp にメールを送信しますがよろしいですか？
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => { setIsEnablePopUpWindow(false); }}>
                キャンセルする
              </Button>
              <Button onClick={handleDialogSubmit}>
                送信する
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    </form>
  );
};

export default PasswordRequestForm;