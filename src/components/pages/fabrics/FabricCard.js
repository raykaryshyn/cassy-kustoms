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
        listCardWrapper: {
            cursor: 'pointer',
            [theme.breakpoints.up('md')]: {
                '& .MuiCard-root': {
                    transition: gridView ? 'none' : theme.transitions.create('transform'),
                },
                '&:hover .MuiCard-root': {
                    transform: gridView ? 'none' : 'scale(0.98)',
                },
            },
            [theme.breakpoints.down('md')]: {
                '& .MuiCard-root': {
                    transition: gridView ? 'none' : theme.transitions.create('transform', { duration: 200 }),
                },
                '&:active .MuiCard-root': {
                    transform: gridView ? 'none' : 'scale(0.98)',
                },
            },
        },
        root: {
            background: gridView ? 'none' : '#fff',
            boxShadow: gridView ? 'none' : theme.shadow(8, 0, 2, 'rgba(0,0,0,0.13)'),
            transition: gridView ? 'none' : theme.transitions.create('box-shadow'),
            cursor: 'pointer',
            '&:hover': {
                boxShadow: gridView ? 'none' : theme.shadow(16, 0, 2, 'rgba(0,0,0,0.13)'),
            },
        },
        gridMedia: {
            borderRadius: gridView ? theme.shape.borderRadius : 0,
            overflow: 'hidden',
            position: 'relative',
            zIndex: 0,
            [theme.breakpoints.up('md')]: {
                '& img': {
                    transition: theme.transitions.create('transform', { duration: 400 }),
                    borderRadius: gridView ? theme.shape.borderRadius : 0,
                    overflow: 'hidden',
                },
                '&:hover img': {
                    transform: gridView ? 'scale(0.94)' : 'none',
                },
            },
            [theme.breakpoints.down('md')]: {
                '& img': {
                    transition: theme.transitions.create('transform', { duration: 200 }),
                    borderRadius: gridView ? theme.shape.borderRadius : 0,
                    overflow: 'hidden',
                },
                '&:active img': {
                    transform: gridView ? 'scale(0.975)' : 'none',
                },
            },
            '&:hover .MuiCardActionArea-focusHighlight': {
                opacity: 0.06,
            },
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
                <CardActionArea className={classes.gridMedia} disableRipple>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
                        image="image.jpg"
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
            <div className={classes.listCardWrapper}>
                <Card className={classes.root}>
                    <CardActionArea className={classes.listActionArea} disableRipple>
                        <div className={classes.listActionAreaInner}>
                            <div className={[classes.gridMedia, classes.listMedia].join(' ')}>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="300"
                                    image="image.jpg"
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
            </div>
        );
    }
}