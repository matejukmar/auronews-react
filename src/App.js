import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home'
import Post from './Post'
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';

function App() {

  return (
    <Router>
      <div>
        <Link to="/">Home</Link> | <Link to="/new-post">New Post</Link>
      </div>
      <Switch>
        <Route path="/update-post/:id" component={UpdatePost} />
        <Route path="/new-post/">
          <NewPost />
        </Route>
        <Route path="/post/">
          <Post />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
