// react imports
import React from 'react';
// Style imports
import {createUseStyles} from 'react-jss';
import dadImage from '../assets/dad-logo.jpg';

const useStyles = createUseStyles({
    root:{
        color: 'black',
        border: '2px solid black',
        borderRadius: '25px',
        width: '98%',
        height: '15vh',
        display: 'flex',
        flexFlow: 'rows',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px 0 10px 0',
        margin: '15px 10px 5px 15px'
    },
    titleImage: {
        height: '175px',
        transform: 'rotate(-10deg)'
    },
    titleText: {
        fontFamily: 'AmaticSC',
        fontSize: '9rem',
        zIndex: '10'
    }
});

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <img 
                className={ classes.titleImage }
                src={ dadImage } 
                alt="dad-text-image" 
            />
            <h1 className={ classes.titleText }
            >
                Jokes!
            </h1>
        </div>
    )
};

export default Navbar;