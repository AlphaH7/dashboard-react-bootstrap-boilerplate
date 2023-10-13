import React, { useEffect } from "react";
import { getPostFilters, getRecentPosts } from "../../utils/ApiHelper";
import ApiClient from "../../utils/ApiClient";
import UserProfileImage from "../UserProfileImage/UserProfileImage";

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
        <div>test</div>
      </div>
      {newPosts === null ? (
        <div className="card rounded p-3">
          <img src="loader.svg" alt="loading" className="loader my-15 mx-auto" />
        </div>
        ) : (
          newPosts.map((data) => (
            <div className="card rounded p-3 mb-3 pb-2">
              <div className="flex">
                <UserProfileImage user={data.user} />
                <div className="pl-5">
                  <span>
                    {data.user.name}
                  </span>  
                  <span className="pl-2">{data.activity}</span>
                  {data.activity_add && data.activity_add.map(
                    info => (
                      <span className={`pl-2 ${info.isBold ? 'font-bold' : ''}`}>{info.text}</span>
                    )
                  )}
                </div>
              </div>
              <p className="mt-3 mb-0">
                {data.postContent}
              </p>
              <div className="post-footer flex justify-between pt-2">

                <div className="flex items-center">
                  {
                    data.reactions.map(
                      (info, i) => (
                        <div className="flex items-center pr-4">
                          <p className="mr-2 mb-0">{info.reaction}</p> <p className="text-xs mb-0">{info.count}</p>
                        </div>
                      )
                    )
                  }
                </div>

                <div></div>

              </div>
            </div>
          ))
        )}
    </>
  );
}

export default RecentPostsSection;