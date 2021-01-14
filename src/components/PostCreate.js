import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../routes/hooks/useForm";
import { createPost } from "./helpers/getPosts";

export const PostCreate = () => {
  const [create, setCreate] = useState(false);
  const [formValues, handleInputChange] = useForm({
    title: "",
    body: "",
  });
  const { title, body } = formValues;

  const [post, setPost] = useState();
  console.log(post, "create");

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
    createPost(formValues).then(setPost);
    setCreate(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleCreate} className="form">
        <h2 className="post__edit-h2">Title: </h2>
        <input
          className="input"
          type="text"
          onChange={handleInputChange}
          name="title"
          value={title}
        />
        <h2 className="post__edit-h2">Body: </h2>
        <textarea
          className="textarea"
          type="text"
          onChange={handleInputChange}
          name="body"
          value={body}
        />
        <button className="btn bg-green">Crear</button>
      </form>
      {create && (
        <div className="post__container container">
          <h1 className="post__h1">{post?.title}</h1>
          <h2 className="post__h2">{post?.body}</h2>
          <Link to={"/"} className="link">
            Inicio
          </Link>
        </div>
      )}
    </div>
  );
};
