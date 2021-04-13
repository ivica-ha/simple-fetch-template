import React, {useState} from "react";

export default function Search({onHandleSubmit}) {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (query) => {
        handleChange(query)
    }

    return (
        <div>
            <form onSubmit={(event) => onHandleSubmit(event, query)}>
                <input onChange={(event) => handleSubmit(event)} type='text'/>
                <input type='submit' value='Search'/>
            </form>
        </div>
    )
}