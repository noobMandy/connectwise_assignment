import React from "react";
import Draggable from "react-draggable";
import './DraggableComponent.css';

const DraggableComponent = ({ children }) => {
  return (
    <Draggable>
      <div className="draggable-box">
        <div className="title-bar">Title</div>
        {children}
      </div>
    </Draggable>
  );
};

export default DraggableComponent;
