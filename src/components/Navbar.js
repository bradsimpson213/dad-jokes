// react imports
import React from 'react';
import { Link } from 'react-router-dom';
// Style imports
import {createUseStyles} from 'react-jss';
import dadImage from '../assets/dad-logo.jpg';

const useStyles = createUseStyles({
    root:{
        color: 'black',
        border: '2px solid black',
        borderRadius: '25px',
        // backgroundColor: 'azure',
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
    },
    linkStlye: {
        fontFamily: 'AmaticSC',
        fontSize: '2.5rem',
        margin: "0 65px 0 65px",
        '&:visited': {
            color: 'blue'
        }
    }
});

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <Link 
                className={ classes.linkStlye }
                to="/newjoke"
            >
                Submit A New Joke
            </Link>
            <img 
                className={ classes.titleImage }
                src={ dadImage } 
                alt="dad-text-image" 
            />
            <h1 className={ classes.titleText }
            >
                Jokes!
            </h1>
            <Link 
                className={ classes.linkStlye }
                to="/docs"
            >
                API Documentation
            </Link>
        </div>
    )
};

export default Navbar;