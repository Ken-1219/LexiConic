import React, { useContext, useState } from "react";
import './css/SearchBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DataContext from "./Context/createContext";

const SearchBar = () => {
    const [newInput, setNewInput] = useState('');

    const { fetchData } = useContext(DataContext);
    
    const handleSearch = () => {
        if(newInput === '' || newInput === ' '){
            return;
        }
        fetchData(newInput);
        setNewInput('');
    };

    const handleEnter = (event)=>{
        if(event.key === 'Enter'){
            handleSearch();
        }
    };

    return (
        <div className="search_div">
            <input
                className="search_bar"
                placeholder="Enter a word"
                value={newInput}
                onChange={(e) => setNewInput(e.target.value)}
                onKeyUp={handleEnter}>
            </input>


            <button
                className="search_btn" onClick={handleSearch}>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="lg"
                    style={{ color: "rgb(131, 169, 239)", }}
                />
            </button>
        </div>
    )
}

export default SearchBar;