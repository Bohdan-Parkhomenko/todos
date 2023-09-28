import './styles.css'
import {useState} from "react";
import {useTranslation} from "react-i18next";

const CreatTodo = ({onTodoCreate, todos, setTodos}) => {

    const {t} = useTranslation();

    const [todoTitle, setTodoTitle] = useState('')
    const handleKeyDown = (e) => {
        if (e.key !== 'Enter') return;
        if (todoTitle === "") return
        onTodoCreate(todoTitle);

        setTodoTitle("")
    }

    const isAllCompleted = !todos.every(todo => todo.completed === true);
    const handleToggleAll = () => {
        const updatedTodos = todos.map(todo => ({...todo, completed: isAllCompleted}));
        setTodos(updatedTodos)
    }

    const handleTitleChange = (e) => {
        setTodoTitle(e.target.value);
    }

    return (
        <div className="horizontal-layout">
            <button
                className={`button-toggle-all ${(!todos.length && "do-not-show") || ""}`}
                onClick={handleToggleAll}
            >
                <p className={`${isAllCompleted ? "arrow off" : "arrow on"}`}>{"❯"}</p>
            </button>
            <input
                className="new-todo"
                type="text"
                placeholder={t("creatTodo.What needs to be done?")}
                value={todoTitle}
                onChange={handleTitleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}


export default CreatTodo