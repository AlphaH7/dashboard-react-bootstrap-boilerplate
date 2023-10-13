import React, { useEffect } from "react";
import { getNewConnections } from "../../utils/ApiHelper";
import ApiClient from "../../utils/ApiClient";
import UserProfileImage from "../UserProfileImage/UserProfileImage";

function NewMembersSection() {
  const [userConnections, setUserConnections] = React.useState(null);

  const getUserNewConnections = async () => {
    try {
      const response = await getNewConnections();
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
    <div className="card rounded p-3 pb-5">
      {userConnections === null ? (
        <img src="loader.svg" alt="loading" className="loader my-15" />
      ) : (
        <>
          <h2 className="text-md py-2 font-bold">Newest Members</h2>
          <div className=" mt-2">
            {userConnections.map((data) => (
              <div className="mt-3 flex items-center animate-from-top" key={data.user}>
                <div className="pr-4">
                  <UserProfileImage user={data.user} />
                </div>
                <div>
                  <h6 className="font-bold m-0">{data.user.name}</h6>
                  <p className="mb-0">{`@${data.user.user_id}`}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NewMembersSection;
