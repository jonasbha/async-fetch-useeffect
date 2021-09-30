

const Search = ({search, setSearch}) => {

    const addSearch = (e) => {
        setSearch(e.currentTarget.value);
    }

    return (
        <section>
            <h1>Search</h1>
            <input onChange={addSearch}></input>
        </section>
    );
}

export default Search;