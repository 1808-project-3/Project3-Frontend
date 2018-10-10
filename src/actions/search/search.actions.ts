export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const setSearchResults = (results:any []) => {
    return {
        payload: {
            searchResults: results
        },
        type: SET_SEARCH_RESULTS
    }
}