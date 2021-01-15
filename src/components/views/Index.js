import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../helpers/getPosts";
import { Title } from "../Title";
import { Buttons } from "../actions/Buttons";
import { Body } from "../Body";
import { Post } from "./Post";

export const Index = () => {
  const [posts, setPosts] = useState([]);
  const [select, setSelect] = useState();

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts.reverse());
    });
  }, []);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setSelect(id);
  };
  return (
    <>
      <div className="d-center">
        <Link to={"/create"} className="link__create">
          Create
        </Link>
      </div>
      <div className="posts__container container">
        {posts?.map((post) => (
          <div key={post.id} className="post__container">
            <Title title={post.title} />
            <Body body={post.body} />
            <Link to={`posts/${post.id}`} className="link">
              Ver Artículo
            </Link>
            <Buttons id={post.id} handleEdit={handleEdit} select={select} />
          </div>
        ))}
      </div>
    </>
  );
};
