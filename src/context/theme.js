import { createMuiTheme } from '@material-ui/core/styles';

const fonts = {
    sansSerif: [
        '"Poppins"',
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
        'Amiri',
        'serif',
    ].join(', '),
};

const theme = createMuiTheme({
    typography: {
        fonts: fonts,
        fontFamily: fonts.sansSerif,
        h1: { fontFamily: fonts.serif },
        h2: { fontFamily: fonts.serif },
        h3: { fontFamily: fonts.serif },
        h4: { fontFamily: fonts.serif },
        h5: { fontFamily: fonts.serif },
        h6: { fontFamily: fonts.serif },
    },
    shape: {
        borderRadius: 10,
    },
    palette: {
        type: 'light',
        background: {
            default: '#fafbfc',
        },
    },
    shadow: (s, x = 0, y = 0, c = 'rgba(0,0,0,0.1)') => {
        return `${x}px ${y}px ${s}px 0px ${c}`;
    },
});
export default theme;