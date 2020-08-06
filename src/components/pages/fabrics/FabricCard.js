import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from '../../../context/theme';

const useStyles = makeStyles({
    root: {
        background: 'none',
        boxShadow: 'none',
    },
    media: {
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
    },
    content: {
        background: 'none',
        padding: '5px 0',
        '&:last-child': {
            paddingBottom: '5px',
        },
    },
    title: {
        fontSize: '1.5rem',
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.media}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
            </CardActionArea>

            <CardContent className={classes.content}>
                <Typography gutterBottom className={classes.title}>
                    Po Ko Dot
                </Typography>
            </CardContent>
        </Card>
    );
}