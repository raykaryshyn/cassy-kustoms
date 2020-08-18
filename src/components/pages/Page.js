import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles(theme => ({
    page: {
        marginTop: '2.5rem',
        [theme.breakpoints.up('md')]: {
            marginTop: '3rem',
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
        lineHeight: 1.1,
        fontWeight: 600,
        letterSpacing: '-3px',
        display: 'inline-block',
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
