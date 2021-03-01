import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="container p-3" style={{ background: "lightgrey" }}>
      <h1 className="title">Microblog</h1>
      <p className="lead">Get in the rhythm of blogging</p>
      <NavLink exact to="/">
        <div type="button" className="btn btn-outline-primary mx-1">
          Blog
        </div>
      </NavLink>
      <NavLink exact to="/new">
        <div type="button" className="btn btn-outline-primary mx-1">
          Add a new post
        </div>
      </NavLink>
    </div>
  );
}

export default Nav;
