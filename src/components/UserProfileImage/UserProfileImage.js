import React from "react";

function UserProfileImage(props) {
  return (
    <div className="image-ctr">
      <div className="hex-absolute">5</div>
      <div className="dp-ctr">
        <div className="hexagon hexagon1">
          <div className="hexagon-in1">
            <div
              className="hexagon-in2"
              style={{ backgroundImage: `url(${props.user.user_image})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileImage;
