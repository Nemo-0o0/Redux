import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const TodoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => {
        return todoList.filter((todo) => {
            const matchesSearchText = todo.name.toLowerCase().includes(searchText.toLowerCase());
            const matchesPriority = priorities.length === 0 || priorities.includes(todo.priority);

            // if (status === 'All') {
            //     return matchesSearchText && matchesPriority;
            // }

            // return matchesSearchText && matchesPriority && (status === 'Completed' ? todo.completed : !todo.completed);

            switch (status) {
                case 'Completed':
                    return matchesSearchText && matchesPriority && todo.completed;
                case 'Todo':
                    return matchesSearchText && matchesPriority && !todo.completed;
                case 'All':
                default:
                    return matchesSearchText && matchesPriority;
            }
        });
    }
);
