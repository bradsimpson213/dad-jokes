// React imports
import React from 'react';
// Style imports
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        height: '60%',
        width: '75%',
        border: '2px solid black',
        borderRadius: '15px',
        backgroundColor: 'azure'
    }
});

const JokeForm = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <h1>Submit your new jobes here...</h1>
            <form>
                
            </form>

        </div>
    )
};

export default JokeForm;