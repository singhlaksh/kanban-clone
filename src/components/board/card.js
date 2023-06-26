import React, { useState } from "react";
import PropTypes from "prop-types";
import './boardList.css';
import dot from '../assest/dot.svg';
import message_box from '../assest/message_box.svg';
import files_img from '../assest/files_img.svg';

const Card = ({ id, tag, title, text, status, image, avatar, comments, files }) => {
  const [onHold, setOnHold] = useState(false);

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("cardInfo", JSON.stringify({ id, status }));
    e.target.className += " ohhold";
    setTimeout(() => {
      setOnHold(true);
    }, 0);
  };

  const dragEndHandler = () => {
    setOnHold(false);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "card") {
      setTimeout(() => {
        e.target.className = "card anotherCardOnTop";
      }, 0);
    }
  };

  const onDragLeaveHandler = (e) => {
    resetClassName(e);
  };

  const onDropHandler = (e) => {
    resetClassName(e);
    /**  
     TODO: Remove all anotherCardOnTop classnames 
     from DOM after drop complete.
    */
  };

  const resetClassName = (e) => {
    e.preventDefault();
    let isCard =
      e.target.className === "card" ||
      e.target.className === "card anotherCardOnTop";
    if (isCard) {
      setTimeout(() => {
        e.target.className = "card";
      }, 0);
    }
  };

  return (
    <>
      <div
        id={id}
        className={`card ${onHold ? "hidden" : ""}`}
        draggable="true"
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
        onDrop={onDropHandler}
      >
        <div className="tag_container">
          <div className={`cardTag ${tag.toLowerCase()}`}>
            {tag}
          </div>
          <div>
            <img src={dot} alt="dot" />
          </div>
        </div>
        <div className="cardTitle">{title}</div>
        {!!text && (
          <div className="cardText">
            {text}
          </div>
        )}
        <div className="image-container">
          {image && image.length > 0 && image.map((i) => <img src={i} key={i} className="cardImage" alt="card image" />)}
        </div>
        <div className="footer">
          <div className="avatar-container">
            {avatar && avatar.length > 0 && avatar.map((i) => <img src={i} key={i} className="avatarImage" alt="avatar" />)}
          </div>
          <div>
            <img src={message_box} alt="message box" />
            <span>{comments} comments</span>
          </div>
          <div>
            <img src={files_img} alt="files image" />
            <span>{files} files</span>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  status: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string),
  avatar: PropTypes.arrayOf(PropTypes.string),
  comments: PropTypes.number.isRequired,
  files: PropTypes.number.isRequired
  };
  
  export default Card;
