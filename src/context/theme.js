import { createMuiTheme } from '@material-ui/core/styles';

const fonts = {
    sansSerif: [
        '"Inter"',
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
    ].join(', '),
    serif: [
        '"Inter"',
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
    ].join(', '),
};

const theme = createMuiTheme({
    typography: {
        fonts: fonts,
        fontFamily: fonts.sansSerif,
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
            main: '#1481BA',
            dark: '#106998',
            light: '#189ee7',
        }
    },
    shadow: (s, x = 0, y = 0, c = 'rgba(0,0,0,0.1)') => {
        return `${x}px ${y}px ${s}px 0px ${c}`;
    },
});
export default theme;