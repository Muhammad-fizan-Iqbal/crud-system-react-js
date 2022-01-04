import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class AddPost extends Component {
  state = {
    title: "",
    body: "",
    posts: [],
  };

  postUpdate = (e) => {
    e.preventDefault();
    let post = { title: this.state.title, body: this.state.body };
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", post)
      .then((res) => console.log(res.data));
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.postUpdate(e)}>
          <input
            type="text"
            value={this.state.title}
            // defaultValue={props.match.params.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <br />
          <br />
          <textarea
            // defaultValue={props.match.params.title}
            value={this.state.body}
            type="text"
            onChange={(e) => this.setState({ body: e.target.value })}
          ></textarea>

          <br />
          <br />
          <button type="submit">Add Post</button>
        </form>
      </>
    );
  }
}
export default withRouter(AddPost);
