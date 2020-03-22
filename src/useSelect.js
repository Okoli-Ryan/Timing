import React, {useState, useContext} from 'react';
import {CityLocation} from "./App";

export default function useSelect() {

    const {city, dispatch} = useContext(CityLocation);

    const [pickedValue, setPickedValue] = useState(null);

    function handleSubmit (e) {
        dispatch({type: "displayTime", payload: e.target.value})
    }

    const SelectView = ({options}) =>
        <form>
        <select onChange={handleSubmit} value={city || options[0]}>
            {options.map((item, id) => <option value={item} key={id}>{item}</option>)}
        </select>
    </form>

    return {
        SelectView, pickedValue
    }

}