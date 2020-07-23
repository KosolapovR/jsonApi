import React from "react";
import { useParams } from "react-router-dom";

export default function EditPostPage(props) {
  const { id } = useParams();

  return <div>EditPostPage {id}</div>;
}
