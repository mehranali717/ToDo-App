const SearchResults =({query})=>{
    const url = "This/is/url";
    const sliced = url.slice('This/is/'.length,'This/is/url'.length);
    return(
        <p>url{sliced}</p>
    )
}
export default SearchResults