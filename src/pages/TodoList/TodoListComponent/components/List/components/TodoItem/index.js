import './styles.css'
import React, {useState} from "react";

const TodoItem = ({todo, onEditSubmit, onRemoveTodo}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [value, setValue] = useState(todo.title);
    const handleTodoRemove = () => {
        onRemoveTodo(todo.id)
    }

    const handleEdit = () => {
        setIsEditable(true);
    }
    const handleTodoCompleteToggle = () => {
        onEditSubmit({...todo, completed: !todo.completed})
    }

    const handleTodoEditSubmit = () => {
        setIsEditable(false);
        if (value === "") {
            onRemoveTodo(todo.id)
        } else {
            onEditSubmit({...todo, title: value})
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    const handleEditCancel = () => {
        setIsEditable(false);
        setValue(todo.title)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleTodoEditSubmit();
        } else if (e.key === 'Escape') {
            handleEditCancel();
        }
    }

    return (
        <div
            className={"horizontal-layout "}
        >
            <button
                className={`toggle-icon ${(isEditable ? 'do-not-show ' : '')}` + "checkmark " + (todo.completed ? "checked" : "")}
                onClick={handleTodoCompleteToggle}>
            </button>
            {!isEditable ? (
                <p
                    className={"list-todos " + (todo.completed ? "list-todo-completed" : "list-todo-not-completed")}
                    onDoubleClick={handleEdit}
                >
                    {value}
                </p>
            ) : (
                <input
                    className="list-todos"
                    autoFocus={true}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleTodoEditSubmit}
                    onKeyDown={handleKeyDown}
                />
            )}

            <button
                className={"todo-delete-icon"}
                onClick={handleTodoRemove}
            >
                ×
            </button>
        </div>)
}

export default TodoItem