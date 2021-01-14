import React from "react";
import { deletePost } from "../../helpers/getPosts";
import { PostEdit } from "../PostEdit";

export const Buttons = ({ id, handleEdit, select }) => {
  return (
    <>
      <button className="btn bg-green" onClick={(e) => handleEdit(e, id)}>
        editar
      </button>
      {id === select && <PostEdit postId={select} />}
      <button
        className="btn bg-red"
        onClick={(e) => {
          e.preventDefault();
          deletePost(id);
        }}
      >
        eliminar
      </button>
    </>
  );
};
