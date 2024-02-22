import Hero from './ui/components/hero/hero';
import Toolbar from './ui/components/toolbar/toolbar';
import About from './ui/components/about/about';
import Karla from './ui/assets/fonts/Karla/Karla-VariableFont_wght.ttf'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Services from './ui/components/services/services';
import Projects from './ui/components/projects/projects';
import Contact from './ui/components/contact/contact';
import Footer from './ui/components/footer/footer';

const defaultTheme = createTheme();
const {breakpoints} = defaultTheme;

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#191919',
      paper: 'black'
    },
    primary: {
      main: '#FF6201',
    }
  },
  typography: {
    fontFamily: 'Karla',
    button: {
      fontWeight: '300',
      fontSize: '1rem',
      textTransform: 'none',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Karla';
          src: url(${Karla});
        }
        `
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: ({ownerState}) => ({
          borderRadius: 0,
          width: 'fit-content',
          height: 'fit-content',
          minWidth: 0,
          minHeight: 0,
          position: 'relative',
          fontSize: 12,
          [breakpoints.up('xs')]: {
            ...(ownerState.className === 'project-card-button') && {
              marginRight: 10,
              marginBottom: 10,
              marginTop: 10,
            },
          },
          [breakpoints.up('sm')]: {
            fontSize: 16,
          },
          [breakpoints.up('md')]: {
            fontSize: '1.5vw',
          },
          [breakpoints.up('xl')]: {
            fontSize: '1.1vw',
            ...(ownerState.className === 'project-card-button') && {
              fontSize: '1vw',
              marginRight: 20
            },
          },
          
        })
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: 100,
          letterSpacing: '-5%',
          fontSize: 15,
          ...(ownerState.variant === 'h1') && {
            fontSize: '9vw',
            fontWeight: 500,
            [breakpoints.up('md')]: {
              fontSize: '5vw',
            },
            [breakpoints.up('xl')]: {
              fontSize: '6vw',
            }
          },
          ...(ownerState.variant === 'h2') && {
            fontSize: '5vw',
            fontWeight: 100,
            color: '#989898',
            [breakpoints.up('md')]: {
              fontSize: '3vw',
            }
          },
          ...(ownerState.variant === 'h3') && {
            fontSize: '1.4rem',
            fontWeight: 600,
            marginBottom: 40,
            '& span': {
              color: '#FF6201'
            },
            [breakpoints.up('sm')]: {
              fontSize: '1.6rem',
            },
            [breakpoints.up('md')]: {
              fontSize: '1.5rem',
              ...(ownerState.className === 'contact-title') && {
                marginBottom: 0,
              }
            },
            [breakpoints.up('xl')]: {
              fontSize: '2.5vw'
            }
          },
          ...(ownerState.variant === 'h4') && {
            fontSize: '1.3rem',
            fontWeight: 700,
            [breakpoints.up('xl')]: {
              fontSize: '1.5vw'
            }
          },
          ...(ownerState.variant === 'h5') && {
            fontSize: '1.2rem',
            fontWeight: 700,
            textWrap: 'balance',
            [breakpoints.up('sm')]: {
              fontSize: '1.4rem'
            },
            [breakpoints.up('xl')]: {
              fontSize: '1.8vw',
            }
          },
          ...(ownerState.variant === 'subtitle1') && {
            fontSize: '1rem',
            fontWeight: 100,
            color: '#FF6201',
            marginBottom: 15,
            [breakpoints.up('sm')]: {
              fontSize: '1.2rem'
            },
            [breakpoints.up('md')]: {
              fontSize: '1rem'
            },
            [breakpoints.up('xl')]: {
              fontSize: '1.5vw'
            }
          },
        })
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        }
      }
    },
  }
})

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toolbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
