const initState = {
    filters: {
        search: '',
        status: 'all',
        priority: [],
    },
    todoList: [
        { id: 1, name: 'Learn React', completed: false, prority: 'Medium' },
        { id: 1, name: 'Learn React', completed: true, prority: 'Medium' },
        { id: 1, name: 'Learn React', completed: false, prority: 'Medium' },
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    { id: 5, name: 'Learn football', completed: false, prority: 'Medium' }
                ]
            }

        default:
            return state;
    }
}

export default rootReducer;