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
        },
        toggleButton: {
            fontSize: '34px',
            cursor: 'pointer',
            margin: '0 4px',
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
                margin: 0,
            },
            '&:last-of-type': {
                marginRight: 0,
            }
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
    }));
    const classes = useStyles();

    const handleCheck = (e, id) => {
        if (e.target.checked) {
            selectColor(id);
        } else {
            unselectColor(id);
        }
    };

    return (
        <div className={classes.toggleViewWrapper}>
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
                            <span style={{ backgroundColor: color, border: color === '#fff' ? '1px solid #bbb' : 'none' }} className={["checkmark", theme.palette.getContrastText(color) === "#fff" ? classes.lightCheckmark : ''].join(' ')}></span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}