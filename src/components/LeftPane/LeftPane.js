import React from "react";
import { ReactComponent as First } from "bootstrap-icons/icons/exclude.svg";
import { ReactComponent as Second } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as Third } from "bootstrap-icons/icons/person-vcard.svg";
import { ReactComponent as Fourth } from "bootstrap-icons/icons/stars.svg";
import { ReactComponent as Fifth } from "bootstrap-icons/icons/basket.svg";


const LeftPane = (props) => {
  return (
    <div className="left-pane-ctr flex flex-col">
      <div className="pane-element w-full mt-2 animate-on-load">
        <First />
      </div>
      <div className="pane-element w-full mt-2 animate-on-load">
        <Second />
      </div>
      <div className="pane-element w-full mt-2 animate-on-load">
        <Third />
      </div>
      <div className="pane-element w-full mt-2 animate-on-load">
        <Fourth />
      </div>
      <div className="pane-element w-full mt-2 animate-on-load">
        <Fifth />
      </div>
      <div className="pane-element w-full mt-2 animate-on-load">
        <Second />
      </div>
      <div className="pane-element w-full mt-2 animate-on-load">
        <Second />
      </div>
    </div>
  );
};

export default LeftPane;
