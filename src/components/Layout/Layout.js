import React from "react";
import { ReactComponent as ColumnsGap } from "bootstrap-icons/icons/columns-gap.svg";
import { ReactComponent as SearchIcon } from "bootstrap-icons/icons/search.svg";
import LeftPane from "../LeftPane/LeftPane";

const SamplePage = (props) => {
  return (
    <div className="main-layout">
      <header className="py-1 bg-primary text-secondary flex flex-row justify-between items-center px-2 nav-ctr">
        <div className="flex flex-row items-center">
          <div className="nav-logo animate-from-top" />
          <ColumnsGap className="d-none d-md-block text-white ml-15 glow-on-hover animate-on-load" />
          <a className="d-none d-md-block nav-routes text-sm font-normal text-white mr-10 ml-15 animate-on-load">
            Home
          </a>
          <a className="d-none d-md-block nav-routes text-sm font-normal text-white mx-10 animate-on-load">
            Features
          </a>
          <a className="d-none d-md-block nav-routes text-sm font-normal text-white mx-10 animate-on-load">
            More
          </a>
        </div>
        <div className="global-search-ctr animate-on-load d-none d-md-block">
          <input
            className="global-search px-10 py-6"
            placeholder="Enter your search here..."
          />
          <SearchIcon className="text-primary search-icon" />
        </div>
        <div className="animate-on-load">
          <button className="btn btn-secondary text-white text-xs" type="button">
            Login
          </button>
        </div>
      </header>
      <div className="flex flex-row main-view-ctr">
        <LeftPane />

        <div className="main-view mx-md-3 p-sm-10">
          <div className="col-md-11 col-sm-12">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
