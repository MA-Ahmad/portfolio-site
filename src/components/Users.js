import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/user-context";
import { Link } from "react-router-dom";
import { Container, Card, Button, Row, Col, Modal } from "react-bootstrap";

const Users = () => {
  const context = useContext(UserContext);
  let userChunks = [];
  let usersList = [];
  console.log(context.users);

  return (
    <React.Fragment>
      <div role="main">
        <Button variant="primary ml-2 mt-2">Add User</Button>{" "}
        <div className="container marketing p-4">
          {context.users.map(user => {
            if (userChunks.length < 3) {
              userChunks.push(user);
            } else {
              usersList = (
                <div className="row">
                  {userChunks.map(user => (
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
                      <h2>{user.name}</h2>
                      <p>{user.description}</p>
                      <p>
                        <Link
                          to={`/users/${user.id}`}
                          className="btn btn-secondary"
                          href="#"
                          role="button"
                        >
                          View details
                        </Link>
                      </p>
                    </div>
                  ))}
                </div>
              );
              {
                userChunks = [];
                userChunks.push(user);
              }
            }
          })}
          {usersList}
          <div className="row">
            {userChunks.map(user => (
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
                <h2>{user.name}</h2>
                <p>{user.description}</p>
                <p>
                  <Link
                    to={`/users/${user.id}`}
                    className="btn btn-secondary"
                    href="#"
                    role="button"
                  >
                    View details
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
