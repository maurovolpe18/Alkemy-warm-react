import Swal from "sweetalert2";
import { fetchSinToken } from "./fetch";

export const getPosts = async () => {
  const resp = await fetchSinToken("posts/", {}, "GET");
  const body = await resp.json();
  return body;
};

export const getPost = async (postId) => {
  const resp = await fetchSinToken(`posts/${postId}`, {}, "GET");
  const body = await resp.json();

  return body;
};

export const createPost = async (post) => {
  const resp = await fetchSinToken(`posts/`, post, "POST");
  const body = await resp.json();
  if (body) {
    Swal.fire("Good Job", "Creado correctamente", "success");
  }
  return body;
};

export const editPost = async (postId, post) => {
  const resp = await fetchSinToken(
    `posts/${postId}`,
    { title: post.title, body: post.body },
    "PUT"
  );
  const body = await resp.json();
  console.log(body);
  if (body) {
    Swal.fire("Good Job", "Se editó correctamente", "success");
  }
  return body;
};

export const deletePost = async (postId) => {
  const resp = await fetchSinToken(`posts/${postId}`, {}, "DELETE");
  const body = await resp.json();
  if (body) {
    Swal.fire("Good Job", "Se eliminó correctamente", "success");
  }
  return body;
};
