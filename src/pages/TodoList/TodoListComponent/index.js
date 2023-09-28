import './styles.css'
import CreatTodo from "./components/CreatTodo";
import List from "./components/List";
import Footer from "./components/Footer";
import {useState} from "react";
import {filters, filterHandlers} from "utils/filters";
import React from 'react';
import {useTranslation} from "react-i18next";
import {useNavigate} from 'react-router-dom';
import {locales} from "../../../i18n";

const TodoList = ({todos, setTodos, onTodoCreate, onRemoveTodo, onEditSubmit, clearCompleted}) => {

    const [activeFilter, setActiveFilter] = useState(filters.all);


    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const changeLanguage = (newLang) => {
        if (locales.includes(newLang)) {
            i18n.changeLanguage(newLang)
            navigate(`/${newLang}/todolist`);
        }
    };

    return (
        <div>
            <h1 className="text-default page-title">
                todos
            </h1>
            <div className="todo">
                <CreatTodo
                    onTodoCreate={onTodoCreate}
                    todos={todos}
                    setTodos={setTodos}
                />
                <List
                    onEditSubmit={onEditSubmit}
                    todos={todos}
                    filterFunction={filterHandlers[activeFilter]}
                    onRemoveTodo={onRemoveTodo}
                />
                <Footer
                    todos={todos}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    clearCompleted={clearCompleted}
                />
                <div className="list-language">
                    {t('Language')}:
                    <button
                        className="button-language-change"
                        onClick={() => changeLanguage('ua')}
                    >
                        UA
                    </button>
                    <button
                        className="button-language-change"
                        onClick={() => changeLanguage('en')}
                    >
                        EN
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
