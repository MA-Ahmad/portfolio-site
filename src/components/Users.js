import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/user-context";
import { Link } from "react-router-dom";

const Users = () => {
  const context = useContext(UserContext);

  console.log(context.users);
  return (
    <div className="row">
      {context.users.map(user => {
        return (
          <div className="col-lg-4" key={user.id}>
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 140x140"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2>Heading</h2>
            <p>{user.description}</p>
            <p>
              <Link
                to={`/user/${user.id}`}
                className="btn btn-secondary"
                href="#"
                role="button"
              >
                View details
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
