import React, { useEffect } from "react";
import { getPostFilters, getRecentPosts } from "../../utils/ApiHelper";
import ApiClient from "../../utils/ApiClient";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { ReactComponent as Check } from "bootstrap-icons/icons/check.svg";
import UserNameString from "../UserNameString/UserNameString";
import Post from "../Post/Post";

function RecentPostsSection() {
  const [newPosts, setNewPosts] = React.useState(null);
  const [postFilters, setPostFilters] = React.useState(null);

  const getRecentUserPosts = async () => {
    try {
      const response = await getRecentPosts();
      console.log(response);
      setNewPosts(response.recentPosts);
    } catch (apierror) {
      const client = new ApiClient();
      client.processError(apierror);
    }
  };

  const getUserPostFilters = async () => {
    try {
      const response = await getPostFilters();
      console.log(response);
      setPostFilters(response.filters);
    } catch (apierror) {
      const client = new ApiClient();
      client.processError(apierror);
    }
  };

  useEffect(() => {
    getUserPostFilters();
    getRecentUserPosts();
  }, []);

  return (
    <>
      <div className="card rounded px-3 mb-3 d-flex flex-row justify-between items-center user-posts-ctr">
        <div className="text-sm font-bold py-4 filter-header">
          All Updates
          <span className />
        </div>
        <div />
      </div>
      {newPosts === null ? (
        <div className="card rounded p-3">
          <img
            src="loader.svg"
            alt="loading"
            className="loader my-15 mx-auto"
          />
        </div>
      ) : (
        newPosts.map((data) => <Post {...data} />)
      )}
    </>
  );
}

export default RecentPostsSection;
