const initState = {
    filters: {
        search: '',
        status: 'all',
        priority: [],
    },
    todoList: [
        { id: 1, name: 'Learn React', completed: false, priority: 'Medium' },
        { id: 1, name: 'Learn React', completed: true, priority: 'Medium' },
        { id: 1, name: 'Learn React', completed: false, priority: 'Medium' },
    ]
}

const rootReducer = (state = initState, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }

        default:
            return state;
    }
}

export default rootReducer;