import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles({
    page: {
        marginTop: '2.5rem',
    },
    title: {
        textAlign: 'center',
    },
});

export default function Page(props) {
    const classes = useStyles();

    return (
        <Container
            maxWidth="lg"
            className={classes.page}
        >
            <Typography
                variant="h2"
                component="h1"
                className={classes.title}
            >
                {props.title}
            </Typography>

            {props.children}
        </Container>
    );
}
