import { createMuiTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';

const fontFamily = [
  'Noto Sans JP',
  'Lato',
  '游ゴシック Medium',
  '游ゴシック体',
  'Yu Gothic Medium',
  'YuGothic',
  'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN',
  'メイリオ',
  'Meiryo',
  'ＭＳ Ｐゴシック',
  'MS PGothic',
  'sans-serif',
].join(',');

const ControlPanelTemplateTheme = createMuiTheme({
  typography: {
    fontFamily,
  },
  palette: {
    primary: { main: colors.lightGreen[800] },
  },
});

export default ControlPanelTemplateTheme;
