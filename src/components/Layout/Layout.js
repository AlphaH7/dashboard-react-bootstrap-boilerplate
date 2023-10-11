import React from "react";
import { ReactComponent as ColumnsGap } from "bootstrap-icons/icons/columns-gap.svg";
import { ReactComponent as SearchIcon } from "bootstrap-icons/icons/search.svg";
import LeftPane from "../LeftPane/LeftPane";

const SamplePage = (props) => {
  return (
    <div className="main-layout">
      <header className="py-1 bg-primary text-secondary flex flex-row justify-between items-center px-2 nav-ctr">
        <div className="flex flex-row items-center">
          <div className="nav-logo" />
          <ColumnsGap className="text-white ml-15 glow-on-hover" />
          <a className="nav-routes text-sm font-normal text-white mr-10 ml-15">
            Home
          </a>
          <a className="nav-routes text-sm font-normal text-white mx-10">
            Features
          </a>
          <a className="nav-routes text-sm font-normal text-white mx-10">
            More
          </a>
        </div>
        <div className="global-search-ctr">
          <input
            className="global-search px-10 py-6"
            placeholder="Enter your search here..."
          />
          <SearchIcon className="text-primary search-icon" />
        </div>
        <div>
          <button class="btn btn-secondary text-white text-xs" type="button">
            Login
          </button>
        </div>
      </header>
      <div className="flex flex-row main-view-ctr">
        <LeftPane />

        <div className="main-view">
          <div className="col-md-11 col-sm-12">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
