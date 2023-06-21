import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/configStore';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeTemplate from './Template/HomeTemplate';
import { createBrowserHistory } from 'history'
import Register from './pages/Register';
export const customNavigate = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={customNavigate}>
      <HomeTemplate></HomeTemplate>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

