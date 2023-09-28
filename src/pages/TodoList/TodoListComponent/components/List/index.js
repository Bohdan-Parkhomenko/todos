import './styles.css'
import TodoItem from "./components/TodoItem";

const List = ({todos, onRemoveTodo, filterFunction, onEditSubmit}) => {


    if (!todos.length) {
        return null;
    }

    return (
        <ul>
            {todos.filter(filterFunction).map(item =>
                <TodoItem
                    key={item.id}
                    todo={item}
                    onEditSubmit={onEditSubmit}
                    onRemoveTodo={onRemoveTodo}
                />)
            }
        </ul>
    );
}

export default List