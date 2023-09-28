import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles.css'
import {Provider} from "react-redux";
import {store} from "./store";
import i18n from './i18n';
import './i18n'
import {I18nextProvider} from "react-i18next";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Suspense fallback={<div>Loading...</div>}>
                <I18nextProvider i18n={i18n}>
                    <BrowserRouter>
                       <App/>
                    </BrowserRouter>
                </I18nextProvider>
            </Suspense>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
