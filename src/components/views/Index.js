import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostEdit } from "../PostEdit";
import { deletePost, getPosts } from "../helpers/getPosts";

export const Index = () => {
  const [posts, setPosts] = useState([]);
  const [select, setSelect] = useState();

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  console.log("posts", posts);
  return (
    <div className="posts__container container">
      {posts?.map((post) => (
        <div key={post.id} className="post__container">
          <div className="title__container">
            <h1 className="post__h1">{post.title}</h1>
          </div>

          <h2 className="post__h2">{post.body}</h2>

          <Link to={`posts/${post.id}`} className="link">
            Ver Artículo
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
      ))}
    </div>
  );
};
