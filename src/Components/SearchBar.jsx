import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function SearchBar({offers, setSearchResults}) {
    const handleSubmit = (e) =>
        e.preventDefault();

    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(offers)

        const resultsArray = offers.filter(post => post.title.includes(e.target.value) || post.author.includes(e.target.value) || post.genre.includes(e.target.value))

        setSearchResults = (resultsArray)
    }

  return (
    <header>
        <form className="search" onSubmit={handleSubmit}>
            <input 
            className="search_input"
            type="text"
            id="search"
            onChange={handleSearchChange}
            />
            <button className="search_button">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </form>
    </header>
  )
}

export default SearchBar