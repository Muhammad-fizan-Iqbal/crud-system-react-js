import axios from "axios";
import React, { useEffect } from "react";
import { useParams, withRouter, useHistory } from "react-router-dom";
function Delete() {
  const params = useParams();

  console.log(params);
  let history = useHistory();
  useEffect(() => {
    del();
  });
  function del() {
    const { id = 0 } = params;
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res.data));
    history.push("/");
  }
  return <></>;
}
export default withRouter(Delete);
