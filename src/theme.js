import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const APP_BAR_HEIGHT = '58px';
const BOARD_BAR_HEIGHT = '60px';
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HERADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";

   
// Create a theme instance.
const theme = extendTheme({
  trello:{
    appBarHeight: '58px',
    boardBarHeight: '60px',
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HERADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
  },
  colorSchemes: {
    light: {}, 
    dark: {}, 
  },
  components : {
      MuiCssBaseline: {
          styleOverrides: { 
            body: {
              '*::-webkit-scrollbar' : {
                width: '8px', 
                height: '8px'
              },
              '*::-webkit-scrollbar-thumb' : {
                backgroundColor: '#dcdde1',
                borderRadius: '8px'
              } ,
              '*::-webkit-scrollbar-thumb:hover' : {
                backgroundColor: 'white'
              }
            }
          }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderWidth: '0.5px',
            '&:hover': { borderWidth: '0.5px'}
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {fontSize: '0.875rem'}
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            '&.MuiTypography-body1': {fontSize: '0.875rem'}
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem',
            '& fieldse': {borderWidth: '0.5px !important'},
            '&:hover fieldset' : {borderWidth: '1px !important'},
            '&.Mui-focused fieldset' : {borderWidth: '1px !important'}
          }
        }
      }
  }
});

export default theme;