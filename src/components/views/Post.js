import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PostEdit } from "../PostEdit";
import { deletePost, getPost } from "../helpers/getPosts";

export const Post = () => {
  const { postId } = useParams();

  const [post, setPost] = useState([]);
  const [select, setSelect] = useState();
  useEffect(() => {
    getPost(postId).then(setPost);
  }, [postId]);

  return (
    <>
      <div className="post__container container">
        <h1 className="post__h1">{post.title}</h1>
        <h2 className="post__h2">{post.body}</h2>
        <Link to={"/"} className="link">
          Atrás
        </Link>
        <button
          className="btn bg-green"
          onClick={(e) => {
            e.preventDefault();

            setSelect(post.id);
          }}
        >
          editar
        </button>
        {post.id === select && <PostEdit postId={select} />}
        <button
          className="btn bg-red"
          onClick={(e) => {
            e.preventDefault();
            deletePost(post.id);
          }}
        >
          eliminar
        </button>
      </div>
    </>
  );
};
