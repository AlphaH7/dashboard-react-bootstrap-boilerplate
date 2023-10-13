import React, { useEffect } from "react";
import { getPostFilters, getRecentPosts } from "../../utils/ApiHelper";
import ApiClient from "../../utils/ApiClient";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { ReactComponent as Check } from "bootstrap-icons/icons/check.svg";

function UserNameString(props) {
  return (
    <>
      <span className="font-bold">{props.user.name}</span>
      {props.user.isVerified && <Check className="user-string-check" />}
      {props.user.isProMember && (
        <span>
          <div className="pro-member-badge">{"Pro Member"}</div>
        </span>
      )}
    </>
  );
}

export default UserNameString;
