import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles(theme => ({
    page: {
        marginTop: '2.25rem',
        [theme.breakpoints.up('md')]: {
            marginTop: '2.5rem',
        },
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '52px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '58px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '62px',
        },
        textAlign: 'center',
        lineHeight: 1,
        fontWeight: 600,
        display: 'inline-block',
        letterSpacing: -2,
        wordSpacing: 10,
        background: '-webkit-linear-gradient(45deg, #555, #222)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
    },
}));

export default function Page(props) {
    const classes = useStyles();

    return (
        <Container
            maxWidth="lg"
            className={classes.page}
        >
            <div className={classes.header}>
                <Typography
                    variant="h2"
                    component="h1"
                    className={classes.title}
                >
                    {props.title}
                </Typography>
            </div>

            {props.children}
        </Container>
    );
}
