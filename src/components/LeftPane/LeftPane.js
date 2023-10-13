import React, { useState } from "react";
import { ReactComponent as First } from "bootstrap-icons/icons/exclude.svg";
import { ReactComponent as Second } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as Third } from "bootstrap-icons/icons/person-vcard.svg";
import { ReactComponent as Fourth } from "bootstrap-icons/icons/stars.svg";
import { ReactComponent as Fifth } from "bootstrap-icons/icons/basket.svg";

const LeftPane = (props) => {
  const [selectedPane, setSelectedPane] = useState(1);

  return (
    <div className="left-pane-ctr flex flex-col">
      <div className="selector-ctr" style={{transform: `translateY(${(selectedPane - 1) * 100}%)`}}>
        <div className="selector" />
      </div>
      <div
        className={`pane-element w-full pt-2 animate-on-load ${selectedPane === 1 ? 'active' : ''}`}
        onClick={() => {
          setSelectedPane(1);
        }}
      >
        <First />
      </div>
      <div
        className={`pane-element w-full pt-2 animate-on-load ${selectedPane === 2 ? 'active' : ''}`}
        onClick={() => {
          setSelectedPane(2);
        }}
      >
        <Second />
      </div>
      <div
        className={`pane-element w-full pt-2 animate-on-load ${selectedPane === 3 ? 'active' : ''}`}
        onClick={() => {
          setSelectedPane(3);
        }}
      >
        <Third />
      </div>
      <div
        className={`pane-element w-full pt-2 animate-on-load ${selectedPane === 4 ? 'active' : ''}`}
        onClick={() => {
          setSelectedPane(4);
        }}
      >
        <Fourth />
      </div>
      <div
        className={`pane-element w-full pt-2 animate-on-load ${selectedPane === 5 ? 'active' : ''}`}
        onClick={() => {
          setSelectedPane(5);
        }}
      >
        <Fifth />
      </div>
      <div
        className={`pane-element w-full pt-2 animate-on-load ${selectedPane === 6 ? 'active' : ''}`}
        onClick={() => {
          setSelectedPane(6);
        }}
      >
        <Second />
      </div>
      <div
        className={`pane-element w-full pt-2 animate-on-load ${selectedPane === 7 ? 'active' : ''}`}
        onClick={() => {
          setSelectedPane(7);
        }}
      >
        <Second />
      </div>
    </div>
  );
};

export default LeftPane;
