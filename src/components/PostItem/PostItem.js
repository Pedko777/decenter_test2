import React, { useState } from "react";
import Modal from "../Modal/Modal";

const PostItem = ({ postListItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const desc =
    postListItem.body &&
    postListItem.body.split(" ").slice(0, 15).join(" ") + "...";

  return (
    <li
      key={postListItem.id}
      className="posts__list-item"
      onClick={toggleModal}
    >
      <h2 className="posts__list-item-title">{postListItem.title}</h2>
      <p className="posts__list-item-desc">{desc}</p>
      <Modal
        onClose={toggleModal}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={false}
        id={postListItem.id}
      />
    </li>
  );
};

export default PostItem;
