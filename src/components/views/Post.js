import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../../helpers/getPosts";
import { Title } from "../Title";
import { Buttons } from "../actions/Buttons";
import { Body } from "../Body";

export const Post = () => {
  const { postId } = useParams();

  const [post, setPost] = useState([]);
  const [select, setSelect] = useState();
  useEffect(() => {
    getPost(postId).then(setPost);
  }, [postId]);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setSelect(id);
  };

  return (
    <>
      <div className="post__container container">
        <Title title={post.title} />
        <Body body={post.body} />
        <Link to={"/"} className="link">
          Atrás
        </Link>
        <Buttons id={post.id} handleEdit={handleEdit} select={select} />
      </div>
    </>
  );
};
