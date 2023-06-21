import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/configStore';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeTemplate from './Template/HomeTemplate';
import { createBrowserHistory } from 'history'
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import Order from './pages/Order';
export const customNavigate = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={customNavigate}>
      <Routes>
        <Route path='/' element={<HomeTemplate></HomeTemplate>}>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/update' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

