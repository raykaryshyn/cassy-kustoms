import React from 'react';
import { FabricsContext } from './FabricsContext';

import { makeStyles } from '@material-ui/core/styles';
import ListIcon from '@material-ui/icons/List';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import './checkbox.css';
import theme from '../../../context/theme';

export default function FabricsSettings() {
    const context = React.useContext(FabricsContext).context;
    const gridView = context.gridView;
    const setGridView = context.setGridView;
    const colors = context.colors;
    const selectedColors = context.selectedColors;
    const selectColor = context.selectColor;
    const unselectColor = context.unselectColor;

    const useStyles = makeStyles((theme) => ({
        toggleViewWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            [theme.breakpoints.down(784)]: {
                justifyContent: 'flex-start',
                overflowX: 'auto',
                paddingBottom: '13px',
                marginLeft: '-24px',
                paddingLeft: '24px',
            },
            [theme.breakpoints.down(600)]: {
                marginLeft: '-16px',
                paddingLeft: '16px',
            },
        },
        toggleButton: {
            fontSize: '34px',
            cursor: 'pointer',
            margin: '4px 4px 0',
            color: 'rgba(0,0,0,0.25)',
            '&:hover': {
                color: 'rgba(0,0,0,0.45)',
            },
            transition: theme.transitions.create('color', { duration: '150ms' }),
            '&:first-of-type': {
                marginLeft: '-4px !important',
            },
        },
        activeToggleButton: {
            color: '#222',
            '&:hover': {
                color: '#222',
            },
        },


        setting: {
            marginRight: 50,
            '& p': {
                margin: '0 0 2px 0',
                color: 'rgba(0,0,0,0.7)',
            },
            '&:last-of-type': {
                marginRight: 0,
            },
        },
        settingWrapper: {
            display: 'flex',
            '& > :first-child': {
                marginLeft: 0,
            }
        },

        lightCheckmark: {
            '&:after': {
                borderColor: '#fff !important',
            },
        },

        rainbowCheckbox: {
            background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red), url("rainbow.jpg") no-repeat',
            backgroundSize: '100%',
        },
        rainbowCheckboxChecked: {
            background: 'radial-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)), conic-gradient(red, yellow, lime, aqua, blue, magenta, red), url("rainbow.jpg") no-repeat',
            backgroundSize: '100%',
            '&:after': {
                borderColor: '#fff !important',
            },
        },

        settingsWrapper: {
            position: 'relative',
            [theme.breakpoints.down(784)]: {
                /* '&:before': {
                    content: '""',
                    position: 'absolute',
                    zIndex: 1,
                    top: 0,
                    left: '-16px',
                    bottom: 15,
                    pointerEvents: 'none',
                    backgroundImage: 'linear-gradient(to right, rgba(250,250,250,1) 0%, rgba(250,250,250,0) 100%)',
                    width: '10%',
                },
                '&.no-before:before': {
                    display: 'none',
                }, */
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    zIndex: 1,
                    top: 0,
                    right: '-24px',
                    bottom: 15,
                    pointerEvents: 'none',
                    backgroundImage: 'linear-gradient(to left, rgba(250,250,250,1) 0%, rgba(250,250,250,0) 100%)',
                    width: '10%',
                },
                '&.no-after:after': {
                    display: 'none',
                },
            },
            [theme.breakpoints.down(600)]: {
                '&:after': {
                    right: '-16px',
                },
            },
        },
    }));
    const classes = useStyles();

    const handleCheck = (e, id) => {
        if (e.target.checked) {
            selectColor(id);
        } else {
            unselectColor(id);
        }
    };

    const scrollerRef = React.useRef();
    const scrollerWrapperRef = React.useRef();
    const handleScroller = () => {
        let el = scrollerRef.current;
        let wrap = scrollerWrapperRef.current;

        if (el.scrollLeft <= 0) {
            wrap.classList.add('no-before');
        } else {
            wrap.classList.remove('no-before');
        }

        console.log(el.scrollWidth - (el.scrollLeft + el.clientWidth));
        if (el.scrollWidth - (el.scrollLeft + el.clientWidth) <= 7) {
            wrap.classList.add('no-after');
        } else {
            wrap.classList.remove('no-after');
        }
    };

    React.useEffect(() => {
        const handleResize = () => {
            let el = scrollerRef.current;
            if (window.innerWidth <= 784) {
                el.style.width = document.documentElement.clientWidth + 'px';
            } else {
                el.style.width = '';
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    return (
        <div className={[classes.settingsWrapper, 'no-before'].join(' ')} ref={scrollerWrapperRef}>
            <div className={classes.toggleViewWrapper} ref={scrollerRef} onScroll={handleScroller}>
                <div className={classes.setting}>
                    <p>View:</p>
                    <div className={classes.settingWrapper}>
                        <ViewModuleIcon
                            className={[
                                classes.toggleButton,
                                gridView ? classes.activeToggleButton : '',
                            ].join(' ')}
                            onClick={() => setGridView(true)}
                        />
                        <ListIcon
                            className={[
                                classes.toggleButton,
                                !gridView ? classes.activeToggleButton : '',
                            ].join(' ')}
                            onClick={() => setGridView(false)}
                        />
                    </div>
                </div>

                <div className={classes.setting}>
                    <p>Color Filter:</p>
                    <div className={classes.settingWrapper}>
                        {Object.entries(colors).map(([id, color]) => (
                            <label className="checkboxContainer" key={id}>
                                <input type="checkbox" checked={selectedColors.includes(id)} onChange={(e) => handleCheck(e, id)} />
                                <span style={{ backgroundColor: color, border: id === 'white' ? '1px solid #bbb' : 'none' }} className={["checkmark", theme.palette.getContrastText(color) === "#fff" ? classes.lightCheckmark : '', id === 'rainbow' ? classes.rainbowCheckbox : '', id === 'rainbow' && selectedColors.includes(id) ? classes.rainbowCheckboxChecked : ''].join(' ')}></span>
                            </label>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}