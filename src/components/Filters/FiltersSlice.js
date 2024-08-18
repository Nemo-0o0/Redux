const initState = {
    search: '',
    status: 'all',
    priority: [],
}

const FiltersReducer = (state = initState, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state.filters,
                search: action.payload
            }

        default:
            return state;
    }
}

export default FiltersReducer;