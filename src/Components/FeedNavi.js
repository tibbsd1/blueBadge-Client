import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  Button,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from "reactstrap";
import "../App.css";
import { Route, Link, Switch } from "react-router-dom";

import UploadTrack from "./UploadTrack";
import Feed from "./Feed";
import MyTracks from "./MyTracks";

const FeedNavi = props => {
  return (
    <div>
      <div className="navigation-styling">
        <ul>
          <li>
            <Link to="./UploadTrack">
              <Button color="success" size="lg">
                Upload
              </Button>
            </Link>
          </li>
          <Link to="./MyTracks">
            <Button color="success" size="lg">
              My Tracks
            </Button>
          </Link>

          <Link to="./Feed">
            <Button color="success" size="lg">
              Feed
            </Button>
          </Link>
          <Button onClick={props.clickLogout} color="success" size="lg">
            Log Out
          </Button>
        </ul>
      </div>
      <div className="navi-routes">
        <Switch>
          <Route exact path="/">
            <Feed token={props.token} />
          </Route>
          <Route exact path="/UploadTrack">
            {/* <div>Hello</div> */}
            <UploadTrack token={props.token} />
          </Route>
          <Route exact path="/Feed">
            <Feed token={props.token} />
          </Route>
          <Route exact path="/MyTracks">
            <MyTracks token={props.token} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default FeedNavi;
