import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsById } from "../../redux/posts/postsOperations";
import SvgClose from "../SVG/Close";
import { getPostsByIdSelector } from "../../redux/posts/postsSelectors";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

const Modal = ({ onClose, onOpen, isOpen, shouldCloseOnOverlayClick, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsById(id));
  }, [dispatch, id]);

  const post = useSelector(getPostsByIdSelector);

  const el = document.createElement("div");

  const outsideRef = useRef(null);

  const handleOverlayClose = (e) => {
    if (
      e.target === outsideRef.current &&
      !shouldCloseOnOverlayClick &&
      onClose
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add("stop-scrolling");
    }
    return function cleanup() {
      document.body.classList.remove("stop-scrolling");
    };
  }, [isOpen]);

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => void modalRoot.removeChild(el);
  }, [isOpen, el]);

  useEffect(() => {
    isOpen && onOpen && onOpen();
  }, [onOpen, isOpen]);

  return ReactDOM.createPortal(
    isOpen ? (
      <div className="modal">
        <div
          className="modal__overlay"
          ref={outsideRef}
          data-testid="overlay"
          onClick={handleOverlayClose}
        />
        <div className="modal__box" onClick={(e) => e.stopPropagation()}>
          <button
            className="modal__close"
            onClick={onClose}
            data-testid="close"
          >
            <SvgClose />
          </button>
          <div className="modal__content">
            <h1 className="modal__content-title">{post.title}</h1>
            <p className="modal__content-desc">{post.body}</p>
          </div>
        </div>
      </div>
    ) : null,
    el,
  );
};

export default Modal;
