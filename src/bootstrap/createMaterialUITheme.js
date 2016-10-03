import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  deepOrange500,
  deepOrange700,
  grey400,
  cyan300,
  cyan500,
  white,
  darkBlack
} from 'material-ui/styles/colors'

export default () => {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: white,
      primary2Color: deepOrange700,
      primary3Color: grey400,
      accent1Color: cyan500,
      accent2Color: '#ffc130',
      accent3Color: cyan300,
      textColor: darkBlack,
      alternateTextColor: deepOrange500,
    },
    flatButton: {
      primaryTextColor: deepOrange700
    }
  })
  return muiTheme

}
