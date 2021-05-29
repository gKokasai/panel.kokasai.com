import { createStyles, makeStyles, Theme } from "@material-ui/core";

const LoginFormStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      "@media(min-width: 420px)": {
        width: 400,
      },
      margin: `${theme.spacing(0)} auto`,
    },
    button: {
      width: `calc(50% - ${theme.spacing(1)}px)`,
      height: 42,
    },
    header: {
      textAlign: "center",
      background: "#212121",
      color: "#fff",
    },
    card: {
      marginTop: theme.spacing(10),
      maxWidth: "500px",
      minHeight: "230px",
    },
    cardActions: {
      display: "flex",
      flexWrap: "wrap",
    },
    cardContent: {
      position: "relative",
      height: "200px",
    },
    circularProgress: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: "auto",
      width: "50px",
      height: "50px",
    },
  })
);

export default LoginFormStyle;
