import React, { FC, useEffect, useState } from "react";
import CardActions from "../../atoms/CardActions";
import CardContent from "../../atoms/CardContent";
import Button from "../../atoms/Button";
import LoginFormStyle from "./LoginForm.style";
import StudentNumberTextField from "../../molecules/login/StudentNumberTextField";
import LoginFormCard from "../../molecules/login/LoginFormCard";
import PasswordRequestConfirmDialog from "../../molecules/login/PasswordRequestConfirmDialog";
import { isStudentNumber } from "../../../util/studentNumber";

export type PasswordRequestFormProps = {
  onChangeStudentNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitPasswordRequestForm: () => void;
  onClickForwardButton: () => void;
  id?: string;
};

const PasswordRequestForm: FC<PasswordRequestFormProps> = (
  props
): JSX.Element => {
  const {
    onChangeStudentNumber,
    onSubmitPasswordRequestForm,
    onClickForwardButton,
    id,
  } = props;
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [enableSendButton, setEnableSendButton] = useState(false);
  useEffect(() => {
    setEnableSendButton(isStudentNumber(id));
  }, [id]);
  const classes = LoginFormStyle();
  return (
    <LoginFormCard
      onSubmit={(event) => {
        event.preventDefault();
        setOpenConfirmDialog(true);
      }}
    >
      <CardContent>
        <StudentNumberTextField
          onChange={onChangeStudentNumber}
          defaultValue={id}
        />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button className={classes.button} onClick={onClickForwardButton}>
          パスワードを入力する
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          className={classes.button}
          onClick={() => setOpenConfirmDialog(true)}
          disabled={!enableSendButton}
        >
          パスワードを発行する
        </Button>
        <PasswordRequestConfirmDialog
          open={openConfirmDialog}
          setOpen={setOpenConfirmDialog}
          id={id}
          onConfirm={onSubmitPasswordRequestForm}
        />
      </CardActions>
    </LoginFormCard>
  );
};

export default PasswordRequestForm;
