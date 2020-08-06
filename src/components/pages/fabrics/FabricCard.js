import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



export default function FabricCard(props) {
    const gridView = props.gridView;

    const useStyles = makeStyles((theme) => ({
        root: {
            background: gridView ? 'none' : '#fff',
            boxShadow: gridView ? 'none' : theme.shadow(8, 0, 2, 'rgba(0,0,0,0.13)'),
            transition: gridView ? 'none' : theme.transitions.create('box-shadow'),
            '&:hover': {
                boxShadow: gridView ? 'none' : theme.shadow(16, 0, 2, 'rgba(0,0,0,0.13)'),
            },
        },
        gridMedia: {
            borderRadius: theme.shape.borderRadius,
            overflow: 'hidden',
        },
        listActionArea: {
            width: '100%',
            height: '100%',
        },
        listActionAreaInner: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        listMedia: {
            height: 125,
            width: 125,
            marginRight: 15,
        },
        listImage: {
            height: '100%',
            width: 125,
        },
        gridContent: {
            padding: '5px 0',
            '&:last-child': {
                paddingBottom: '5px',
            },
        },
        listContent: {
            padding: 0,
            '&:last-child': {
                paddingBottom: 0,
            },
        },
        title: {
            fontSize: '1.4rem',
            color: 'rgba(0,0,0,0.75)',
            fontWeight: 500,
        },
    }));
    const classes = useStyles();

    if (gridView) {
        return (
            <Card className={classes.root}>
                <CardActionArea className={classes.gridMedia}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
                        image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                </CardActionArea>

                <CardContent className={classes.gridContent}>
                    <Typography gutterBottom className={classes.title}>
                        Po Ko Dot
                    </Typography>
                </CardContent>
            </Card>
        );
    } else {
        return (
            <Card className={classes.root}>
                <CardActionArea className={classes.listActionArea}>
                    <div className={classes.listActionAreaInner}>
                        <div className={[classes.gridMedia, classes.listMedia].join(' ')}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="300"
                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                                className={classes.listImage}
                            />
                        </div>

                        <CardContent className={classes.listContent}>
                            <Typography className={classes.title}>
                                Po Ko Dot
                        </Typography>
                        </CardContent>
                    </div>
                </CardActionArea>
            </Card>
        );
    }
}