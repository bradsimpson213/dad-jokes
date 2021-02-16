// React imports
import React from 'react';
// Custom hooks
import useInputState from "../hooks/useInputState"
// Style imports
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        height: '60%',
        width: '75%',
        border: '2px solid black',
        borderRadius: '15px',
        backgroundColor: 'azure'
    },
    submitform: {
        display: 'flex',
        flexDirection: 'column'
    }
});

const JokeForm = () => {
    const classes = useStyles();
    const [jokeBody, setJokeBody, resetJokeBody] = useInputState();
    const [punchline, setPunchline, resetPunchLine] = useInputState();

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Yay you submitted")
        resetJokeBody()
        resetPunchLine()

    }

    return (
        <div className={ classes.root }>
            <h1>Submit your new jobes here...</h1>
            <form 
                className={ classes.submitForm }
                onSubmit={ handleSubmit }
            >
                <div>
                    <label 
                        for="joktext"
                    >
                        Joke body: 
                    </label>
                    <textarea 
                        name="joketext" 
                        type='text'
                        value={ jokeBody }
                        onChange={ setJokeBody }
                    />
                </div>
                <div>
                    <label 
                        for="punchline" 
                    >
                        Joke body: 
                    </label>
                    <textarea 
                        name="punchline"
                        type="text"
                        value={ punchline }
                        onChange={ setPunchline }
                    />
                </div>
                <button 
                    type="submit"
                >
                    Submit Joke
                </button>
            </form>

        </div>
    )
};

export default JokeForm;