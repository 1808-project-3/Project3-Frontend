import * as searchActions from '../actions/search/search.actions';

const initialState = {
    results: [{}]
}

export const searchReducer = (state = initialState, action: any) => {
    const type = action.type;

    if(type === searchActions.SET_SEARCH_RESULTS)
    {
        return{
            ...state,
            searchResults: action.searchResults
        }
    }
    else
    {
        return state;
    }
}
