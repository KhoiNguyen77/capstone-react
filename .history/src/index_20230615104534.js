import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react';
import { store } from './Redux/configStore';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import HomeTemPlate from './Template/HomeTemPlate';
import HomeTemplate from './Template/HomeTemPlate';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter>
      <Routes>
        <Route path='' element={<HomeTemplate></HomeTemplate>}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

