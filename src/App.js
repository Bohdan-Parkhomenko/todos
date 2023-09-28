import './App.css';
import TodoList from './pages/TodoList';
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import i18n, {locales} from './i18n';
import {useEffect} from 'react';
import {useRoutes} from "react-router-dom";


const element = ([
    {
        path: "/:lang?",
        element: <LanguageSelection/>,
        children: [
            {
                path: "todolist",
                element: <TodoListWithLang/>,
            },
            {
                path: "test",
                children:[
                    {
                        path: "new",
                        element: <div>some new</div>
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ],
    },
    {
        path: "*",
        element: <LanguageSelection/>,
    },
]);


function App() {


    useEffect(() => {
        const url = window.location.href; // требя запам'ятати крута штука. повертає повний URL (адресу) в стрінгу
        const langRegex = new RegExp(`/(${locales.join('|')})`, 'i'); // Регулярний вираз з мої ВСІХ мов
        const match = url.match(langRegex); // Перевірка, чи є в URL мова

        //match[1] буде містити значення першої групи за збігом, тобто значення, яке відповідає виразу (${locales.join('|')}).
        if (match && match[1]) {
            const lang = match[1]; // Отримання знайденої мови з URL
            i18n.changeLanguage(lang); // Зміна мови за допомогою i18n
        } else {
            const defaultLang = 'en';
            window.location.href = url.replace(/\/\w+\//, `/${defaultLang}/`);
            i18n.changeLanguage('en'); // За замовчуванням встановлюємо англійську мову
        }
    }, []);


    return useRoutes(element)
}


function LanguageSelection() {

    const {lang} = useParams();
    const location = useLocation()
    //для изменения силки
    const navigate = useNavigate();

    // запускается при обнавление или запуске сайта смотрит на парамерт lang и ишет язие если нет то дефолт англ
    useEffect(() => {
        for (let i = 0; locales.length > i; i++) {
            if (locales[i] === lang) {
                i18n.changeLanguage(`${lang}`)
                return
            }
        }

        const containsPath = element[0].children.some(child => child.path === location.pathname.split('/')[1]);

        if (containsPath) {
            navigate(`/${i18n.language}${location.pathname}`);
        } else {
            navigate(`/${i18n.language}/${location.pathname.split("/").filter(item => item !== "").slice(1).join("/")}`);
            i18n.changeLanguage('en')
        }
    }, [lang, location.pathname]);

    //для обработки кнопки
    const changeLanguage = (newLang) => {
        if (locales.includes(newLang)) {
            i18n.changeLanguage(newLang)
            navigate(`/${newLang}`);
        }
    };

    return (
        <div>


            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ua')}>Ukrainian</button>

            <div>
                <Link to={`/${lang}/todolist`}>TodoList</Link>
            </div>

            <div>
                <h1>{lang}</h1>
            </div>
            <Outlet/>
        </div>
    );
}


function TodoListWithLang() {
    return (
        <TodoList/>
    );
}

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${i18n.language}`);
    }, [])

    return (
        404
    );
}

export default App;
