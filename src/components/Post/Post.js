import React from "react";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import UserNameString from "../UserNameString/UserNameString";

function Post(data) {
  return (
    <div className="card rounded p-3 mb-3 pb-2">
      <div className="flex">
        <UserProfileImage user={data.user} />
        <div className="pl-5">
          <span>
            <UserNameString user={data.user} />
          </span>
          <span className="pl-2">{data.activity}</span>
          {data.activity_add &&
            data.activity_add.map((info) => (
              <span className={`pl-2 ${info.isBold ? "font-bold" : ""}`}>
                {info.text}
              </span>
            ))}
        </div>
      </div>
      <p className="mt-3 mb-0">{data.postContent}</p>

      {data.postImage && (
        <img src={data.postImage} alt="Landing Background" className="w-full" />
      )}

      <div className="post-footer flex justify-between pt-2">
        <div className="flex items-center">
          {data.reactions.map((info, i) => (
            <div className="flex items-center pr-4">
              <p className="mr-2 mb-0">{info.reaction}</p>{" "}
              <p className="text-xs mb-0">{info.count}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <p className="mb-0 text-xs text-dark-gray pt-1">{`${
            data.comments.length
          } comment${data.comments.length === 1 ? "" : "s"}`}</p>
          <p className="ml-4 mb-0 text-xs text-dark-gray pt-1">{`${
            data.shares
          } share${data.shares === 1 ? "" : "s"}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
