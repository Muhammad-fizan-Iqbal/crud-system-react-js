import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";

function EditPost(props) {
  let history = useHistory();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setId] = useState("");

  function getData() {
    const { id = 0 } = params;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setId(res.data.id);
        setTitle(res.data.title);
        setBody(res.data.body);
      })

      .catch((err) => console.log("wrong"));
  }
  useEffect(() => {
    getData();
  }, []);

  function updatePost(e) {
    e.preventDefault();
    const item = { id: userId, title, body };
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${userId}`, { item })
      .then((res) => console.log(res.data));
    history.push("/");
  }
  return (
    <>
      <form>
        <h3>Id : </h3>{" "}
        <input
          type="text"
          value={userId}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <br />
        <h3>Title : </h3>{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <h3>Body : </h3>{" "}
        <textarea
          value={body}
          type="text"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button onClick={(e) => updatePost(e)}>Update Data</button>
      </form>
    </>
  );
}
export default withRouter(EditPost);
