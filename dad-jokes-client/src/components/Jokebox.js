// React imports
import React, { useEffect, useState } from 'react';
// Custom Hooks
import useToggle from '../hooks/useToggle';
// Custom imports
import starterJokes from '../starterdata';
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
    jokeDetail: {
        fontSize: '1.7rem'
    },
    jokeText: {
        fontWeight: '900'
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
    },
    auto: {
        marginTop: '20px',
        fontSize: '2rem',
        fontWeight: '900',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Jokebox = () => {
    const classes = useStyles();
    const [joke, setJoke] = useState(starterJokes[Math.floor((Math.random() * starterJokes.length))]);
    const [hidden, setHidden] = useState(true);
    const [auto, toggleAuto] = useToggle(false)


    const getJoke = () => {
        setJoke(starterJokes[Math.floor((Math.random()*starterJokes.length))]);
        setHidden(true);
    };

    const punchLine = () => {
       setHidden(false);
    }


    const autoPlay = () => {
        toggleAuto()
        if (!auto) {
            punchLine()
            getJoke()
        }
    }

    return (
        <div className={ classes.root }>
            <h2>Your next Dad joke is...</h2>
            <div className={ classes.jokeDetail }>
                <h1 
                    className={ classes.jokeText }
                >
                    { joke.jokeBody }
                </h1>
                <h1 
                    style={ hidden ? { opacity: '0', transition: 'None' } : { opacity: '1', transition: 'opacity 2.0s' } }
                >
                    { joke.jokePunchline }
                </h1>
            </div>
            <div className={ classes.buttonContainer }>
                <button 
                    className={ classes.button }
                    style={{ backgroundColor: 'blue' }}
                    onClick={ punchLine }
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
                { /* add joke ratings with emojis to pick rating */}
            </div>
            <div className={ classes.auto }>
                <input 
                    type="checkbox" 
                    name="scales"
                    checked={ auto }
                    onChange={ autoPlay }/>
                <label htmlFor="scales">Auto Jokes</label>
            </div>
        </div>
    )
};

export default Jokebox;