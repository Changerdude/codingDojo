import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = props => {
    const [term, setTerm] = useState("people");
    const [id, setId] = useState();

    const nav = useNavigate();

    const submitSearch = (e) => {
        e.preventDefault();
        nav(`/${term}/${id}`);
    }

    return (
        <>
            <form onSubmit={submitSearch}>
                <label htmlFor="term">Search for: </label>
                <select name="term" id="term" value={term} onChange={(e) => setTerm(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                </select>
                <label htmlFor="id"> Id: </label>
                <input type="number" name="id" id="id" value={id} onChange={(e) => setId(e.target.value)}/>
                <button type="submit" style={{marginLeft:"5px"}}>Search</button>
            </form>
        </>
    )
}
export default Search