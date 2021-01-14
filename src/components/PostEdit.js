import React from "react";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import { editPost } from "../helpers/getPosts";

export const PostEdit = ({ postId }) => {
  const [formValues, handleInputChange] = useForm({
    title: "",
    body: "",
  });
  const { title, body } = formValues;

  let setPost = [];

  const handleCreate = (e) => {
    e.preventDefault();
    const { title, body } = formValues;
    if (title.length < 3) {
      Swal.fire("Error", "Título debe ser mayor a 3 carácteres", "error");
      return;
    }
    if (body.length < 10) {
      Swal.fire("Error", "Body debe ser mayor a 10 carácteres", "error");
      return;
    }
    editPost(postId, formValues).then(setPost);
  };

  return (
    <>
      <form onSubmit={handleCreate} className="form">
        <h2 className="post__edit-h2">Title: </h2>
        <input
          type="text"
          className="input"
          onChange={handleInputChange}
          name="title"
          value={title}
        />
        <h2 className="post__edit-h2">Body: </h2>
        <input
          type="text"
          className="textarea"
          onChange={handleInputChange}
          name="body"
          value={body}
        />
        <button className="btn">Editar</button>
      </form>
    </>
  );
};
