import './styles.css'
import {filterHandlers, filters} from "utils/filters";
import {useTranslation} from "react-i18next";


const Footer = ({todos, activeFilter, setActiveFilter, clearCompleted}) => {


    const {t} = useTranslation();

    const completedTodos = todos.filter(filterHandlers[filters.active]).length;
    const handleClearCompleted = () => {
        clearCompleted(todos.filter(filterHandlers[filters.completed]))
    }

    if (!todos.length) {
        return null;
    }

    return (
        <div className={`${!todos.length ? "display-none" : "footer"}`}>
            <span className={"span"}>
                <div className="item-left">
                    {completedTodos === 1 ?
                        <div>{t("footer.item left")}</div>
                        :
                        <div>{t("footer.item left")}</div>}
                    : {completedTodos}
                </div>
            </span>
            <ul className={"list-filter"}>
                {Object.values(filters).map((filter) => (
                    <li key={filter}>
                        <button
                            className={activeFilter === filter ? 'filter-todos filter-active' : 'filter-todos'}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {t(`footer.${filter}`)}
                        </button>
                    </li>
                ))}
            </ul>

            <button
                className={`clear-completed ${(completedTodos === todos.length && "do-not-show") || ""}`}
                onClick={handleClearCompleted}
            >
                <div>{t("footer.Clear completed")}</div>
            </button>
        </div>

    );
}

export default Footer;
