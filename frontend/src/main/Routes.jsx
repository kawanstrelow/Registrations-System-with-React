import React from 'react';
import { Routes, Route, Redirect } from 'react-router';
import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

export default props => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/users" element={<UserCrud />} />
    <Route path="*" to={<Home />} />
  </Routes>
);
