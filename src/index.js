import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Switch, Route } from 'react-router-dom';
import App from "./App/App";

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,
  document.getElementById("root"));