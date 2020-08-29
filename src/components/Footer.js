import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function Footer(props) {
    const useStyles = makeStyles(theme => ({
        root: {
            background: theme.palette.primary.dark3,
            color: theme.palette.primary.light1,
            padding: '30px 0',
        },
        text: {            
            fontFamily: theme.typography.fonts.header,
            textAlign: "center",
            fontSize: 16,
        },
    }));
    const classes = useStyles();

    const d = new Date();
    const year = d.getFullYear()

    return (
        <footer className={classes.root} id={props.id}>
            <Container maxWidth="lg">
                <Typography className={classes.text}>&copy; {year} Cassy Kustoms :: All Rights Reserved</Typography>
            </Container>
        </footer>
    );
}