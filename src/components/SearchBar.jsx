
import { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div>
            <input type='text' placeholder='Search' value={searchTerm}>Search</input>
        </div>
    )
}

export default SearchBar