import { useState } from "react";

export const useForm = (initialValue = {}) =>{
    const [values, setValues] = useState(initialValue);


    const handleChange = (e) =>{(prevValue) =>{
        const {name, value} = e.target
        setValues({
            ...prevValue,
            [name]: value
        })
    }}
    const handleReset = () =>{
        setValues(initialValue);
    }

    return {
        values,
        setValues,
        handleChange,
        handleReset
    }
}