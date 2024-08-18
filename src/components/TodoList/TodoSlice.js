const initState = [
    { id: 1, name: 'Learn React', completed: false, priority: 'High' },
    { id: 2, name: 'Learn Javascript', completed: true, priority: 'Medium' },
    { id: 3, name: 'Learn Html,Css', completed: false, priority: 'Low' },
]

const TodoSliceReducer = (state = initState, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default TodoSliceReducer;