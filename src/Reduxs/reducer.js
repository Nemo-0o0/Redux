import { combineReducers } from "redux";

import FiltersReducer from "../components/Filters/FiltersSlice";
import TodoSliceReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: FiltersReducer(state.filters, action),
//         todoList: TodoSliceReducer(state.todoList || undefined, action),
//     }
// }

const rootReducer = combineReducers({
    filters: FiltersReducer,
    todoList: TodoSliceReducer,
});

export default rootReducer;