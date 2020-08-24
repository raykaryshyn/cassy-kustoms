import { createMuiTheme } from '@material-ui/core/styles';

const systemFont = [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');

const bodyFonts = [
    '"Roboto"',
    systemFont
].join(',');

const headerFonts = [
    '"Roboto Condensed"',
    systemFont
].join(',');

const fonts = {
    body: bodyFonts,
    header: headerFonts,
};

const headerTypography = {
    fontFamily: fonts.header,
    textTransform: 'uppercase',
};

const theme = createMuiTheme({
    typography: {
        fonts: fonts,
        fontFamily: fonts.body,        
        h1: headerTypography,
        h2: headerTypography,
        h3: headerTypography,
        h4: headerTypography,
        h5: headerTypography,
        h6: headerTypography,
    },
    shape: {
        borderRadius: 10,
    },
    palette: {
        type: 'light',
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#222222',
            secondary: '#666666',
        },
        primary: {
            main: '#008080',
            dark: '#008080',
            light: '#008080',
        }
    },
    shadow: (s, x = 0, y = 0, c = 'rgba(0,0,0,0.1)') => {
        return `${x}px ${y}px ${s}px 0px ${c}`;
    },
});
export default theme;