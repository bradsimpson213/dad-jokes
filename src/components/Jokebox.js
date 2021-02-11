// React imports
import React from 'react';
// Styler imports
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        height: '60%',
        width: '75%',
        border: '2px solid black',
        borderRadius: '15px'
    }
});

const Jokebox = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <h1>Jokes will go here...</h1>
        </div>
    )
};

export default Jokebox;