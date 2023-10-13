import React from "react";

function GroupProfileImage(props) {
  return (
    <div className="image-ctr">      
      <div className="dp-ctr">
        <div className="hexagon hexagon1">
          <div className="hexagon-in1">
            <div
              className="hexagon-in2"
              style={{ backgroundImage: `url(${props.group.user_image})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupProfileImage;
