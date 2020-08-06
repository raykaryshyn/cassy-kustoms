import { createMuiTheme } from '@material-ui/core/styles';

const fontFamily = [
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
].join(', ');

const theme = createMuiTheme({
    typography: {
        fontFamily: fontFamily,
        /* h1: fontFamily,
        h2: fontFamily,
        h3: fontFamily,
        h4: fontFamily,
        h5: fontFamily,
        h6: fontFamily, */
    },
    shape: {
        borderRadius: 13,
    },
    palette: {
        type: 'light',
        background: {
            default: '#fafafa',
        },
    },
    shadow: (s, x = 0, y = 0, c = 'rgba(0,0,0,0.1)') => {
        return `${x}px ${y}px ${s}px 0px ${c}`;
    },
});
export default theme;