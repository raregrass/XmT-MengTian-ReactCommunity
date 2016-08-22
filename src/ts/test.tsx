/*
const todo = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case "TOGGLE_TODO":
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, { completed: !state.completed });
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined, action)
            ];
        case "TOGGLE_TODO":
            return state.map(
                t => todo(t, action)
            );
        default:
            return state;
    }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

let store: Store<any> = createStore(todoApp);

let nextTodoId = 0;

interface Props {
    todos: any[];
}
interface Stats {

}
class TodoApp extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button onClick={
                    () => {
                        store.dispatch({
                            type: "ADD_TODO",
                            text: "Test",
                            id: nextTodoId++
                        });
                    }
                }>
                    Add Todo
                </button>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
*/