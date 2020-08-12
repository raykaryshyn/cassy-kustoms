import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { FabricsContext } from './FabricsContext';
import ImageLoader from '../../ImageLoader';


export default function FabricCard(props) {
    const context = React.useContext(FabricsContext).context;

    const name = props.fabric.name;
    const image = props.fabric.image;
    const colors = props.fabric.colors;
    const limited = props.fabric.limited;
    const id = props.id;

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
            [theme.breakpoints.down('xs')]: {
                marginBottom: 2,
                '& .MuiCard-root': {
                    background: 'none',
                    borderRadius: 0,
                    boxShadow: 'none',
                },
                '&:active .MuiCard-root': {
                    transform: gridView ? 'none' : 'scale(0.966)',
                },
            },
        },
        gridCard: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
        root: {
            background: gridView ? 'none' : '#fff',
            boxShadow: gridView ? 'none' : theme.shadow(8, 0, 2, 'rgba(0,0,0,0.13)'),
            transition: gridView ? 'none' : theme.transitions.create('box-shadow'),
            cursor: 'pointer',
            /* '&:hover': {
                boxShadow: gridView ? 'none' : theme.shadow(16, 0, 2, 'rgba(0,0,0,0.13)'),
            }, */
        },
        gridMedia: {
            borderRadius: gridView ? theme.shape.borderRadius : 0,
            overflow: 'hidden',
            position: 'relative',
            zIndex: 0,
            paddingTop: '75%',
            height: 0,
            marginBottom: 2,
            '& img': {
                position: 'absolute',
                top: 0,
                height: '100%',
            },
            [theme.breakpoints.up('md')]: {
                '& img': {
                    transition: theme.transitions.create('transform', { duration: 400 }),
                    borderRadius: gridView ? theme.shape.borderRadius : 0,
                    overflow: 'hidden',
                },
                '&:hover img': {
                    transform: gridView ? 'scale(0.94)' : 'none',
                },
                '& .gridLimited': {
                    transition: theme.transitions.create('transform', { duration: 400 }),
                },
                '&:hover .gridLimited': {
                    transform: 'translate(-9px, 7px)',
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
                '& .gridLimited': {
                    transition: theme.transitions.create('transform', { duration: 66 }),
                },
                '&:active .gridLimited': {
                    transform: 'translate(-9px, 7px)',
                },
            },
            '&:hover .MuiCardActionArea-focusHighlight': {
                opacity: 0.06,
            },
        },
        listActionArea: {
            width: '100%',
            height: '100%',
            paddingRight: '15px',
            [theme.breakpoints.down('xs')]: {
                padding: 0,
                '&:hover .MuiCardActionArea-focusHighlight': {
                    opacity: 0,
                },
            },
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
            [theme.breakpoints.down('xs')]: {
                height: 100,
                width: 100,
            },
        },
        gridImage: {
            background: 'rgba(0,0,0,0.06)',
            display: 'block',
            width: '100%',
            /* objectFit: 'cover', */
        },
        listImage: {
            height: '100%',
            width: 125,
            background: 'rgba(0,0,0,0.06)',
            [theme.breakpoints.down('xs')]: {
                height: '100%',
                width: '100%',
                borderRadius: theme.shape.borderRadius,
            },
        },
        gridContent: {
            padding: '6px 0 16px',
            '&:last-child': {
                padding: '6px 0 16px',
            },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        listContent: {
            padding: 0,
            '&:last-child': {
                paddingBottom: 0,
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: 'calc(100% - 115px)',
            },
        },
        title: {
            fontSize: '1.175rem',
            color: 'rgba(0,0,0,0.75)',
            fontWeight: 500,
            lineHeight: '1.45rem',
            display: 'flex',
            alignItems: 'flex-start',
        },
        gridTitle: {
            margin: 0,
            maxWidth: '75%',
            wordBreak: 'break-word',
        },
        colors: {
            display: 'flex',
        },
        gridColors: {
            paddingTop: '6px',
        },
        listColors: {
            paddingTop: '3px',
        },
        colorCircle: {
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'blue',
            marginRight: '4px',
        },
        gridLimited: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: theme.palette.error.main,
            color: 'white',
            padding: '6px 10px',
            borderRadius: '5px',
            lineHeight: '0.75rem',
            fontFamily: theme.typography.fontFamily,
            boxShadow: theme.shadows[5],
            fontSize: '0.8rem',
        },
        listTitleWrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            [theme.breakpoints.down('xs')]: {
                wordBreak: 'break-word',
            },
        },
        listLimited: {
            background: theme.palette.error.main,
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            lineHeight: '0.75rem',
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.8rem',
            marginBottom: '10px',
            display: 'inline-block',
        },

        number: {
            color: 'rgba(0, 0, 0, 0.5)',
            paddingRight: 9,
            display: 'block',
            wordBreak: 'keep-all',
            fontSize: '1.07rem',
            /* lineHeight: '0.9rem',
            paddingTop: '0.25rem', */
        },
    }));
    const classes = useStyles();


    if (gridView) {
        return (
            <Card className={[classes.root, classes.gridCard].join(' ')}>
                <CardActionArea className={classes.gridMedia} disableRipple>
                    {/* <CardMedia
                        component="img"
                        alt={name}
                        height="300"
                        image={image}
                        title={name}
                        className={classes.gridImage}
                    /> */}
                    <ImageLoader src={image} className={classes.gridImage} />
                    {limited ?
                        <div className={[classes.gridLimited, 'gridLimited'].join(' ')}>
                            Limited
                        </div>
                        : ''
                    }
                </CardActionArea>

                <CardContent className={classes.gridContent}>
                    <Typography gutterBottom className={[classes.title, classes.gridTitle].join(' ')}>
                        <span className={classes.number}>#{id}</span> {name}
                    </Typography>
                    <div className={[classes.colors, classes.gridColors].join(' ')}>
                        {colors.map((color, i) => {
                            if (color !== 'rainbow') {
                                return (
                                    <div className={classes.colorCircle} style={{ backgroundColor: context.colors[color], border: color === 'white' ? '1px solid rgb(187, 187, 187)' : color === 'yellow' ? '1px solid rgba(0,0,0,0.075)' : 'none' }} key={i}></div>
                                );
                            } else {
                                return (<React.Fragment key={i}></React.Fragment>);
                            }
                        })}
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
                            <div className={[classes.listMedia].join(' ')}>
                                <CardMedia
                                    component="img"
                                    alt={name}
                                    height="300"
                                    image={image}
                                    title={name}
                                    className={classes.listImage}
                                />
                            </div>

                            <CardContent className={classes.listContent}>
                                {limited ?
                                    <div className={[classes.listLimited].join(' ')}>
                                        Limited
                                    </div>
                                    : ''
                                }
                                <div className={classes.listTitleWrapper}>
                                    <Typography className={classes.title}>
                                        <span className={classes.number}>#{id}</span> {name}
                                    </Typography>
                                </div>
                                <div className={[classes.colors, classes.listColors].join(' ')}>
                                    {colors.map((color, i) => {
                                        if (color !== 'rainbow') {
                                            return (
                                                <div className={classes.colorCircle} style={{ backgroundColor: context.colors[color], border: color === 'white' ? '1px solid rgb(187, 187, 187)' : color === 'yellow' ? '1px solid rgba(0,0,0,0.075)' : 'none' }} key={i}></div>
                                            );
                                        } else {
                                            return (<React.Fragment key={i}></React.Fragment>);
                                        }
                                    })}
                                </div>
                            </CardContent>
                        </div>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}