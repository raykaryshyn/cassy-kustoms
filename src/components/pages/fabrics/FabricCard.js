import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { FabricsContext } from './FabricsContext';


export default function FabricCard(props) {
    const context = React.useContext(FabricsContext).context;
    const selectedColors = context.selectedColors;

    const name = props.fabric.name;
    const image = props.fabric.image;
    const colors = props.fabric.colors;
    console.log(colors);

    const gridView = props.gridView;

    const useStyles = makeStyles((theme) => ({
        listCardWrapper: {
            cursor: 'pointer',
            position: 'relative',
            zIndex: 0,
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
                    transition: gridView ? 'none' : theme.transitions.create('transform', { duration: 66 }),
                },
                '&:active .MuiCard-root': {
                    transform: gridView ? 'none' : 'scale(0.966)',
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
                    transition: theme.transitions.create('transform', { duration: 66 }),
                    borderRadius: gridView ? theme.shape.borderRadius : 0,
                    overflow: 'hidden',
                },
                '&:active img': {
                    transform: gridView ? 'scale(0.966)' : 'none',
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
        gridImage: {
            background: 'rgba(0,0,0,0.06)',
        },
        listImage: {
            height: '100%',
            width: 125,
            background: 'rgba(0,0,0,0.06)',
        },
        gridContent: {
            padding: '5px 0',
            '&:last-child': {
                paddingBottom: '0',
            },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
        gridTitle: {
            margin: 0,
        },
        colors: {
            display: 'flex',
        },
        colorCircle: {
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'blue',
            marginRight: '4px',
        }
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
                        image={image}
                        title="Contemplative Reptile"
                        className={classes.gridImage}
                    />
                </CardActionArea>

                <CardContent className={classes.gridContent}>
                    <Typography gutterBottom className={[classes.title, classes.gridTitle].join(' ')}>
                        {name}
                    </Typography>
                    <div className={classes.colors}>
                        {colors.map((color, i) => (
                            <div className={classes.colorCircle} style={{ backgroundColor: context.colors[color], border: color === 'white' ? '1px solid rgb(187, 187, 187)' : 'none' }} key={i}></div>
                        ))}
                    </div>
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
                                    image={image}
                                    title="Contemplative Reptile"
                                    className={classes.listImage}
                                />
                            </div>

                            <CardContent className={classes.listContent}>
                                <Typography className={classes.title}>
                                    {name}
                                </Typography>
                                <div className={classes.colors}>
                                    {colors.map((color, i) => (
                                        <div className={classes.colorCircle} style={{ backgroundColor: context.colors[color], border: color === 'white' ? '1px solid rgb(187, 187, 187)' : 'none' }} key={i}></div>
                                    ))}
                                </div>
                            </CardContent>
                        </div>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}