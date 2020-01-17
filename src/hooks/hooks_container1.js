import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/contex'

const HooksContainer1 = () => {
    const context = useContext(Context)

    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue] = useState('')

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    useEffect(() => {
        setTimeout(() => setUseEffectValue('useEffect Worked'), 3000);
    }, [stateValue])

    const incrementValue = () => {
        setValue(stateValue + 1)
    }

    const decrementValue = () => {
        setValue(stateValue - 1)
    }

    const changeUseEffectValue = () => {
        setUseEffectValue('Some String')
    }

    const handleDispatchTrue = () => {
        //dispatch(ACTIONS.SUCCESS)
        //dispatch(type: 'SUCCESS')
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure())
    }

    return (
        <div>
            React Hooks
            <br />
            <button onClick={() => incrementValue()}>Inc Local State</button>
            <button onClick={() => decrementValue()}>Dec Local State</button>
            <button onClick={() => changeUseEffectValue()}>Change Use Effect</button>
            <button onClick={() => handleDispatchTrue()}>Dispatch True</button>
            <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
            <button onClick={() => context.addGlobalValue()}>Inc Global State</button>
            <button onClick={() => context.decGlobalValue()}>Dec Global State</button>
            <button onClick={() => context.dispatchContextTrue()}>Dispatch Global True</button>
            <button onClick={() => context.dispatchContextFalse()}>Dispatch Global False</button>
            <br />
            <div>
                <p>Local State: {stateValue}</p>
                <br />
                <p>Global State: {context.valueGlobalState}</p>
                <br />
                {useEffectValue ? <p>{useEffectValue}</p> : <p> No Value </p>}
                <br />
                {context.useContextSubmit
                ? <p>{context.useContextSubmit}</p>
                : <p>No User Text</p>}
                {context.reducerGlobalState ? <p>State Prop 2 is True</p> : <p> State Prop 2 is False </p>}
                <br />
                {state.stateprop1
                    ? <p>State Prop 1 is True</p>
                    : <p>State Prop1 is False</p>}
            </div>
        </div>
    )
}


export default HooksContainer1
