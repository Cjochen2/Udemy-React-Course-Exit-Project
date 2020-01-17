import React, { useState, useReducer, useContext } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_input_hooks_reducer';
import Context from '../utils/contex';

const HooksForm = () => {

    const context = useContext(Context)

    const [valueChange, setValueChange] = useState('')
    const [valueSubmit, setValueSubmit] = useState('')

    const [userState, userDispatch] = useReducer(UserReducer.HooksReducer, UserReducer.initialState)

    const handleStateChange = (event) => {
        event.preventDefault()
        setValueChange(event.target.value)
    }

    const handleStateSubmit = (event) => {
        event.preventDefault()
        setValueSubmit(event.target.useState.value)
    }

    const handleReducerChange = (event) => {
        event.preventDefault()
        userDispatch(ACTIONS.user_input_change(event.target.value))
    }

    const handleReducerSubmit = (event) => {
        event.preventDefault()
        userDispatch(ACTIONS.user_input_submit(event.target.useReducer.value))
    }

    return (
        <div>
            <form onSubmit={handleStateSubmit}>
                <label>React useState: </label>
                <input id='useState' type='text' onChange={handleStateChange} />
                <button type='submit'>Submit</button>
            </form>
            <form onSubmit={handleReducerSubmit}>
                <label>React useReducer: </label>
                <input id='useReducer' type='text' onChange={handleReducerChange} />
                <button type='submit'>Submit</button>
            </form>
            <form onSubmit={context.contextHandleSubmit}>
                <label>React useContext: </label>
                <input id='useContext' type='text' onChange={context.contextHandleChange} />
                <button type='submit'>Submit</button>
            </form>
            <di>
                <h2> React useState: </h2>
                <p> Change: {valueChange}</p>
                <p>Submit: {valueSubmit}</p>
            </di>
            <di>
                <h2> React useReducer: </h2>
                <p> Change: {userState.user_text_change}</p>
                <p>Submit: {userState.user_text_submit}</p>
            </di>
            <di>
                <h2> React useContext: </h2>
                <p> Change: {context.useContextChange}</p>
                <p>Submit: {context.useContextSubmit}</p>
            </di>
        </div>
    )
}

export default HooksForm;