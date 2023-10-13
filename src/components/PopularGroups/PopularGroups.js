import React, { useEffect } from "react";
import {
  getNewConnections,
} from "../../utils/ApiHelper";
import ApiClient from "../../utils/ApiClient";

function PopularGroups() {
  const getUserNewConnections = async () => {
    try {
      const response = await getNewConnections();
      console.log(response);
    } catch (apierror) {
      const client = new ApiClient();
      client.processError(apierror);
    }
  };

  useEffect(() => {
    getUserNewConnections();
  }, []);

  return (
    <div className="card rounded p-5">
      <h2 className="text-md">Newest Members</h2>
      <div className=" mt-2">
        <div className="rounded">
          <h6 className="font-bold m-0">Item 1</h6>
          <p>@sandra_stage</p>
        </div>
        <div className="rounded">
          <h6 className="font-bold m-0">Item 2</h6>
          <p>@sandra_stage</p>
        </div>
        <div className="rounded">
          <h6 className="font-bold m-0">Item 3</h6>
          <p>@sandra_stage</p>
        </div>
      </div>
    </div>
  );
}

export default PopularGroups;
