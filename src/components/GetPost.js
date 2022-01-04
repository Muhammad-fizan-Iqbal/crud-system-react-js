import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class GetPost extends Component {
  state = {
    posts: [],
    title: "",
    body: "",
  };

  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => console.log("wrong"));
  };
  // handleclick = (items) => {
  //   this.props.history.push("/edit", {
  //     id: items.id,
  //     title: items.title,
  //     body: items.body,
  //   });
  // };
  render() {
    return (
      <>
        <table border="10">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {this.state.posts.map((items) => (
              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.title}</td>
                <td>{items.body}</td>
                <td>
                  <Link to={"/edit/" + items.id}>Edit</Link>
                </td>
                <td>
                  <Link to={"/delete/" + items.id}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default withRouter(GetPost);
