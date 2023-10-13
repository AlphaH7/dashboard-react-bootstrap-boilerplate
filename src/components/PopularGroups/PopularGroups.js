import React, { useEffect } from "react";
import { getGroups } from "../../utils/ApiHelper";
import ApiClient from "../../utils/ApiClient";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import GroupProfileImage from "../GroupProfileImage/GroupProfileImage";

function PopularGroups() {
  const [userConnections, setUserConnections] = React.useState(null);

  const getUserNewConnections = async () => {
    try {
      const response = await getGroups();
      console.log(response.newConnections);
      setUserConnections(response.newConnections);
    } catch (apierror) {
      const client = new ApiClient();
      client.processError(apierror);
    }
  };

  useEffect(() => {
    getUserNewConnections();
  }, []);

  return (
    <div className="card rounded p-3">
      {userConnections === null ? (
        <img src="loader.svg" alt="loading" className="loader my-15" />
      ) : (
        <>
          <h2 className="text-md py-2 font-bold">Popular Groups</h2>
          <div className=" mt-2">
            {userConnections.map((data) => (
              <div className="mt-3 flex items-center animate-from-top" key={data.group}>
                <div className="pr-4">
                  <GroupProfileImage group={data.group} />
                </div>
                <div>
                  <h6 className="font-bold m-0 text-dark-gray">{data.group.name}</h6>
                  <p className="mb-0 text-dark-gray">{`${data.group.associatedFolks} members`}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PopularGroups;
