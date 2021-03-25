// React imports
import React from 'react';
// Custom hooks
import useInputState from "../hooks/useInputState";
import starterJokes from '../starterdata';
// Style imports
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        height: '60%',
        width: '75%',
        border: '2px solid black',
        borderRadius: '15px',
        backgroundColor: 'azure',
        fontFamily: 'AmaticSC',
        fontWeight: '900'
    },
    submitform: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%'
    },
    formInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 0 15px 0'
    },
    label: {
        fontSize: '2.5rem',
        fontFamily: 'AmaticSC',
        fontWeight: '900'       
    },
    textField: {
        width: '400px'
    },
    button: {
        color: 'white',
        backgroundColor: 'blue',
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
    selectRating: {
        fontSize: '1.5rem',
        margin: '0 0 15px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});



const JokeForm = () => {
    const classes = useStyles();
    const [jokeBody, setJokeBody, resetJokeBody] = useInputState();
    const [punchline, setPunchline, resetPunchLine] = useInputState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newJoke = {
            jokeId: starterJokes.length,
            jokeBody: jokeBody,
            jokePunchline: punchline
        };
        starterJokes.push(newJoke);
        resetJokeBody();
        resetPunchLine();

    }

    return (
        <div className={ classes.root }>
            <h1>Submit your new jokes here...</h1>
            <form 
                className={ classes.submitForm }
                onSubmit={ handleSubmit }
            >
                <div className={ classes.formInput }>
                    <label
                        className={ classes.label } 
                        for="joketext"
                    >
                        Joke body: 
                    </label>
                    <textarea
                        className={ classes.textField } 
                        name="joketext" 
                        type='text'
                        value={ jokeBody }
                        onChange={ setJokeBody }
                    />
                </div>
                <div className={ classes.formInput }>
                    <label 
                        for="punchline"
                        className={ classes.label }  
                    >
                        Punchline: 
                    </label>
                    <textarea
                        className={ classes.textField }  
                        name="punchline"
                        type="text"
                        value={ punchline }
                        onChange={ setPunchline }
                    />
                </div>
                <div className={ classes.selectRating }>
                    <label htmlFor="rating-select">Rating Select: </label>
                    <select 
                        name="rating-select"
                        style={{height: '35px'}}
                    >
                        <option value="G">Rated G</option>
                        <option value="PG">Rated PG</option>
                    </select>
                </div>
                <button
                    className={ classes.button } 
                    type="submit"
                >
                    Submit Joke
                </button>
            </form>

        </div>
    )
};

export default JokeForm;