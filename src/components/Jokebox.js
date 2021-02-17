// React imports
import React, { useEffect, useState } from 'react';
// Custom imports
import starterJokes from '../starterdata'
// Styler imports
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        height: '60%',
        width: '75%',
        border: '2px solid black',
        borderRadius: '15px',
        backgroundColor: 'azure'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        color: 'white',
        border: '1px solid gray',
        borderRadius: '15px',
        boxShadow: '3px 6px #888888',
        fontFamily: 'AmaticSC',
        fontSize: '1.6rem',
        fontWeight: '900',
        height: '4rem',
        width: '7.5rem',
        margin: '0 10px 0 10px'
    }
});

const Jokebox = () => {
    const classes = useStyles();
    const [ joke, setJoke] = useState(starterJokes[Math.floor((Math.random()*starterJokes.length))]);

    const getJoke = () => {
        setJoke(starterJokes[Math.floor((Math.random()*starterJokes.length))]);
    };

    return (
        <div className={ classes.root }>
            <h1>Jokes will go here...</h1>
            <div className={ classes.jokeDetail }>
                <h2>{ joke.jokeBody }</h2>
                <h2>{ joke.jokePunchline }</h2>
            </div>
            <div className={ classes.buttonContainer }>
                <button 
                    className={ classes.button }
                    style={{ backgroundColor: 'blue' }}
                >
                    Get Punchline
                </button>
                <button 
                    className={ classes.button }
                    style={{ backgroundColor: 'green' }}
                    onClick={ getJoke }
                >
                    Get New Joke
                </button>
            </div>
        </div>
    )
};

export default Jokebox;