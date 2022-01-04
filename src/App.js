import "./App.css";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import GetPost from "./components/GetPost";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Delete from "./components/Delete";
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Get Post</Link>
        <Link to="/addPost">Add Post</Link>
        <Switch>
          <Route path="/" exact={true}>
            <GetPost />
          </Route>
          <Route path="/addPost">
            <AddPost />
          </Route>
          <Route path="/edit/:id">
            <EditPost />
          </Route>
          <Route path="/delete/:id">
            <Delete />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
