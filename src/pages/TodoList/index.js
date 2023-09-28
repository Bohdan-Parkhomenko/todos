import TodoListComponent from "./TodoListComponent";
import {useState, useEffect} from "react";
import {filterHandlers, filters} from "../../utils/filters";
import {Outlet} from "react-router-dom";


const API_URL = "https://641468d39172235b8694070a.mockapi.io/api/v1/";

const TaskDTO = {
    id: "",
    completed: false,
    title: "",
};


const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL + "items");
            const data = await response.json();
            const tasks = data.map((task) => {
                const taskDTO = {...TaskDTO};
                taskDTO.id = task.id;
                taskDTO.completed = task.completed;
                taskDTO.title = task.title;
                return taskDTO;
            });
            setTodos(tasks);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleTodoCreate = async (event) => {
        try {
            const newTodo = {
                id: Date.now(),
                title: event,
                completed: false,
            };
            const response = await fetch(API_URL + "items", {
                method: "POST",
                body: JSON.stringify(newTodo),
                headers: {"Content-Type": "application/json"},
            });
            const data = await response.json();
            const taskDTO = {...TaskDTO};
            taskDTO.id = data.id;
            taskDTO.completed = data.completed;
            taskDTO.title = data.title;
            setTodos([...todos, taskDTO]);
        } catch (error) {
            console.error(error);
        }
    };

    const onEditSubmit = async (updatedTodo) => {
        try {
            await fetch(API_URL + "items/" + updatedTodo.id, {
                method: "PUT",
                body: JSON.stringify(updatedTodo),
                headers: {"Content-Type": "application/json"},
            });
            const index = todos.findIndex((obj) => obj.id === updatedTodo.id);
            const newArray = [...todos];
            newArray[index] = {...newArray[index], ...updatedTodo};
            setTodos(newArray);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveTodo = async (id) => {
        try {
            await fetch(API_URL + "items/" + id, {method: "DELETE"});
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const clearCompleted = async (arr) => {
        try {
            for (let i = 0; arr.length > i; i++) {
                await fetch(API_URL + "items/" + arr[i].id, {method: "DELETE"});
            }
            setTodos(todos.filter(filterHandlers[filters.active]));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>

            <TodoListComponent
                todos={todos}
                setTodos={setTodos}
                onTodoCreate={handleTodoCreate}
                onRemoveTodo={handleRemoveTodo}
                clearCompleted={clearCompleted}
                onEditSubmit={onEditSubmit}

            />
        </>
    );
};

export default TodoList;
