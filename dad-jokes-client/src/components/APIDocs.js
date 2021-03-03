// React imports
import React from 'react';
// Styler imports
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    root: {
        height: '60%',
        width: '75%',
        border: '2px solid black',
        borderRadius: '15px',
        backgroundColor: 'azure',
        fontFamily: 'AmaticSC',
        padding: '10px 45px 10px 45px'
    },
});

const APIDocs = () => {
    const classes = useStyles()

    return (
        <div className={ classes.root}>
            <h2>API DOCS HERE</h2>
        </div>
    )
};

export default APIDocs;